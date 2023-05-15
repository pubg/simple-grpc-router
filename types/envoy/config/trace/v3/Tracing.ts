// Original file: .repos/envoy/api/envoy/config/trace/v3/http_tracer.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface _envoy_config_trace_v3_Tracing_Http {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface _envoy_config_trace_v3_Tracing_Http__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}

export interface Tracing {
  'http'?: (_envoy_config_trace_v3_Tracing_Http | null);
}

export interface Tracing__Output {
  'http'?: (_envoy_config_trace_v3_Tracing_Http__Output);
}
