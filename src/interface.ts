export interface EnvoyConfig {
    node: Node;
    admin: Admin;
    static_resources: StaticResources;
}

export interface Admin {
    access_log_path: string;
    address: AdminAddress;
}

export interface AdminAddress {
    socket_address: PurpleSocketAddress;
}

export interface PurpleSocketAddress {
    address: string;
    port_value: number;
}

export interface Node {
    id: string;
    cluster: string;
}

export interface StaticResources {
    listeners: Listener[];
    clusters: Cluster[];
}

export interface Cluster {
    name: string;
    connect_timeout: string;
    type: string;
    lb_policy: string;
    dns_lookup_family: string;
    load_assignment: LoadAssignment;
    typed_extension_protocol_options?: {
        "envoy.extensions.upstreams.http.v3.HttpProtocolOptions": {
            "@type": "type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions";
            auto_config: {
                http_protocol_options: HttpProtocolOptions;
                http2_protocol_options: Http2ProtocolOptions;
            }
        }
    };
    circuit_breakers: CircuitBreakers;
    transport_socket?: ClusterTransportSocket;
}

export interface ClusterTransportSocket {
    name: 'envoy.transport_sockets.tls',
    typed_config: {
        "@type": 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext',
        common_tls_context: {
            alpn_protocols: 'h2,http/1.1',
            tls_certificate_sds_secret_configs?: {
                name: string,
                sds_config: {
                    resource_api_version: "V3"
                    path_config_source: {
                        path: string
                    }
                },
            },
            validation_context_sds_secret_config?: {
                name: string,
                sds_config: {
                    resource_api_version: "V3"
                    path_config_source: {
                        path: string
                    }
                },
            },
        }
    }
}

export interface ListenerTransportSocket {
    name: 'envoy.transport_sockets.tls',
    typed_config: {
        "@type": 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext',
        common_tls_context: {
            alpn_protocols: 'h2,http/1.1',
            tls_certificate_sds_secret_configs?: {
                name: string,
                sds_config: {
                    resource_api_version: "V3"
                    path_config_source: {
                        path: string
                    }
                },
            },
            validation_context_sds_secret_config?: {
                name: string,
                sds_config: {
                    resource_api_version: "V3"
                    path_config_source: {
                        path: string
                    }
                },
            },
        }
    }
}

export interface CircuitBreakers {
    thresholds: Thresholds;
}

export interface Thresholds {
    max_pending_requests: number;
    max_requests: number;
}

export interface HttpProtocolOptions {
}

export interface Http2ProtocolOptions {
}

export interface LoadAssignment {
    cluster_name: string;
    endpoints: EndpointElement[];
}

export interface EndpointElement {
    lb_endpoints: LBEndpoint[];
}

export interface LBEndpoint {
    endpoint: LBEndpointEndpoint;
}

export interface LBEndpointEndpoint {
    address: EndpointAddress;
}

export interface EndpointAddress {
    socket_address: FluffySocketAddress;
}

export interface FluffySocketAddress {
    address: string;
    port_value: number;
}

export interface Listener {
    name: string;
    address: EndpointAddress;
    listener_filters?: any[];
    filter_chains: FilterChain[];
}

export interface FilterChain {
    filters: Filter[];
    transport_socket?: ListenerTransportSocket;
}

export interface Filter {
    name: string;
    typed_config: FilterTypedConfig;
}

export interface FilterTypedConfig {
    "@type": string;
    access_log: AccessLog[];
    stat_prefix: string;
    codec_type: string;
    route_config: RouteConfig;
    upgrade_configs: UpgradeConfigs;
    http_filters: HTTPFilter[];
}

export interface AccessLog {
    name: string;
    typed_config: AccessLogTypedConfig;
}

export interface AccessLogTypedConfig {
    "@type": string;
    path: string;
}

export interface HTTPFilter {
    name: string;
    typed_config: HTTPFilterTypedConfig;
}

export interface HTTPFilterTypedConfig {
    "@type": string;
}

export interface RouteConfig {
    name: string;
    virtual_hosts: VirtualHost[];
}

export interface VirtualHost {
    name: string;
    domains: string[];
    routes: RouteElement[];
    retry_policy: RetryPolicy;
}

export interface RetryPolicy {
    retry_on: string;
    num_retries: number;
    per_try_timeout: string;
    retry_back_off: RetryBackOff;
}

export interface RetryBackOff {
    base_interval: string;
    max_interval: string;
}

export interface RouteElement {
    match: Match;
    direct_response?: DirectResponse;
    route?: RouteRoute;
}

export interface DirectResponse {
    status: number;
    body: Body;
}

export interface Body {
    inline_string: string;
}

export interface Match {
    path?: string;
    prefix?: string;
}

export interface RouteRoute {
    cluster: string;
    timeout: string;
}

export interface UpgradeConfigs {
    upgrade_type: string;
    enabled: boolean;
}

export interface SDSResources {
    resources: SDSResourceSecret[];
}

export interface SDSResourceSecret {
    '@type': 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret',
    name: string,
    [key: string]: any
}
