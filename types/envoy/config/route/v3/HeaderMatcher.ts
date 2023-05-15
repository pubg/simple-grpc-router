// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { Int64Range as _envoy_type_v3_Int64Range, Int64Range__Output as _envoy_type_v3_Int64Range__Output } from '../../../../envoy/type/v3/Int64Range';
import type { RegexMatcher as _envoy_type_matcher_v3_RegexMatcher, RegexMatcher__Output as _envoy_type_matcher_v3_RegexMatcher__Output } from '../../../../envoy/type/matcher/v3/RegexMatcher';
import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../envoy/type/matcher/v3/StringMatcher';

export interface HeaderMatcher {
  'name'?: (string);
  'exact_match'?: (string);
  'range_match'?: (_envoy_type_v3_Int64Range | null);
  'present_match'?: (boolean);
  'invert_match'?: (boolean);
  'prefix_match'?: (string);
  'suffix_match'?: (string);
  'safe_regex_match'?: (_envoy_type_matcher_v3_RegexMatcher | null);
  'contains_match'?: (string);
  'string_match'?: (_envoy_type_matcher_v3_StringMatcher | null);
  'treat_missing_header_as_empty'?: (boolean);
  'header_match_specifier'?: "exact_match"|"safe_regex_match"|"range_match"|"present_match"|"prefix_match"|"suffix_match"|"contains_match"|"string_match";
}

export interface HeaderMatcher__Output {
  'name'?: (string);
  'exact_match'?: (string);
  'range_match'?: (_envoy_type_v3_Int64Range__Output);
  'present_match'?: (boolean);
  'invert_match'?: (boolean);
  'prefix_match'?: (string);
  'suffix_match'?: (string);
  'safe_regex_match'?: (_envoy_type_matcher_v3_RegexMatcher__Output);
  'contains_match'?: (string);
  'string_match'?: (_envoy_type_matcher_v3_StringMatcher__Output);
  'treat_missing_header_as_empty'?: (boolean);
}
