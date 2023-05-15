// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { SocketOption as _envoy_config_core_v3_SocketOption, SocketOption__Output as _envoy_config_core_v3_SocketOption__Output } from '../../../../envoy/config/core/v3/SocketOption';
import type { AccessLog as _envoy_config_accesslog_v3_AccessLog, AccessLog__Output as _envoy_config_accesslog_v3_AccessLog__Output } from '../../../../envoy/config/accesslog/v3/AccessLog';

export interface Admin {
  'access_log_path'?: (string);
  'profile_path'?: (string);
  'address'?: (_envoy_config_core_v3_Address | null);
  'socket_options'?: (_envoy_config_core_v3_SocketOption)[];
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog)[];
  'ignore_global_conn_limit'?: (boolean);
}

export interface Admin__Output {
  'access_log_path'?: (string);
  'profile_path'?: (string);
  'address'?: (_envoy_config_core_v3_Address__Output);
  'socket_options'?: (_envoy_config_core_v3_SocketOption__Output)[];
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog__Output)[];
  'ignore_global_conn_limit'?: (boolean);
}
