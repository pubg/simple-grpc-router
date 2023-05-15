// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto


// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

export const _envoy_config_bootstrap_v3_CustomInlineHeader_InlineHeaderType = {
  REQUEST_HEADER: 0,
  REQUEST_TRAILER: 1,
  RESPONSE_HEADER: 2,
  RESPONSE_TRAILER: 3,
} as const;

export type _envoy_config_bootstrap_v3_CustomInlineHeader_InlineHeaderType =
  | 'REQUEST_HEADER'
  | 0
  | 'REQUEST_TRAILER'
  | 1
  | 'RESPONSE_HEADER'
  | 2
  | 'RESPONSE_TRAILER'
  | 3

export type _envoy_config_bootstrap_v3_CustomInlineHeader_InlineHeaderType__Output = typeof _envoy_config_bootstrap_v3_CustomInlineHeader_InlineHeaderType[keyof typeof _envoy_config_bootstrap_v3_CustomInlineHeader_InlineHeaderType]

export interface CustomInlineHeader {
  'inline_header_name'?: (string);
  'inline_header_type'?: (_envoy_config_bootstrap_v3_CustomInlineHeader_InlineHeaderType);
}

export interface CustomInlineHeader__Output {
  'inline_header_name'?: (string);
  'inline_header_type'?: (_envoy_config_bootstrap_v3_CustomInlineHeader_InlineHeaderType__Output);
}
