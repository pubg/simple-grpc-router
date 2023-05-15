// Original file: .repos/envoy/api/envoy/config/overload/v3/overload.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { Percent as _envoy_type_v3_Percent, Percent__Output as _envoy_type_v3_Percent__Output } from '../../../../envoy/type/v3/Percent';

export interface _envoy_config_overload_v3_ScaleTimersOverloadActionConfig_ScaleTimer {
  'timer'?: (_envoy_config_overload_v3_ScaleTimersOverloadActionConfig_TimerType);
  'min_timeout'?: (_google_protobuf_Duration | null);
  'min_scale'?: (_envoy_type_v3_Percent | null);
  'overload_adjust'?: "min_timeout"|"min_scale";
}

export interface _envoy_config_overload_v3_ScaleTimersOverloadActionConfig_ScaleTimer__Output {
  'timer'?: (_envoy_config_overload_v3_ScaleTimersOverloadActionConfig_TimerType__Output);
  'min_timeout'?: (_google_protobuf_Duration__Output);
  'min_scale'?: (_envoy_type_v3_Percent__Output);
}

// Original file: .repos/envoy/api/envoy/config/overload/v3/overload.proto

export const _envoy_config_overload_v3_ScaleTimersOverloadActionConfig_TimerType = {
  UNSPECIFIED: 0,
  HTTP_DOWNSTREAM_CONNECTION_IDLE: 1,
  HTTP_DOWNSTREAM_STREAM_IDLE: 2,
  TRANSPORT_SOCKET_CONNECT: 3,
} as const;

export type _envoy_config_overload_v3_ScaleTimersOverloadActionConfig_TimerType =
  | 'UNSPECIFIED'
  | 0
  | 'HTTP_DOWNSTREAM_CONNECTION_IDLE'
  | 1
  | 'HTTP_DOWNSTREAM_STREAM_IDLE'
  | 2
  | 'TRANSPORT_SOCKET_CONNECT'
  | 3

export type _envoy_config_overload_v3_ScaleTimersOverloadActionConfig_TimerType__Output = typeof _envoy_config_overload_v3_ScaleTimersOverloadActionConfig_TimerType[keyof typeof _envoy_config_overload_v3_ScaleTimersOverloadActionConfig_TimerType]

export interface ScaleTimersOverloadActionConfig {
  'timer_scale_factors'?: (_envoy_config_overload_v3_ScaleTimersOverloadActionConfig_ScaleTimer)[];
}

export interface ScaleTimersOverloadActionConfig__Output {
  'timer_scale_factors'?: (_envoy_config_overload_v3_ScaleTimersOverloadActionConfig_ScaleTimer__Output)[];
}
