// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';

export interface RuntimeFeatureFlag {
  'default_value'?: (_google_protobuf_BoolValue | null);
  'runtime_key'?: (string);
}

export interface RuntimeFeatureFlag__Output {
  'default_value'?: (_google_protobuf_BoolValue__Output);
  'runtime_key'?: (string);
}
