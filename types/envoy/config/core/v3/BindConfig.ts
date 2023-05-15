// Original file: .repos/envoy/api/envoy/config/core/v3/address.proto

import type { SocketAddress as _envoy_config_core_v3_SocketAddress, SocketAddress__Output as _envoy_config_core_v3_SocketAddress__Output } from '../../../../envoy/config/core/v3/SocketAddress';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { SocketOption as _envoy_config_core_v3_SocketOption, SocketOption__Output as _envoy_config_core_v3_SocketOption__Output } from '../../../../envoy/config/core/v3/SocketOption';
import type { ExtraSourceAddress as _envoy_config_core_v3_ExtraSourceAddress, ExtraSourceAddress__Output as _envoy_config_core_v3_ExtraSourceAddress__Output } from '../../../../envoy/config/core/v3/ExtraSourceAddress';

export interface BindConfig {
  'source_address'?: (_envoy_config_core_v3_SocketAddress | null);
  'freebind'?: (_google_protobuf_BoolValue | null);
  'socket_options'?: (_envoy_config_core_v3_SocketOption)[];
  'additional_source_addresses'?: (_envoy_config_core_v3_SocketAddress)[];
  'extra_source_addresses'?: (_envoy_config_core_v3_ExtraSourceAddress)[];
}

export interface BindConfig__Output {
  'source_address'?: (_envoy_config_core_v3_SocketAddress__Output);
  'freebind'?: (_google_protobuf_BoolValue__Output);
  'socket_options'?: (_envoy_config_core_v3_SocketOption__Output)[];
  'additional_source_addresses'?: (_envoy_config_core_v3_SocketAddress__Output)[];
  'extra_source_addresses'?: (_envoy_config_core_v3_ExtraSourceAddress__Output)[];
}
