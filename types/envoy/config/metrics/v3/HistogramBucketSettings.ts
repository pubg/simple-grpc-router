// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto

import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../envoy/type/matcher/v3/StringMatcher';

export interface HistogramBucketSettings {
  'match'?: (_envoy_type_matcher_v3_StringMatcher | null);
  'buckets'?: (number | string)[];
}

export interface HistogramBucketSettings__Output {
  'match'?: (_envoy_type_matcher_v3_StringMatcher__Output);
  'buckets'?: (number | string)[];
}
