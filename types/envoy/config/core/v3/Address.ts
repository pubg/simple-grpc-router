// Original file: .repos/envoy/api/envoy/config/core/v3/address.proto

import type { SocketAddress as _envoy_config_core_v3_SocketAddress, SocketAddress__Output as _envoy_config_core_v3_SocketAddress__Output } from '../../../../envoy/config/core/v3/SocketAddress';
import type { Pipe as _envoy_config_core_v3_Pipe, Pipe__Output as _envoy_config_core_v3_Pipe__Output } from '../../../../envoy/config/core/v3/Pipe';
import type { EnvoyInternalAddress as _envoy_config_core_v3_EnvoyInternalAddress, EnvoyInternalAddress__Output as _envoy_config_core_v3_EnvoyInternalAddress__Output } from '../../../../envoy/config/core/v3/EnvoyInternalAddress';

export interface Address {
  'socket_address'?: (_envoy_config_core_v3_SocketAddress | null);
  'pipe'?: (_envoy_config_core_v3_Pipe | null);
  'envoy_internal_address'?: (_envoy_config_core_v3_EnvoyInternalAddress | null);
  'address'?: "socket_address"|"pipe"|"envoy_internal_address";
}

export interface Address__Output {
  'socket_address'?: (_envoy_config_core_v3_SocketAddress__Output);
  'pipe'?: (_envoy_config_core_v3_Pipe__Output);
  'envoy_internal_address'?: (_envoy_config_core_v3_EnvoyInternalAddress__Output);
}
