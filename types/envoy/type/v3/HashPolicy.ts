// Original file: .repos/envoy/api/envoy/type/v3/hash_policy.proto


export interface _envoy_type_v3_HashPolicy_FilterState {
  'key'?: (string);
}

export interface _envoy_type_v3_HashPolicy_FilterState__Output {
  'key'?: (string);
}

export interface _envoy_type_v3_HashPolicy_SourceIp {
}

export interface _envoy_type_v3_HashPolicy_SourceIp__Output {
}

export interface HashPolicy {
  'source_ip'?: (_envoy_type_v3_HashPolicy_SourceIp | null);
  'filter_state'?: (_envoy_type_v3_HashPolicy_FilterState | null);
  'policy_specifier'?: "source_ip"|"filter_state";
}

export interface HashPolicy__Output {
  'source_ip'?: (_envoy_type_v3_HashPolicy_SourceIp__Output);
  'filter_state'?: (_envoy_type_v3_HashPolicy_FilterState__Output);
}
