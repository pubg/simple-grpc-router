// Original file: .repos/envoy/api/envoy/config/core/v3/proxy_protocol.proto


// Original file: .repos/envoy/api/envoy/config/core/v3/proxy_protocol.proto

export const _envoy_config_core_v3_ProxyProtocolPassThroughTLVs_PassTLVsMatchType = {
  INCLUDE_ALL: 0,
  INCLUDE: 1,
} as const;

export type _envoy_config_core_v3_ProxyProtocolPassThroughTLVs_PassTLVsMatchType =
  | 'INCLUDE_ALL'
  | 0
  | 'INCLUDE'
  | 1

export type _envoy_config_core_v3_ProxyProtocolPassThroughTLVs_PassTLVsMatchType__Output = typeof _envoy_config_core_v3_ProxyProtocolPassThroughTLVs_PassTLVsMatchType[keyof typeof _envoy_config_core_v3_ProxyProtocolPassThroughTLVs_PassTLVsMatchType]

export interface ProxyProtocolPassThroughTLVs {
  'match_type'?: (_envoy_config_core_v3_ProxyProtocolPassThroughTLVs_PassTLVsMatchType);
  'tlv_type'?: (number)[];
}

export interface ProxyProtocolPassThroughTLVs__Output {
  'match_type'?: (_envoy_config_core_v3_ProxyProtocolPassThroughTLVs_PassTLVsMatchType__Output);
  'tlv_type'?: (number)[];
}
