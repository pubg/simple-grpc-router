// Original file: .repos/envoy/api/envoy/config/core/v3/udp_socket_config.proto

import type { UInt64Value as _google_protobuf_UInt64Value, UInt64Value__Output as _google_protobuf_UInt64Value__Output } from '../../../../google/protobuf/UInt64Value';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';

export interface UdpSocketConfig {
  'max_rx_datagram_size'?: (_google_protobuf_UInt64Value | null);
  'prefer_gro'?: (_google_protobuf_BoolValue | null);
}

export interface UdpSocketConfig__Output {
  'max_rx_datagram_size'?: (_google_protobuf_UInt64Value__Output);
  'prefer_gro'?: (_google_protobuf_BoolValue__Output);
}
