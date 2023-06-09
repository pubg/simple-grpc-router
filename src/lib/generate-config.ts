import { INFO } from "./utils";
import { getSdsCertConfig } from "./generate-sds";
import type { EnvConfig } from "./types";
import type { Cluster, Bootstrap, Admin, Node, Route, TransportSocket, DownstreamTlsContext, Listener, HttpConnectionManager, FileAccessLog, UpstreamTlsContext } from "../interface";

export function generateConfig(cfg: EnvConfig): Bootstrap {

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

    const routes: Route[] = cfg.routeList.map(route => ({
        match: { prefix: route.path },
        route: {
            cluster: route.clusterName,
            timeout: '600s',
        },
    }));

    const listenerCert = cfg.listenerCertName ? cfg.sdsConfigResources.find(s => s.name === cfg.listenerCertName) : undefined;
    const listenerCA = cfg.listenerCAName ? cfg.sdsConfigResources.find(s => s.name === cfg.listenerCAName) : undefined;

    if (cfg.listenerCertName && !listenerCert) throw new Error(`Listener cert ${cfg.listenerCertName} not found`);
    if (cfg.listenerCAName && !listenerCA) throw new Error(`Listener CA ${cfg.listenerCAName} not found`);

    const listenerTransportSocket: TransportSocket | undefined = listenerCert ? {
        name: 'envoy.transport_sockets.tls',
        typed_config: <any><DownstreamTlsContext>{
            "@type": 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext',
            common_tls_context: {
                alpn_protocols: ['h2,http/1.1'],
                tls_certificate_sds_secret_configs: [getSdsCertConfig(cfg.outputPath, listenerCert.name)],
                validation_context_sds_secret_config: cfg.listenerCAName ? getSdsCertConfig(cfg.outputPath, cfg.listenerCAName) : undefined
            }
        }
    } : undefined;

    const listener: Listener = {
        name: 'listener',
        address: {
            socket_address: {
                address: '0.0.0.0',
                port_value: cfg.listenPort,
            },
        },
        listener_filters: [
            // {
            //     name: 'envoy.filters.listener.proxy_protocol',
            //     typed_config: {
            //         "@type": 'type.googleapis.com/envoy.extensions.filters.listener.proxy_protocol.v3.ProxyProtocol',
            //     },
            // }
        ],
        filter_chains: [
            {
                transport_socket: listenerTransportSocket,
                filters: [
                    {
                        name: 'envoy.http_connection_manager',
                        typed_config: <any><HttpConnectionManager>{
                            "@type": "type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager",
                            access_log: [
                                {
                                    name: 'envoy.file_access_log',
                                    typed_config: <any><FileAccessLog>{
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
                            upgrade_configs: [{ upgrade_type: 'websocket', enabled: true }],
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
    const clusters: Cluster[] = [...cfg.clusterMap.values()].map(cluster => {
        const cert = cluster.certName ? cfg.sdsConfigResources.find(r => r.name === cluster.certName) : undefined;
        const ca = cluster.caName ? cfg.sdsConfigResources.find(r => r.name === cluster.caName) : undefined;

        if (cluster.certName && !cert) throw new Error(`Cert ${cluster.certName} not found`);
        if (cluster.caName && !ca) throw new Error(`CA ${cluster.caName} not found`);

        const transport_socket: TransportSocket | undefined = cert ? {
            name: 'envoy.transport_sockets.tls',
            typed_config: <any><UpstreamTlsContext>{
                "@type": 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext',
                common_tls_context: {
                    alpn_protocols: ['h2,http/1.1'],
                    tls_certificate_sds_secret_configs: [getSdsCertConfig(cfg.outputPath, cert.name)],
                    validation_context_sds_secret_config: cluster.caName ? getSdsCertConfig(cfg.outputPath, cluster.caName) : undefined
                },
            },
        } : undefined;

        return <Cluster>{
            name: cluster.clusterName,
            connect_timeout: '1.25s',
            type: 'STRICT_DNS',
            lb_policy: 'ROUND_ROBIN',
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
                thresholds: [{
                    max_pending_requests: 100000000,
                    max_requests: 100000000,
                }],
            },
            transport_socket,
        }
    });

    const static_resources: Bootstrap['static_resources'] = {
        listeners,
        clusters,
    }

    return {
        node,
        admin,
        static_resources,
    };
}
