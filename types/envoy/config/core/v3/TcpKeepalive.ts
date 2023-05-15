// Original file: .repos/envoy/api/envoy/config/core/v3/address.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

export interface TcpKeepalive {
  'keepalive_probes'?: (_google_protobuf_UInt32Value | null);
  'keepalive_time'?: (_google_protobuf_UInt32Value | null);
  'keepalive_interval'?: (_google_protobuf_UInt32Value | null);
}

export interface TcpKeepalive__Output {
  'keepalive_probes'?: (_google_protobuf_UInt32Value__Output);
  'keepalive_time'?: (_google_protobuf_UInt32Value__Output);
  'keepalive_interval'?: (_google_protobuf_UInt32Value__Output);
}
