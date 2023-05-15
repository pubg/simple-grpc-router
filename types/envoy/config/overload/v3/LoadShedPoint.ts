// Original file: .repos/envoy/api/envoy/config/overload/v3/overload.proto

import type { Trigger as _envoy_config_overload_v3_Trigger, Trigger__Output as _envoy_config_overload_v3_Trigger__Output } from '../../../../envoy/config/overload/v3/Trigger';

export interface LoadShedPoint {
  'name'?: (string);
  'triggers'?: (_envoy_config_overload_v3_Trigger)[];
}

export interface LoadShedPoint__Output {
  'name'?: (string);
  'triggers'?: (_envoy_config_overload_v3_Trigger__Output)[];
}
