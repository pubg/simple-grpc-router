// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto

import type { ListStringMatcher as _envoy_type_matcher_v3_ListStringMatcher, ListStringMatcher__Output as _envoy_type_matcher_v3_ListStringMatcher__Output } from '../../../../envoy/type/matcher/v3/ListStringMatcher';

export interface StatsMatcher {
  'reject_all'?: (boolean);
  'exclusion_list'?: (_envoy_type_matcher_v3_ListStringMatcher | null);
  'inclusion_list'?: (_envoy_type_matcher_v3_ListStringMatcher | null);
  'stats_matcher'?: "reject_all"|"exclusion_list"|"inclusion_list";
}

export interface StatsMatcher__Output {
  'reject_all'?: (boolean);
  'exclusion_list'?: (_envoy_type_matcher_v3_ListStringMatcher__Output);
  'inclusion_list'?: (_envoy_type_matcher_v3_ListStringMatcher__Output);
}
