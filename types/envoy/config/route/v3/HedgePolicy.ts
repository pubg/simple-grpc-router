// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { FractionalPercent as _envoy_type_v3_FractionalPercent, FractionalPercent__Output as _envoy_type_v3_FractionalPercent__Output } from '../../../../envoy/type/v3/FractionalPercent';

export interface HedgePolicy {
  'initial_requests'?: (_google_protobuf_UInt32Value | null);
  'additional_request_chance'?: (_envoy_type_v3_FractionalPercent | null);
  'hedge_on_per_try_timeout'?: (boolean);
}

export interface HedgePolicy__Output {
  'initial_requests'?: (_google_protobuf_UInt32Value__Output);
  'additional_request_chance'?: (_envoy_type_v3_FractionalPercent__Output);
  'hedge_on_per_try_timeout'?: (boolean);
}
