// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

import type { RequestMethod as _envoy_config_core_v3_RequestMethod, RequestMethod__Output as _envoy_config_core_v3_RequestMethod__Output } from '../../../../envoy/config/core/v3/RequestMethod';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Long } from '@grpc/proto-loader';

export interface HTTPRequestProperties {
  'request_method'?: (_envoy_config_core_v3_RequestMethod);
  'scheme'?: (string);
  'authority'?: (string);
  'port'?: (_google_protobuf_UInt32Value | null);
  'path'?: (string);
  'user_agent'?: (string);
  'referer'?: (string);
  'forwarded_for'?: (string);
  'request_id'?: (string);
  'original_path'?: (string);
  'request_headers_bytes'?: (number | string | Long);
  'request_body_bytes'?: (number | string | Long);
  'request_headers'?: ({[key: string]: string});
  'upstream_header_bytes_sent'?: (number | string | Long);
  'downstream_header_bytes_received'?: (number | string | Long);
}

export interface HTTPRequestProperties__Output {
  'request_method'?: (_envoy_config_core_v3_RequestMethod__Output);
  'scheme'?: (string);
  'authority'?: (string);
  'port'?: (_google_protobuf_UInt32Value__Output);
  'path'?: (string);
  'user_agent'?: (string);
  'referer'?: (string);
  'forwarded_for'?: (string);
  'request_id'?: (string);
  'original_path'?: (string);
  'request_headers_bytes'?: (Long);
  'request_body_bytes'?: (Long);
  'request_headers'?: ({[key: string]: string});
  'upstream_header_bytes_sent'?: (Long);
  'downstream_header_bytes_received'?: (Long);
}
