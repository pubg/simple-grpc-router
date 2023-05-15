// Original file: .repos/envoy/api/envoy/type/matcher/v3/regex.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

export interface _envoy_type_matcher_v3_RegexMatcher_GoogleRE2 {
  'max_program_size'?: (_google_protobuf_UInt32Value | null);
}

export interface _envoy_type_matcher_v3_RegexMatcher_GoogleRE2__Output {
  'max_program_size'?: (_google_protobuf_UInt32Value__Output);
}

export interface RegexMatcher {
  'google_re2'?: (_envoy_type_matcher_v3_RegexMatcher_GoogleRE2 | null);
  'regex'?: (string);
  'engine_type'?: "google_re2";
}

export interface RegexMatcher__Output {
  'google_re2'?: (_envoy_type_matcher_v3_RegexMatcher_GoogleRE2__Output);
  'regex'?: (string);
}
