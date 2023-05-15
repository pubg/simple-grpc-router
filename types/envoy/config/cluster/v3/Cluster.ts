// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { HealthCheck as _envoy_config_core_v3_HealthCheck, HealthCheck__Output as _envoy_config_core_v3_HealthCheck__Output } from '../../../../envoy/config/core/v3/HealthCheck';
import type { CircuitBreakers as _envoy_config_cluster_v3_CircuitBreakers, CircuitBreakers__Output as _envoy_config_cluster_v3_CircuitBreakers__Output } from '../../../../envoy/config/cluster/v3/CircuitBreakers';
import type { Http1ProtocolOptions as _envoy_config_core_v3_Http1ProtocolOptions, Http1ProtocolOptions__Output as _envoy_config_core_v3_Http1ProtocolOptions__Output } from '../../../../envoy/config/core/v3/Http1ProtocolOptions';
import type { Http2ProtocolOptions as _envoy_config_core_v3_Http2ProtocolOptions, Http2ProtocolOptions__Output as _envoy_config_core_v3_Http2ProtocolOptions__Output } from '../../../../envoy/config/core/v3/Http2ProtocolOptions';
import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { OutlierDetection as _envoy_config_cluster_v3_OutlierDetection, OutlierDetection__Output as _envoy_config_cluster_v3_OutlierDetection__Output } from '../../../../envoy/config/cluster/v3/OutlierDetection';
import type { BindConfig as _envoy_config_core_v3_BindConfig, BindConfig__Output as _envoy_config_core_v3_BindConfig__Output } from '../../../../envoy/config/core/v3/BindConfig';
import type { TransportSocket as _envoy_config_core_v3_TransportSocket, TransportSocket__Output as _envoy_config_core_v3_TransportSocket__Output } from '../../../../envoy/config/core/v3/TransportSocket';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { HttpProtocolOptions as _envoy_config_core_v3_HttpProtocolOptions, HttpProtocolOptions__Output as _envoy_config_core_v3_HttpProtocolOptions__Output } from '../../../../envoy/config/core/v3/HttpProtocolOptions';
import type { UpstreamConnectionOptions as _envoy_config_cluster_v3_UpstreamConnectionOptions, UpstreamConnectionOptions__Output as _envoy_config_cluster_v3_UpstreamConnectionOptions__Output } from '../../../../envoy/config/cluster/v3/UpstreamConnectionOptions';
import type { ClusterLoadAssignment as _envoy_config_endpoint_v3_ClusterLoadAssignment, ClusterLoadAssignment__Output as _envoy_config_endpoint_v3_ClusterLoadAssignment__Output } from '../../../../envoy/config/endpoint/v3/ClusterLoadAssignment';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { Filter as _envoy_config_cluster_v3_Filter, Filter__Output as _envoy_config_cluster_v3_Filter__Output } from '../../../../envoy/config/cluster/v3/Filter';
import type { LoadBalancingPolicy as _envoy_config_cluster_v3_LoadBalancingPolicy, LoadBalancingPolicy__Output as _envoy_config_cluster_v3_LoadBalancingPolicy__Output } from '../../../../envoy/config/cluster/v3/LoadBalancingPolicy';
import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../envoy/config/core/v3/ConfigSource';
import type { UpstreamHttpProtocolOptions as _envoy_config_core_v3_UpstreamHttpProtocolOptions, UpstreamHttpProtocolOptions__Output as _envoy_config_core_v3_UpstreamHttpProtocolOptions__Output } from '../../../../envoy/config/core/v3/UpstreamHttpProtocolOptions';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { TrackClusterStats as _envoy_config_cluster_v3_TrackClusterStats, TrackClusterStats__Output as _envoy_config_cluster_v3_TrackClusterStats__Output } from '../../../../envoy/config/cluster/v3/TrackClusterStats';
import type { DnsResolutionConfig as _envoy_config_core_v3_DnsResolutionConfig, DnsResolutionConfig__Output as _envoy_config_core_v3_DnsResolutionConfig__Output } from '../../../../envoy/config/core/v3/DnsResolutionConfig';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';
import type { RuntimeDouble as _envoy_config_core_v3_RuntimeDouble, RuntimeDouble__Output as _envoy_config_core_v3_RuntimeDouble__Output } from '../../../../envoy/config/core/v3/RuntimeDouble';
import type { Percent as _envoy_type_v3_Percent, Percent__Output as _envoy_type_v3_Percent__Output } from '../../../../envoy/type/v3/Percent';
import type { UInt64Value as _google_protobuf_UInt64Value, UInt64Value__Output as _google_protobuf_UInt64Value__Output } from '../../../../google/protobuf/UInt64Value';
import type { HealthStatusSet as _envoy_config_core_v3_HealthStatusSet, HealthStatusSet__Output as _envoy_config_core_v3_HealthStatusSet__Output } from '../../../../envoy/config/core/v3/HealthStatusSet';
import type { DoubleValue as _google_protobuf_DoubleValue, DoubleValue__Output as _google_protobuf_DoubleValue__Output } from '../../../../google/protobuf/DoubleValue';

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_ClusterProtocolSelection = {
  USE_CONFIGURED_PROTOCOL: 0,
  USE_DOWNSTREAM_PROTOCOL: 1,
} as const;

export type _envoy_config_cluster_v3_Cluster_ClusterProtocolSelection =
  | 'USE_CONFIGURED_PROTOCOL'
  | 0
  | 'USE_DOWNSTREAM_PROTOCOL'
  | 1

export type _envoy_config_cluster_v3_Cluster_ClusterProtocolSelection__Output = typeof _envoy_config_cluster_v3_Cluster_ClusterProtocolSelection[keyof typeof _envoy_config_cluster_v3_Cluster_ClusterProtocolSelection]

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig {
  'healthy_panic_threshold'?: (_envoy_type_v3_Percent | null);
  'zone_aware_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig_ZoneAwareLbConfig | null);
  'locality_weighted_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig_LocalityWeightedLbConfig | null);
  'update_merge_window'?: (_google_protobuf_Duration | null);
  'ignore_new_hosts_until_first_hc'?: (boolean);
  'close_connections_on_host_set_change'?: (boolean);
  'consistent_hashing_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig_ConsistentHashingLbConfig | null);
  'override_host_status'?: (_envoy_config_core_v3_HealthStatusSet | null);
  'locality_config_specifier'?: "zone_aware_lb_config"|"locality_weighted_lb_config";
}

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig__Output {
  'healthy_panic_threshold'?: (_envoy_type_v3_Percent__Output);
  'zone_aware_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig_ZoneAwareLbConfig__Output);
  'locality_weighted_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig_LocalityWeightedLbConfig__Output);
  'update_merge_window'?: (_google_protobuf_Duration__Output);
  'ignore_new_hosts_until_first_hc'?: (boolean);
  'close_connections_on_host_set_change'?: (boolean);
  'consistent_hashing_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig_ConsistentHashingLbConfig__Output);
  'override_host_status'?: (_envoy_config_core_v3_HealthStatusSet__Output);
}

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig_ConsistentHashingLbConfig {
  'use_hostname_for_hashing'?: (boolean);
  'hash_balance_factor'?: (_google_protobuf_UInt32Value | null);
}

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig_ConsistentHashingLbConfig__Output {
  'use_hostname_for_hashing'?: (boolean);
  'hash_balance_factor'?: (_google_protobuf_UInt32Value__Output);
}

export interface _envoy_config_cluster_v3_Cluster_CustomClusterType {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
}

export interface _envoy_config_cluster_v3_Cluster_CustomClusterType__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_DiscoveryType = {
  STATIC: 0,
  STRICT_DNS: 1,
  LOGICAL_DNS: 2,
  EDS: 3,
  ORIGINAL_DST: 4,
} as const;

export type _envoy_config_cluster_v3_Cluster_DiscoveryType =
  | 'STATIC'
  | 0
  | 'STRICT_DNS'
  | 1
  | 'LOGICAL_DNS'
  | 2
  | 'EDS'
  | 3
  | 'ORIGINAL_DST'
  | 4

export type _envoy_config_cluster_v3_Cluster_DiscoveryType__Output = typeof _envoy_config_cluster_v3_Cluster_DiscoveryType[keyof typeof _envoy_config_cluster_v3_Cluster_DiscoveryType]

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_DnsLookupFamily = {
  AUTO: 0,
  V4_ONLY: 1,
  V6_ONLY: 2,
  V4_PREFERRED: 3,
  ALL: 4,
} as const;

export type _envoy_config_cluster_v3_Cluster_DnsLookupFamily =
  | 'AUTO'
  | 0
  | 'V4_ONLY'
  | 1
  | 'V6_ONLY'
  | 2
  | 'V4_PREFERRED'
  | 3
  | 'ALL'
  | 4

export type _envoy_config_cluster_v3_Cluster_DnsLookupFamily__Output = typeof _envoy_config_cluster_v3_Cluster_DnsLookupFamily[keyof typeof _envoy_config_cluster_v3_Cluster_DnsLookupFamily]

export interface _envoy_config_cluster_v3_Cluster_EdsClusterConfig {
  'eds_config'?: (_envoy_config_core_v3_ConfigSource | null);
  'service_name'?: (string);
}

export interface _envoy_config_cluster_v3_Cluster_EdsClusterConfig__Output {
  'eds_config'?: (_envoy_config_core_v3_ConfigSource__Output);
  'service_name'?: (string);
}

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_RingHashLbConfig_HashFunction = {
  XX_HASH: 0,
  MURMUR_HASH_2: 1,
} as const;

export type _envoy_config_cluster_v3_Cluster_RingHashLbConfig_HashFunction =
  | 'XX_HASH'
  | 0
  | 'MURMUR_HASH_2'
  | 1

export type _envoy_config_cluster_v3_Cluster_RingHashLbConfig_HashFunction__Output = typeof _envoy_config_cluster_v3_Cluster_RingHashLbConfig_HashFunction[keyof typeof _envoy_config_cluster_v3_Cluster_RingHashLbConfig_HashFunction]

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_LbPolicy = {
  ROUND_ROBIN: 0,
  LEAST_REQUEST: 1,
  RING_HASH: 2,
  RANDOM: 3,
  MAGLEV: 5,
  CLUSTER_PROVIDED: 6,
  LOAD_BALANCING_POLICY_CONFIG: 7,
} as const;

export type _envoy_config_cluster_v3_Cluster_LbPolicy =
  | 'ROUND_ROBIN'
  | 0
  | 'LEAST_REQUEST'
  | 1
  | 'RING_HASH'
  | 2
  | 'RANDOM'
  | 3
  | 'MAGLEV'
  | 5
  | 'CLUSTER_PROVIDED'
  | 6
  | 'LOAD_BALANCING_POLICY_CONFIG'
  | 7

export type _envoy_config_cluster_v3_Cluster_LbPolicy__Output = typeof _envoy_config_cluster_v3_Cluster_LbPolicy[keyof typeof _envoy_config_cluster_v3_Cluster_LbPolicy]

export interface _envoy_config_cluster_v3_Cluster_LbSubsetConfig {
  'fallback_policy'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetFallbackPolicy);
  'default_subset'?: (_google_protobuf_Struct | null);
  'subset_selectors'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector)[];
  'locality_weight_aware'?: (boolean);
  'scale_locality_weight'?: (boolean);
  'panic_mode_any'?: (boolean);
  'list_as_any'?: (boolean);
  'metadata_fallback_policy'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetMetadataFallbackPolicy);
}

export interface _envoy_config_cluster_v3_Cluster_LbSubsetConfig__Output {
  'fallback_policy'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetFallbackPolicy__Output);
  'default_subset'?: (_google_protobuf_Struct__Output);
  'subset_selectors'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector__Output)[];
  'locality_weight_aware'?: (boolean);
  'scale_locality_weight'?: (boolean);
  'panic_mode_any'?: (boolean);
  'list_as_any'?: (boolean);
  'metadata_fallback_policy'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetMetadataFallbackPolicy__Output);
}

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetFallbackPolicy = {
  NO_FALLBACK: 0,
  ANY_ENDPOINT: 1,
  DEFAULT_SUBSET: 2,
} as const;

export type _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetFallbackPolicy =
  | 'NO_FALLBACK'
  | 0
  | 'ANY_ENDPOINT'
  | 1
  | 'DEFAULT_SUBSET'
  | 2

export type _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetFallbackPolicy__Output = typeof _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetFallbackPolicy[keyof typeof _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetFallbackPolicy]

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetMetadataFallbackPolicy = {
  METADATA_NO_FALLBACK: 0,
  FALLBACK_LIST: 1,
} as const;

export type _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetMetadataFallbackPolicy =
  | 'METADATA_NO_FALLBACK'
  | 0
  | 'FALLBACK_LIST'
  | 1

export type _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetMetadataFallbackPolicy__Output = typeof _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetMetadataFallbackPolicy[keyof typeof _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetMetadataFallbackPolicy]

export interface _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector {
  'keys'?: (string)[];
  'single_host_per_subset'?: (boolean);
  'fallback_policy'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector_LbSubsetSelectorFallbackPolicy);
  'fallback_keys_subset'?: (string)[];
}

export interface _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector__Output {
  'keys'?: (string)[];
  'single_host_per_subset'?: (boolean);
  'fallback_policy'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector_LbSubsetSelectorFallbackPolicy__Output);
  'fallback_keys_subset'?: (string)[];
}

// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

export const _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector_LbSubsetSelectorFallbackPolicy = {
  NOT_DEFINED: 0,
  NO_FALLBACK: 1,
  ANY_ENDPOINT: 2,
  DEFAULT_SUBSET: 3,
  KEYS_SUBSET: 4,
} as const;

export type _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector_LbSubsetSelectorFallbackPolicy =
  | 'NOT_DEFINED'
  | 0
  | 'NO_FALLBACK'
  | 1
  | 'ANY_ENDPOINT'
  | 2
  | 'DEFAULT_SUBSET'
  | 3
  | 'KEYS_SUBSET'
  | 4

export type _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector_LbSubsetSelectorFallbackPolicy__Output = typeof _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector_LbSubsetSelectorFallbackPolicy[keyof typeof _envoy_config_cluster_v3_Cluster_LbSubsetConfig_LbSubsetSelector_LbSubsetSelectorFallbackPolicy]

export interface _envoy_config_cluster_v3_Cluster_LeastRequestLbConfig {
  'choice_count'?: (_google_protobuf_UInt32Value | null);
  'active_request_bias'?: (_envoy_config_core_v3_RuntimeDouble | null);
  'slow_start_config'?: (_envoy_config_cluster_v3_Cluster_SlowStartConfig | null);
}

export interface _envoy_config_cluster_v3_Cluster_LeastRequestLbConfig__Output {
  'choice_count'?: (_google_protobuf_UInt32Value__Output);
  'active_request_bias'?: (_envoy_config_core_v3_RuntimeDouble__Output);
  'slow_start_config'?: (_envoy_config_cluster_v3_Cluster_SlowStartConfig__Output);
}

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig_LocalityWeightedLbConfig {
}

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig_LocalityWeightedLbConfig__Output {
}

export interface _envoy_config_cluster_v3_Cluster_MaglevLbConfig {
  'table_size'?: (_google_protobuf_UInt64Value | null);
}

export interface _envoy_config_cluster_v3_Cluster_MaglevLbConfig__Output {
  'table_size'?: (_google_protobuf_UInt64Value__Output);
}

export interface _envoy_config_cluster_v3_Cluster_OriginalDstLbConfig {
  'use_http_header'?: (boolean);
  'http_header_name'?: (string);
  'upstream_port_override'?: (_google_protobuf_UInt32Value | null);
}

export interface _envoy_config_cluster_v3_Cluster_OriginalDstLbConfig__Output {
  'use_http_header'?: (boolean);
  'http_header_name'?: (string);
  'upstream_port_override'?: (_google_protobuf_UInt32Value__Output);
}

export interface _envoy_config_cluster_v3_Cluster_PreconnectPolicy {
  'per_upstream_preconnect_ratio'?: (_google_protobuf_DoubleValue | null);
  'predictive_preconnect_ratio'?: (_google_protobuf_DoubleValue | null);
}

export interface _envoy_config_cluster_v3_Cluster_PreconnectPolicy__Output {
  'per_upstream_preconnect_ratio'?: (_google_protobuf_DoubleValue__Output);
  'predictive_preconnect_ratio'?: (_google_protobuf_DoubleValue__Output);
}

export interface _envoy_config_cluster_v3_Cluster_RefreshRate {
  'base_interval'?: (_google_protobuf_Duration | null);
  'max_interval'?: (_google_protobuf_Duration | null);
}

export interface _envoy_config_cluster_v3_Cluster_RefreshRate__Output {
  'base_interval'?: (_google_protobuf_Duration__Output);
  'max_interval'?: (_google_protobuf_Duration__Output);
}

export interface _envoy_config_cluster_v3_Cluster_RingHashLbConfig {
  'minimum_ring_size'?: (_google_protobuf_UInt64Value | null);
  'hash_function'?: (_envoy_config_cluster_v3_Cluster_RingHashLbConfig_HashFunction);
  'maximum_ring_size'?: (_google_protobuf_UInt64Value | null);
}

export interface _envoy_config_cluster_v3_Cluster_RingHashLbConfig__Output {
  'minimum_ring_size'?: (_google_protobuf_UInt64Value__Output);
  'hash_function'?: (_envoy_config_cluster_v3_Cluster_RingHashLbConfig_HashFunction__Output);
  'maximum_ring_size'?: (_google_protobuf_UInt64Value__Output);
}

export interface _envoy_config_cluster_v3_Cluster_RoundRobinLbConfig {
  'slow_start_config'?: (_envoy_config_cluster_v3_Cluster_SlowStartConfig | null);
}

export interface _envoy_config_cluster_v3_Cluster_RoundRobinLbConfig__Output {
  'slow_start_config'?: (_envoy_config_cluster_v3_Cluster_SlowStartConfig__Output);
}

export interface _envoy_config_cluster_v3_Cluster_SlowStartConfig {
  'slow_start_window'?: (_google_protobuf_Duration | null);
  'aggression'?: (_envoy_config_core_v3_RuntimeDouble | null);
  'min_weight_percent'?: (_envoy_type_v3_Percent | null);
}

export interface _envoy_config_cluster_v3_Cluster_SlowStartConfig__Output {
  'slow_start_window'?: (_google_protobuf_Duration__Output);
  'aggression'?: (_envoy_config_core_v3_RuntimeDouble__Output);
  'min_weight_percent'?: (_envoy_type_v3_Percent__Output);
}

export interface _envoy_config_cluster_v3_Cluster_TransportSocketMatch {
  'name'?: (string);
  'match'?: (_google_protobuf_Struct | null);
  'transport_socket'?: (_envoy_config_core_v3_TransportSocket | null);
}

export interface _envoy_config_cluster_v3_Cluster_TransportSocketMatch__Output {
  'name'?: (string);
  'match'?: (_google_protobuf_Struct__Output);
  'transport_socket'?: (_envoy_config_core_v3_TransportSocket__Output);
}

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig_ZoneAwareLbConfig {
  'routing_enabled'?: (_envoy_type_v3_Percent | null);
  'min_cluster_size'?: (_google_protobuf_UInt64Value | null);
  'fail_traffic_on_panic'?: (boolean);
}

export interface _envoy_config_cluster_v3_Cluster_CommonLbConfig_ZoneAwareLbConfig__Output {
  'routing_enabled'?: (_envoy_type_v3_Percent__Output);
  'min_cluster_size'?: (_google_protobuf_UInt64Value__Output);
  'fail_traffic_on_panic'?: (boolean);
}

export interface Cluster {
  'name'?: (string);
  'type'?: (_envoy_config_cluster_v3_Cluster_DiscoveryType);
  'eds_cluster_config'?: (_envoy_config_cluster_v3_Cluster_EdsClusterConfig | null);
  'connect_timeout'?: (_google_protobuf_Duration | null);
  'per_connection_buffer_limit_bytes'?: (_google_protobuf_UInt32Value | null);
  'lb_policy'?: (_envoy_config_cluster_v3_Cluster_LbPolicy);
  'health_checks'?: (_envoy_config_core_v3_HealthCheck)[];
  'max_requests_per_connection'?: (_google_protobuf_UInt32Value | null);
  'circuit_breakers'?: (_envoy_config_cluster_v3_CircuitBreakers | null);
  'http_protocol_options'?: (_envoy_config_core_v3_Http1ProtocolOptions | null);
  'http2_protocol_options'?: (_envoy_config_core_v3_Http2ProtocolOptions | null);
  'dns_refresh_rate'?: (_google_protobuf_Duration | null);
  'dns_lookup_family'?: (_envoy_config_cluster_v3_Cluster_DnsLookupFamily);
  'dns_resolvers'?: (_envoy_config_core_v3_Address)[];
  'outlier_detection'?: (_envoy_config_cluster_v3_OutlierDetection | null);
  'cleanup_interval'?: (_google_protobuf_Duration | null);
  'upstream_bind_config'?: (_envoy_config_core_v3_BindConfig | null);
  'lb_subset_config'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig | null);
  'ring_hash_lb_config'?: (_envoy_config_cluster_v3_Cluster_RingHashLbConfig | null);
  'transport_socket'?: (_envoy_config_core_v3_TransportSocket | null);
  'metadata'?: (_envoy_config_core_v3_Metadata | null);
  'protocol_selection'?: (_envoy_config_cluster_v3_Cluster_ClusterProtocolSelection);
  'common_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig | null);
  'alt_stat_name'?: (string);
  'common_http_protocol_options'?: (_envoy_config_core_v3_HttpProtocolOptions | null);
  'upstream_connection_options'?: (_envoy_config_cluster_v3_UpstreamConnectionOptions | null);
  'close_connections_on_host_health_failure'?: (boolean);
  'ignore_health_on_host_removal'?: (boolean);
  'load_assignment'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment | null);
  'original_dst_lb_config'?: (_envoy_config_cluster_v3_Cluster_OriginalDstLbConfig | null);
  'typed_extension_protocol_options'?: ({[key: string]: _google_protobuf_Any});
  'least_request_lb_config'?: (_envoy_config_cluster_v3_Cluster_LeastRequestLbConfig | null);
  'cluster_type'?: (_envoy_config_cluster_v3_Cluster_CustomClusterType | null);
  'respect_dns_ttl'?: (boolean);
  'filters'?: (_envoy_config_cluster_v3_Filter)[];
  'load_balancing_policy'?: (_envoy_config_cluster_v3_LoadBalancingPolicy | null);
  'lrs_server'?: (_envoy_config_core_v3_ConfigSource | null);
  'transport_socket_matches'?: (_envoy_config_cluster_v3_Cluster_TransportSocketMatch)[];
  'dns_failure_refresh_rate'?: (_envoy_config_cluster_v3_Cluster_RefreshRate | null);
  'use_tcp_for_dns_lookups'?: (boolean);
  'upstream_http_protocol_options'?: (_envoy_config_core_v3_UpstreamHttpProtocolOptions | null);
  'track_timeout_budgets'?: (boolean);
  'upstream_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'track_cluster_stats'?: (_envoy_config_cluster_v3_TrackClusterStats | null);
  'preconnect_policy'?: (_envoy_config_cluster_v3_Cluster_PreconnectPolicy | null);
  'connection_pool_per_downstream_connection'?: (boolean);
  'maglev_lb_config'?: (_envoy_config_cluster_v3_Cluster_MaglevLbConfig | null);
  'dns_resolution_config'?: (_envoy_config_core_v3_DnsResolutionConfig | null);
  'wait_for_warm_on_init'?: (_google_protobuf_BoolValue | null);
  'typed_dns_resolver_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'round_robin_lb_config'?: (_envoy_config_cluster_v3_Cluster_RoundRobinLbConfig | null);
  'cluster_discovery_type'?: "type"|"cluster_type";
  'lb_config'?: "ring_hash_lb_config"|"maglev_lb_config"|"original_dst_lb_config"|"least_request_lb_config"|"round_robin_lb_config";
}

export interface Cluster__Output {
  'name'?: (string);
  'type'?: (_envoy_config_cluster_v3_Cluster_DiscoveryType__Output);
  'eds_cluster_config'?: (_envoy_config_cluster_v3_Cluster_EdsClusterConfig__Output);
  'connect_timeout'?: (_google_protobuf_Duration__Output);
  'per_connection_buffer_limit_bytes'?: (_google_protobuf_UInt32Value__Output);
  'lb_policy'?: (_envoy_config_cluster_v3_Cluster_LbPolicy__Output);
  'health_checks'?: (_envoy_config_core_v3_HealthCheck__Output)[];
  'max_requests_per_connection'?: (_google_protobuf_UInt32Value__Output);
  'circuit_breakers'?: (_envoy_config_cluster_v3_CircuitBreakers__Output);
  'http_protocol_options'?: (_envoy_config_core_v3_Http1ProtocolOptions__Output);
  'http2_protocol_options'?: (_envoy_config_core_v3_Http2ProtocolOptions__Output);
  'dns_refresh_rate'?: (_google_protobuf_Duration__Output);
  'dns_lookup_family'?: (_envoy_config_cluster_v3_Cluster_DnsLookupFamily__Output);
  'dns_resolvers'?: (_envoy_config_core_v3_Address__Output)[];
  'outlier_detection'?: (_envoy_config_cluster_v3_OutlierDetection__Output);
  'cleanup_interval'?: (_google_protobuf_Duration__Output);
  'upstream_bind_config'?: (_envoy_config_core_v3_BindConfig__Output);
  'lb_subset_config'?: (_envoy_config_cluster_v3_Cluster_LbSubsetConfig__Output);
  'ring_hash_lb_config'?: (_envoy_config_cluster_v3_Cluster_RingHashLbConfig__Output);
  'transport_socket'?: (_envoy_config_core_v3_TransportSocket__Output);
  'metadata'?: (_envoy_config_core_v3_Metadata__Output);
  'protocol_selection'?: (_envoy_config_cluster_v3_Cluster_ClusterProtocolSelection__Output);
  'common_lb_config'?: (_envoy_config_cluster_v3_Cluster_CommonLbConfig__Output);
  'alt_stat_name'?: (string);
  'common_http_protocol_options'?: (_envoy_config_core_v3_HttpProtocolOptions__Output);
  'upstream_connection_options'?: (_envoy_config_cluster_v3_UpstreamConnectionOptions__Output);
  'close_connections_on_host_health_failure'?: (boolean);
  'ignore_health_on_host_removal'?: (boolean);
  'load_assignment'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment__Output);
  'original_dst_lb_config'?: (_envoy_config_cluster_v3_Cluster_OriginalDstLbConfig__Output);
  'typed_extension_protocol_options'?: ({[key: string]: _google_protobuf_Any__Output});
  'least_request_lb_config'?: (_envoy_config_cluster_v3_Cluster_LeastRequestLbConfig__Output);
  'cluster_type'?: (_envoy_config_cluster_v3_Cluster_CustomClusterType__Output);
  'respect_dns_ttl'?: (boolean);
  'filters'?: (_envoy_config_cluster_v3_Filter__Output)[];
  'load_balancing_policy'?: (_envoy_config_cluster_v3_LoadBalancingPolicy__Output);
  'lrs_server'?: (_envoy_config_core_v3_ConfigSource__Output);
  'transport_socket_matches'?: (_envoy_config_cluster_v3_Cluster_TransportSocketMatch__Output)[];
  'dns_failure_refresh_rate'?: (_envoy_config_cluster_v3_Cluster_RefreshRate__Output);
  'use_tcp_for_dns_lookups'?: (boolean);
  'upstream_http_protocol_options'?: (_envoy_config_core_v3_UpstreamHttpProtocolOptions__Output);
  'track_timeout_budgets'?: (boolean);
  'upstream_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'track_cluster_stats'?: (_envoy_config_cluster_v3_TrackClusterStats__Output);
  'preconnect_policy'?: (_envoy_config_cluster_v3_Cluster_PreconnectPolicy__Output);
  'connection_pool_per_downstream_connection'?: (boolean);
  'maglev_lb_config'?: (_envoy_config_cluster_v3_Cluster_MaglevLbConfig__Output);
  'dns_resolution_config'?: (_envoy_config_core_v3_DnsResolutionConfig__Output);
  'wait_for_warm_on_init'?: (_google_protobuf_BoolValue__Output);
  'typed_dns_resolver_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'round_robin_lb_config'?: (_envoy_config_cluster_v3_Cluster_RoundRobinLbConfig__Output);
}
