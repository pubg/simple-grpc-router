// Original file: .repos/envoy/api/envoy/config/core/v3/socket_option.proto

import type { Long } from '@grpc/proto-loader';

// Original file: .repos/envoy/api/envoy/config/core/v3/socket_option.proto

export const _envoy_config_core_v3_SocketOption_SocketState = {
  STATE_PREBIND: 0,
  STATE_BOUND: 1,
  STATE_LISTENING: 2,
} as const;

export type _envoy_config_core_v3_SocketOption_SocketState =
  | 'STATE_PREBIND'
  | 0
  | 'STATE_BOUND'
  | 1
  | 'STATE_LISTENING'
  | 2

export type _envoy_config_core_v3_SocketOption_SocketState__Output = typeof _envoy_config_core_v3_SocketOption_SocketState[keyof typeof _envoy_config_core_v3_SocketOption_SocketState]

export interface SocketOption {
  'description'?: (string);
  'level'?: (number | string | Long);
  'name'?: (number | string | Long);
  'int_value'?: (number | string | Long);
  'buf_value'?: (Buffer | Uint8Array | string);
  'state'?: (_envoy_config_core_v3_SocketOption_SocketState);
  'value'?: "int_value"|"buf_value";
}

export interface SocketOption__Output {
  'description'?: (string);
  'level'?: (Long);
  'name'?: (Long);
  'int_value'?: (Long);
  'buf_value'?: (Buffer);
  'state'?: (_envoy_config_core_v3_SocketOption_SocketState__Output);
}
