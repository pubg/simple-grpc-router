// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto

import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../../envoy/type/matcher/v3/StringMatcher';

// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto

export const _envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher_SanType = {
  SAN_TYPE_UNSPECIFIED: 0,
  EMAIL: 1,
  DNS: 2,
  URI: 3,
  IP_ADDRESS: 4,
} as const;

export type _envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher_SanType =
  | 'SAN_TYPE_UNSPECIFIED'
  | 0
  | 'EMAIL'
  | 1
  | 'DNS'
  | 2
  | 'URI'
  | 3
  | 'IP_ADDRESS'
  | 4

export type _envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher_SanType__Output = typeof _envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher_SanType[keyof typeof _envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher_SanType]

export interface SubjectAltNameMatcher {
  'san_type'?: (_envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher_SanType);
  'matcher'?: (_envoy_type_matcher_v3_StringMatcher | null);
}

export interface SubjectAltNameMatcher__Output {
  'san_type'?: (_envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher_SanType__Output);
  'matcher'?: (_envoy_type_matcher_v3_StringMatcher__Output);
}
