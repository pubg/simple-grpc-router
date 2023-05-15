// Original file: .repos/envoy/api/envoy/type/matcher/v3/metadata.proto

import type { ValueMatcher as _envoy_type_matcher_v3_ValueMatcher, ValueMatcher__Output as _envoy_type_matcher_v3_ValueMatcher__Output } from '../../../../envoy/type/matcher/v3/ValueMatcher';

export interface _envoy_type_matcher_v3_MetadataMatcher_PathSegment {
  'key'?: (string);
  'segment'?: "key";
}

export interface _envoy_type_matcher_v3_MetadataMatcher_PathSegment__Output {
  'key'?: (string);
}

export interface MetadataMatcher {
  'filter'?: (string);
  'path'?: (_envoy_type_matcher_v3_MetadataMatcher_PathSegment)[];
  'value'?: (_envoy_type_matcher_v3_ValueMatcher | null);
  'invert'?: (boolean);
}

export interface MetadataMatcher__Output {
  'filter'?: (string);
  'path'?: (_envoy_type_matcher_v3_MetadataMatcher_PathSegment__Output)[];
  'value'?: (_envoy_type_matcher_v3_ValueMatcher__Output);
  'invert'?: (boolean);
}
