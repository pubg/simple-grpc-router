// Original file: .repos/envoy/api/envoy/type/matcher/v3/string.proto

import type { RegexMatcher as _envoy_type_matcher_v3_RegexMatcher, RegexMatcher__Output as _envoy_type_matcher_v3_RegexMatcher__Output } from '../../../../envoy/type/matcher/v3/RegexMatcher';

export interface StringMatcher {
  'exact'?: (string);
  'prefix'?: (string);
  'suffix'?: (string);
  'safe_regex'?: (_envoy_type_matcher_v3_RegexMatcher | null);
  'ignore_case'?: (boolean);
  'contains'?: (string);
  'match_pattern'?: "exact"|"prefix"|"suffix"|"safe_regex"|"contains";
}

export interface StringMatcher__Output {
  'exact'?: (string);
  'prefix'?: (string);
  'suffix'?: (string);
  'safe_regex'?: (_envoy_type_matcher_v3_RegexMatcher__Output);
  'ignore_case'?: (boolean);
  'contains'?: (string);
}
