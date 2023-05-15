// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';

export interface Decorator {
  'operation'?: (string);
  'propagate'?: (_google_protobuf_BoolValue | null);
}

export interface Decorator__Output {
  'operation'?: (string);
  'propagate'?: (_google_protobuf_BoolValue__Output);
}
