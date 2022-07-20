import { INFO } from "./utils";
import type { Config } from "./env-to-config";
import type { Admin, Cluster, EnvoyConfig, FilterChain, Listener, Node, RouteElement, StaticResources } from "./interface";

export function generateConfig(cfg: Config): EnvoyConfig {

    if (!cfg.routeList?.length)
        throw new Error('No routes defined');

    INFO('Config', cfg);

    const node: Node = {
        id: cfg.nodeId,
        cluster: cfg.nodeCluster,
    };

    const admin: Admin = {
        access_log_path: '/tmp/admin_access.log',
        address: {
            socket_address: {
                address: '0.0.0.0',
                port_value: cfg.adminPort,
            },
        }
    };

    const routes: RouteElement[] = cfg.routeList.map(route => ({
        match: { path: route.path },
        route: {
            cluster: route.clusterName,
            timeout: '600s',
        },
    }));

    const listener: Listener = {
        name: 'listener',
        address: {
            socket_address: {
                address: '0.0.0.0',
                port_value: cfg.listenPort,
            },
        },
        filter_chains: [
            {
                filters: [
                    {
                        name: 'envoy.http_connection_manager',
                        typed_config: {
                            "@type": "type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager",
                            access_log: [
                                {
                                    name: 'envoy.file_access_log',
                                    typed_config: {
                                        "@type": "type.googleapis.com/envoy.extensions.access_loggers.file.v3.FileAccessLog",
                                        path: '/dev/stdout',
                                    },
                                }
                            ],
                            stat_prefix: 'grpc_json',
                            codec_type: 'AUTO',
                            route_config: {
                                name: 'local_route',
                                virtual_hosts: [
                                    {
                                        name: 'local_service',
                                        domains: ['*'],
                                        routes: [
                                            ...routes,
                                            {
                                                match: { path: '/' },
                                                direct_response: {
                                                    status: 200,
                                                    body: {
                                                        inline_string: 'ok',
                                                    }
                                                }
                                            },
                                        ],
                                        retry_policy: {
                                            retry_on: 'connect-failure,refused-stream,unavailable',
                                            num_retries: 3,
                                            per_try_timeout: '3600s',
                                            retry_back_off: {
                                                base_interval: '2s',
                                                max_interval: '2s',
                                            },
                                        },
                                    }
                                ],
                            },
                            upgrade_configs: { upgrade_type: 'websocket', enabled: true },
                            http_filters: [{
                                name: 'envoy.filters.http.grpc_web',
                                typed_config: { "@type": 'type.googleapis.com/envoy.extensions.filters.http.grpc_web.v3.GrpcWeb' }
                            }, {
                                name: 'envoy.filters.http.cors',
                                typed_config: { "@type": 'type.googleapis.com/envoy.extensions.filters.http.cors.v3.Cors' }
                            }, {
                                name: 'envoy.filters.http.router',
                                typed_config: { "@type": 'type.googleapis.com/envoy.extensions.filters.http.router.v3.Router' }
                            }]
                        }
                    }
                ],
            },
        ],
    };

    const listeners: Listener[] = [listener];
    const clusters: Cluster[] = [...cfg.clusterMap.values()].map(cluster => ({
        name: cluster.clusterName,
        connect_timeout: '1.25s',
        type: 'strict_dns',
        lb_policy: 'round_robin',
        dns_lookup_family: 'V4_ONLY',
        load_assignment: {
            cluster_name: cluster.clusterName,
            endpoints: [{
                lb_endpoints: [{
                    endpoint: {
                        address: {
                            socket_address: {
                                address: cluster.host,
                                port_value: cluster.port,
                            },
                        },
                    }
                }]
            }]
        },
        http2_protocol_options: {},
        circuit_breakers: {
            thresholds: {
                max_pending_requests: 100000000,
                max_requests: 100000000,
            },
        },
    }));

    const static_resources: StaticResources = {
        listeners,
        clusters,
    }

    return {
        node,
        admin,
        static_resources,
    };
}
