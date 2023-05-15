// Original file: .repos/envoy/api/envoy/type/matcher/v3/value.proto

import type { ValueMatcher as _envoy_type_matcher_v3_ValueMatcher, ValueMatcher__Output as _envoy_type_matcher_v3_ValueMatcher__Output } from '../../../../envoy/type/matcher/v3/ValueMatcher';

export interface ListMatcher {
  'one_of'?: (_envoy_type_matcher_v3_ValueMatcher | null);
  'match_pattern'?: "one_of";
}

export interface ListMatcher__Output {
  'one_of'?: (_envoy_type_matcher_v3_ValueMatcher__Output);
}
