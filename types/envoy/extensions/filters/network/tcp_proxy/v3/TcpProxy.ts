// Original file: .repos/envoy/api/envoy/extensions/filters/network/tcp_proxy/v3/tcp_proxy.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../../../google/protobuf/Duration';
import type { AccessLog as _envoy_config_accesslog_v3_AccessLog, AccessLog__Output as _envoy_config_accesslog_v3_AccessLog__Output } from '../../../../../../envoy/config/accesslog/v3/AccessLog';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../../../google/protobuf/UInt32Value';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../../../envoy/config/core/v3/Metadata';
import type { HashPolicy as _envoy_type_v3_HashPolicy, HashPolicy__Output as _envoy_type_v3_HashPolicy__Output } from '../../../../../../envoy/type/v3/HashPolicy';
import type { HeaderValueOption as _envoy_config_core_v3_HeaderValueOption, HeaderValueOption__Output as _envoy_config_core_v3_HeaderValueOption__Output } from '../../../../../../envoy/config/core/v3/HeaderValueOption';
import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../../../envoy/config/core/v3/ConfigSource';

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster_ClusterWeight {
  'name'?: (string);
  'weight'?: (number);
  'metadata_match'?: (_envoy_config_core_v3_Metadata | null);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster_ClusterWeight__Output {
  'name'?: (string);
  'weight'?: (number);
  'metadata_match'?: (_envoy_config_core_v3_Metadata__Output);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_OnDemand {
  'odcds_config'?: (_envoy_config_core_v3_ConfigSource | null);
  'resources_locator'?: (string);
  'timeout'?: (_google_protobuf_Duration | null);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_OnDemand__Output {
  'odcds_config'?: (_envoy_config_core_v3_ConfigSource__Output);
  'resources_locator'?: (string);
  'timeout'?: (_google_protobuf_Duration__Output);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TcpAccessLogOptions {
  'access_log_flush_interval'?: (_google_protobuf_Duration | null);
  'flush_access_log_on_connected'?: (boolean);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TcpAccessLogOptions__Output {
  'access_log_flush_interval'?: (_google_protobuf_Duration__Output);
  'flush_access_log_on_connected'?: (boolean);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TunnelingConfig {
  'hostname'?: (string);
  'use_post'?: (boolean);
  'headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'propagate_response_headers'?: (boolean);
  'post_path'?: (string);
  'propagate_response_trailers'?: (boolean);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TunnelingConfig__Output {
  'hostname'?: (string);
  'use_post'?: (boolean);
  'headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'propagate_response_headers'?: (boolean);
  'post_path'?: (string);
  'propagate_response_trailers'?: (boolean);
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster {
  'clusters'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster_ClusterWeight)[];
}

export interface _envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster__Output {
  'clusters'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster_ClusterWeight__Output)[];
}

export interface TcpProxy {
  'stat_prefix'?: (string);
  'cluster'?: (string);
  'downstream_idle_timeout'?: (_google_protobuf_Duration | null);
  'upstream_idle_timeout'?: (_google_protobuf_Duration | null);
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog)[];
  'max_connect_attempts'?: (_google_protobuf_UInt32Value | null);
  'idle_timeout'?: (_google_protobuf_Duration | null);
  'metadata_match'?: (_envoy_config_core_v3_Metadata | null);
  'weighted_clusters'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster | null);
  'hash_policy'?: (_envoy_type_v3_HashPolicy)[];
  'tunneling_config'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TunnelingConfig | null);
  'max_downstream_connection_duration'?: (_google_protobuf_Duration | null);
  'on_demand'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_OnDemand | null);
  'access_log_flush_interval'?: (_google_protobuf_Duration | null);
  'flush_access_log_on_connected'?: (boolean);
  'access_log_options'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TcpAccessLogOptions | null);
  'cluster_specifier'?: "cluster"|"weighted_clusters";
}

export interface TcpProxy__Output {
  'stat_prefix'?: (string);
  'cluster'?: (string);
  'downstream_idle_timeout'?: (_google_protobuf_Duration__Output);
  'upstream_idle_timeout'?: (_google_protobuf_Duration__Output);
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog__Output)[];
  'max_connect_attempts'?: (_google_protobuf_UInt32Value__Output);
  'idle_timeout'?: (_google_protobuf_Duration__Output);
  'metadata_match'?: (_envoy_config_core_v3_Metadata__Output);
  'weighted_clusters'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_WeightedCluster__Output);
  'hash_policy'?: (_envoy_type_v3_HashPolicy__Output)[];
  'tunneling_config'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TunnelingConfig__Output);
  'max_downstream_connection_duration'?: (_google_protobuf_Duration__Output);
  'on_demand'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_OnDemand__Output);
  'access_log_flush_interval'?: (_google_protobuf_Duration__Output);
  'flush_access_log_on_connected'?: (boolean);
  'access_log_options'?: (_envoy_extensions_filters_network_tcp_proxy_v3_TcpProxy_TcpAccessLogOptions__Output);
}
