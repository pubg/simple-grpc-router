// Original file: .repos/envoy/api/envoy/config/core/v3/address.proto

import type { SocketAddress as _envoy_config_core_v3_SocketAddress, SocketAddress__Output as _envoy_config_core_v3_SocketAddress__Output } from '../../../../envoy/config/core/v3/SocketAddress';
import type { SocketOptionsOverride as _envoy_config_core_v3_SocketOptionsOverride, SocketOptionsOverride__Output as _envoy_config_core_v3_SocketOptionsOverride__Output } from '../../../../envoy/config/core/v3/SocketOptionsOverride';

export interface ExtraSourceAddress {
  'address'?: (_envoy_config_core_v3_SocketAddress | null);
  'socket_options'?: (_envoy_config_core_v3_SocketOptionsOverride | null);
}

export interface ExtraSourceAddress__Output {
  'address'?: (_envoy_config_core_v3_SocketAddress__Output);
  'socket_options'?: (_envoy_config_core_v3_SocketOptionsOverride__Output);
}
