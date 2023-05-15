// Original file: .repos/envoy/api/envoy/type/matcher/v3/value.proto

import type { DoubleMatcher as _envoy_type_matcher_v3_DoubleMatcher, DoubleMatcher__Output as _envoy_type_matcher_v3_DoubleMatcher__Output } from '../../../../envoy/type/matcher/v3/DoubleMatcher';
import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../envoy/type/matcher/v3/StringMatcher';
import type { ListMatcher as _envoy_type_matcher_v3_ListMatcher, ListMatcher__Output as _envoy_type_matcher_v3_ListMatcher__Output } from '../../../../envoy/type/matcher/v3/ListMatcher';

export interface _envoy_type_matcher_v3_ValueMatcher_NullMatch {
}

export interface _envoy_type_matcher_v3_ValueMatcher_NullMatch__Output {
}

export interface ValueMatcher {
  'null_match'?: (_envoy_type_matcher_v3_ValueMatcher_NullMatch | null);
  'double_match'?: (_envoy_type_matcher_v3_DoubleMatcher | null);
  'string_match'?: (_envoy_type_matcher_v3_StringMatcher | null);
  'bool_match'?: (boolean);
  'present_match'?: (boolean);
  'list_match'?: (_envoy_type_matcher_v3_ListMatcher | null);
  'match_pattern'?: "null_match"|"double_match"|"string_match"|"bool_match"|"present_match"|"list_match";
}

export interface ValueMatcher__Output {
  'null_match'?: (_envoy_type_matcher_v3_ValueMatcher_NullMatch__Output);
  'double_match'?: (_envoy_type_matcher_v3_DoubleMatcher__Output);
  'string_match'?: (_envoy_type_matcher_v3_StringMatcher__Output);
  'bool_match'?: (boolean);
  'present_match'?: (boolean);
  'list_match'?: (_envoy_type_matcher_v3_ListMatcher__Output);
}
