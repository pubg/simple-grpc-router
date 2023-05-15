// Original file: .repos/envoy/api/envoy/config/listener/v3/listener.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { SocketOptionsOverride as _envoy_config_core_v3_SocketOptionsOverride, SocketOptionsOverride__Output as _envoy_config_core_v3_SocketOptionsOverride__Output } from '../../../../envoy/config/core/v3/SocketOptionsOverride';

export interface AdditionalAddress {
  'address'?: (_envoy_config_core_v3_Address | null);
  'socket_options'?: (_envoy_config_core_v3_SocketOptionsOverride | null);
}

export interface AdditionalAddress__Output {
  'address'?: (_envoy_config_core_v3_Address__Output);
  'socket_options'?: (_envoy_config_core_v3_SocketOptionsOverride__Output);
}
