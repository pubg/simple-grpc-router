// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { QuicKeepAliveSettings as _envoy_config_core_v3_QuicKeepAliveSettings, QuicKeepAliveSettings__Output as _envoy_config_core_v3_QuicKeepAliveSettings__Output } from '../../../../envoy/config/core/v3/QuicKeepAliveSettings';

export interface QuicProtocolOptions {
  'max_concurrent_streams'?: (_google_protobuf_UInt32Value | null);
  'initial_stream_window_size'?: (_google_protobuf_UInt32Value | null);
  'initial_connection_window_size'?: (_google_protobuf_UInt32Value | null);
  'num_timeouts_to_trigger_port_migration'?: (_google_protobuf_UInt32Value | null);
  'connection_keepalive'?: (_envoy_config_core_v3_QuicKeepAliveSettings | null);
}

export interface QuicProtocolOptions__Output {
  'max_concurrent_streams'?: (_google_protobuf_UInt32Value__Output);
  'initial_stream_window_size'?: (_google_protobuf_UInt32Value__Output);
  'initial_connection_window_size'?: (_google_protobuf_UInt32Value__Output);
  'num_timeouts_to_trigger_port_migration'?: (_google_protobuf_UInt32Value__Output);
  'connection_keepalive'?: (_envoy_config_core_v3_QuicKeepAliveSettings__Output);
}
