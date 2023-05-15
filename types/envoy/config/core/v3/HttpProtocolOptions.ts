// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

export const _envoy_config_core_v3_HttpProtocolOptions_HeadersWithUnderscoresAction = {
  ALLOW: 0,
  REJECT_REQUEST: 1,
  DROP_HEADER: 2,
} as const;

export type _envoy_config_core_v3_HttpProtocolOptions_HeadersWithUnderscoresAction =
  | 'ALLOW'
  | 0
  | 'REJECT_REQUEST'
  | 1
  | 'DROP_HEADER'
  | 2

export type _envoy_config_core_v3_HttpProtocolOptions_HeadersWithUnderscoresAction__Output = typeof _envoy_config_core_v3_HttpProtocolOptions_HeadersWithUnderscoresAction[keyof typeof _envoy_config_core_v3_HttpProtocolOptions_HeadersWithUnderscoresAction]

export interface HttpProtocolOptions {
  'idle_timeout'?: (_google_protobuf_Duration | null);
  'max_headers_count'?: (_google_protobuf_UInt32Value | null);
  'max_connection_duration'?: (_google_protobuf_Duration | null);
  'max_stream_duration'?: (_google_protobuf_Duration | null);
  'headers_with_underscores_action'?: (_envoy_config_core_v3_HttpProtocolOptions_HeadersWithUnderscoresAction);
  'max_requests_per_connection'?: (_google_protobuf_UInt32Value | null);
}

export interface HttpProtocolOptions__Output {
  'idle_timeout'?: (_google_protobuf_Duration__Output);
  'max_headers_count'?: (_google_protobuf_UInt32Value__Output);
  'max_connection_duration'?: (_google_protobuf_Duration__Output);
  'max_stream_duration'?: (_google_protobuf_Duration__Output);
  'headers_with_underscores_action'?: (_envoy_config_core_v3_HttpProtocolOptions_HeadersWithUnderscoresAction__Output);
  'max_requests_per_connection'?: (_google_protobuf_UInt32Value__Output);
}
