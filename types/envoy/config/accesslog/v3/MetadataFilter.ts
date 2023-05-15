// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto

import type { MetadataMatcher as _envoy_type_matcher_v3_MetadataMatcher, MetadataMatcher__Output as _envoy_type_matcher_v3_MetadataMatcher__Output } from '../../../../envoy/type/matcher/v3/MetadataMatcher';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';

export interface MetadataFilter {
  'matcher'?: (_envoy_type_matcher_v3_MetadataMatcher | null);
  'match_if_key_not_found'?: (_google_protobuf_BoolValue | null);
}

export interface MetadataFilter__Output {
  'matcher'?: (_envoy_type_matcher_v3_MetadataMatcher__Output);
  'match_if_key_not_found'?: (_google_protobuf_BoolValue__Output);
}
