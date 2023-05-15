// Original file: .repos/envoy/api/envoy/config/core/v3/proxy_protocol.proto

import type { ProxyProtocolPassThroughTLVs as _envoy_config_core_v3_ProxyProtocolPassThroughTLVs, ProxyProtocolPassThroughTLVs__Output as _envoy_config_core_v3_ProxyProtocolPassThroughTLVs__Output } from '../../../../envoy/config/core/v3/ProxyProtocolPassThroughTLVs';

// Original file: .repos/envoy/api/envoy/config/core/v3/proxy_protocol.proto

export const _envoy_config_core_v3_ProxyProtocolConfig_Version = {
  V1: 0,
  V2: 1,
} as const;

export type _envoy_config_core_v3_ProxyProtocolConfig_Version =
  | 'V1'
  | 0
  | 'V2'
  | 1

export type _envoy_config_core_v3_ProxyProtocolConfig_Version__Output = typeof _envoy_config_core_v3_ProxyProtocolConfig_Version[keyof typeof _envoy_config_core_v3_ProxyProtocolConfig_Version]

export interface ProxyProtocolConfig {
  'version'?: (_envoy_config_core_v3_ProxyProtocolConfig_Version);
  'pass_through_tlvs'?: (_envoy_config_core_v3_ProxyProtocolPassThroughTLVs | null);
}

export interface ProxyProtocolConfig__Output {
  'version'?: (_envoy_config_core_v3_ProxyProtocolConfig_Version__Output);
  'pass_through_tlvs'?: (_envoy_config_core_v3_ProxyProtocolPassThroughTLVs__Output);
}
