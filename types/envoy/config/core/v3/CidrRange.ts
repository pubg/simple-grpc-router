// Original file: .repos/envoy/api/envoy/config/core/v3/address.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

export interface CidrRange {
  'address_prefix'?: (string);
  'prefix_len'?: (_google_protobuf_UInt32Value | null);
}

export interface CidrRange__Output {
  'address_prefix'?: (string);
  'prefix_len'?: (_google_protobuf_UInt32Value__Output);
}
