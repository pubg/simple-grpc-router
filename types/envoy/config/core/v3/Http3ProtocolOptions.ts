// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { QuicProtocolOptions as _envoy_config_core_v3_QuicProtocolOptions, QuicProtocolOptions__Output as _envoy_config_core_v3_QuicProtocolOptions__Output } from '../../../../envoy/config/core/v3/QuicProtocolOptions';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';

export interface Http3ProtocolOptions {
  'quic_protocol_options'?: (_envoy_config_core_v3_QuicProtocolOptions | null);
  'override_stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue | null);
  'allow_extended_connect'?: (boolean);
}

export interface Http3ProtocolOptions__Output {
  'quic_protocol_options'?: (_envoy_config_core_v3_QuicProtocolOptions__Output);
  'override_stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue__Output);
  'allow_extended_connect'?: (boolean);
}
