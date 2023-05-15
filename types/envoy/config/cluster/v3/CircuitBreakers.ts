// Original file: .repos/envoy/api/envoy/config/cluster/v3/circuit_breaker.proto

import type { RoutingPriority as _envoy_config_core_v3_RoutingPriority, RoutingPriority__Output as _envoy_config_core_v3_RoutingPriority__Output } from '../../../../envoy/config/core/v3/RoutingPriority';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Percent as _envoy_type_v3_Percent, Percent__Output as _envoy_type_v3_Percent__Output } from '../../../../envoy/type/v3/Percent';

export interface _envoy_config_cluster_v3_CircuitBreakers_Thresholds_RetryBudget {
  'budget_percent'?: (_envoy_type_v3_Percent | null);
  'min_retry_concurrency'?: (_google_protobuf_UInt32Value | null);
}

export interface _envoy_config_cluster_v3_CircuitBreakers_Thresholds_RetryBudget__Output {
  'budget_percent'?: (_envoy_type_v3_Percent__Output);
  'min_retry_concurrency'?: (_google_protobuf_UInt32Value__Output);
}

export interface _envoy_config_cluster_v3_CircuitBreakers_Thresholds {
  'priority'?: (_envoy_config_core_v3_RoutingPriority);
  'max_connections'?: (_google_protobuf_UInt32Value | null);
  'max_pending_requests'?: (_google_protobuf_UInt32Value | null);
  'max_requests'?: (_google_protobuf_UInt32Value | null);
  'max_retries'?: (_google_protobuf_UInt32Value | null);
  'retry_budget'?: (_envoy_config_cluster_v3_CircuitBreakers_Thresholds_RetryBudget | null);
  'track_remaining'?: (boolean);
  'max_connection_pools'?: (_google_protobuf_UInt32Value | null);
}

export interface _envoy_config_cluster_v3_CircuitBreakers_Thresholds__Output {
  'priority'?: (_envoy_config_core_v3_RoutingPriority__Output);
  'max_connections'?: (_google_protobuf_UInt32Value__Output);
  'max_pending_requests'?: (_google_protobuf_UInt32Value__Output);
  'max_requests'?: (_google_protobuf_UInt32Value__Output);
  'max_retries'?: (_google_protobuf_UInt32Value__Output);
  'retry_budget'?: (_envoy_config_cluster_v3_CircuitBreakers_Thresholds_RetryBudget__Output);
  'track_remaining'?: (boolean);
  'max_connection_pools'?: (_google_protobuf_UInt32Value__Output);
}

export interface CircuitBreakers {
  'thresholds'?: (_envoy_config_cluster_v3_CircuitBreakers_Thresholds)[];
  'per_host_thresholds'?: (_envoy_config_cluster_v3_CircuitBreakers_Thresholds)[];
}

export interface CircuitBreakers__Output {
  'thresholds'?: (_envoy_config_cluster_v3_CircuitBreakers_Thresholds__Output)[];
  'per_host_thresholds'?: (_envoy_config_cluster_v3_CircuitBreakers_Thresholds__Output)[];
}
