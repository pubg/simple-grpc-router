// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../envoy/type/matcher/v3/StringMatcher';

export interface QueryParameterMatcher {
  'name'?: (string);
  'string_match'?: (_envoy_type_matcher_v3_StringMatcher | null);
  'present_match'?: (boolean);
  'query_parameter_match_specifier'?: "string_match"|"present_match";
}

export interface QueryParameterMatcher__Output {
  'name'?: (string);
  'string_match'?: (_envoy_type_matcher_v3_StringMatcher__Output);
  'present_match'?: (boolean);
}
