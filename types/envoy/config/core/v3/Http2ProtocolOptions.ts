// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { KeepaliveSettings as _envoy_config_core_v3_KeepaliveSettings, KeepaliveSettings__Output as _envoy_config_core_v3_KeepaliveSettings__Output } from '../../../../envoy/config/core/v3/KeepaliveSettings';

export interface _envoy_config_core_v3_Http2ProtocolOptions_SettingsParameter {
  'identifier'?: (_google_protobuf_UInt32Value | null);
  'value'?: (_google_protobuf_UInt32Value | null);
}

export interface _envoy_config_core_v3_Http2ProtocolOptions_SettingsParameter__Output {
  'identifier'?: (_google_protobuf_UInt32Value__Output);
  'value'?: (_google_protobuf_UInt32Value__Output);
}

export interface Http2ProtocolOptions {
  'hpack_table_size'?: (_google_protobuf_UInt32Value | null);
  'max_concurrent_streams'?: (_google_protobuf_UInt32Value | null);
  'initial_stream_window_size'?: (_google_protobuf_UInt32Value | null);
  'initial_connection_window_size'?: (_google_protobuf_UInt32Value | null);
  'allow_connect'?: (boolean);
  'allow_metadata'?: (boolean);
  'max_outbound_frames'?: (_google_protobuf_UInt32Value | null);
  'max_outbound_control_frames'?: (_google_protobuf_UInt32Value | null);
  'max_consecutive_inbound_frames_with_empty_payload'?: (_google_protobuf_UInt32Value | null);
  'max_inbound_priority_frames_per_stream'?: (_google_protobuf_UInt32Value | null);
  'max_inbound_window_update_frames_per_data_frame_sent'?: (_google_protobuf_UInt32Value | null);
  'stream_error_on_invalid_http_messaging'?: (boolean);
  'custom_settings_parameters'?: (_envoy_config_core_v3_Http2ProtocolOptions_SettingsParameter)[];
  'override_stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue | null);
  'connection_keepalive'?: (_envoy_config_core_v3_KeepaliveSettings | null);
  'use_oghttp2_codec'?: (_google_protobuf_BoolValue | null);
}

export interface Http2ProtocolOptions__Output {
  'hpack_table_size'?: (_google_protobuf_UInt32Value__Output);
  'max_concurrent_streams'?: (_google_protobuf_UInt32Value__Output);
  'initial_stream_window_size'?: (_google_protobuf_UInt32Value__Output);
  'initial_connection_window_size'?: (_google_protobuf_UInt32Value__Output);
  'allow_connect'?: (boolean);
  'allow_metadata'?: (boolean);
  'max_outbound_frames'?: (_google_protobuf_UInt32Value__Output);
  'max_outbound_control_frames'?: (_google_protobuf_UInt32Value__Output);
  'max_consecutive_inbound_frames_with_empty_payload'?: (_google_protobuf_UInt32Value__Output);
  'max_inbound_priority_frames_per_stream'?: (_google_protobuf_UInt32Value__Output);
  'max_inbound_window_update_frames_per_data_frame_sent'?: (_google_protobuf_UInt32Value__Output);
  'stream_error_on_invalid_http_messaging'?: (boolean);
  'custom_settings_parameters'?: (_envoy_config_core_v3_Http2ProtocolOptions_SettingsParameter__Output)[];
  'override_stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue__Output);
  'connection_keepalive'?: (_envoy_config_core_v3_KeepaliveSettings__Output);
  'use_oghttp2_codec'?: (_google_protobuf_BoolValue__Output);
}
