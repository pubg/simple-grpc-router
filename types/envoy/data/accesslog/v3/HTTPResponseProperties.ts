// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Long } from '@grpc/proto-loader';

export interface HTTPResponseProperties {
  'response_code'?: (_google_protobuf_UInt32Value | null);
  'response_headers_bytes'?: (number | string | Long);
  'response_body_bytes'?: (number | string | Long);
  'response_headers'?: ({[key: string]: string});
  'response_trailers'?: ({[key: string]: string});
  'response_code_details'?: (string);
  'upstream_header_bytes_received'?: (number | string | Long);
  'downstream_header_bytes_sent'?: (number | string | Long);
}

export interface HTTPResponseProperties__Output {
  'response_code'?: (_google_protobuf_UInt32Value__Output);
  'response_headers_bytes'?: (Long);
  'response_body_bytes'?: (Long);
  'response_headers'?: ({[key: string]: string});
  'response_trailers'?: ({[key: string]: string});
  'response_code_details'?: (string);
  'upstream_header_bytes_received'?: (Long);
  'downstream_header_bytes_sent'?: (Long);
}
