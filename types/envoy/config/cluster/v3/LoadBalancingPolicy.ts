// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface _envoy_config_cluster_v3_LoadBalancingPolicy_Policy {
  'typed_extension_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
}

export interface _envoy_config_cluster_v3_LoadBalancingPolicy_Policy__Output {
  'typed_extension_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}

export interface LoadBalancingPolicy {
  'policies'?: (_envoy_config_cluster_v3_LoadBalancingPolicy_Policy)[];
}

export interface LoadBalancingPolicy__Output {
  'policies'?: (_envoy_config_cluster_v3_LoadBalancingPolicy_Policy__Output)[];
}
