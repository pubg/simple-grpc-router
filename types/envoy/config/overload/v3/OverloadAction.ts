// Original file: .repos/envoy/api/envoy/config/overload/v3/overload.proto

import type { Trigger as _envoy_config_overload_v3_Trigger, Trigger__Output as _envoy_config_overload_v3_Trigger__Output } from '../../../../envoy/config/overload/v3/Trigger';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface OverloadAction {
  'name'?: (string);
  'triggers'?: (_envoy_config_overload_v3_Trigger)[];
  'typed_config'?: (_google_protobuf_Any | null);
}

export interface OverloadAction__Output {
  'name'?: (string);
  'triggers'?: (_envoy_config_overload_v3_Trigger__Output)[];
  'typed_config'?: (_google_protobuf_Any__Output);
}
