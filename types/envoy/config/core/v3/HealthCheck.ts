// Original file: .repos/envoy/api/envoy/config/core/v3/health_check.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { EventServiceConfig as _envoy_config_core_v3_EventServiceConfig, EventServiceConfig__Output as _envoy_config_core_v3_EventServiceConfig__Output } from '../../../../envoy/config/core/v3/EventServiceConfig';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';
import type { UInt64Value as _google_protobuf_UInt64Value, UInt64Value__Output as _google_protobuf_UInt64Value__Output } from '../../../../google/protobuf/UInt64Value';
import type { HeaderValueOption as _envoy_config_core_v3_HeaderValueOption, HeaderValueOption__Output as _envoy_config_core_v3_HeaderValueOption__Output } from '../../../../envoy/config/core/v3/HeaderValueOption';
import type { Int64Range as _envoy_type_v3_Int64Range, Int64Range__Output as _envoy_type_v3_Int64Range__Output } from '../../../../envoy/type/v3/Int64Range';
import type { CodecClientType as _envoy_type_v3_CodecClientType, CodecClientType__Output as _envoy_type_v3_CodecClientType__Output } from '../../../../envoy/type/v3/CodecClientType';
import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../envoy/type/matcher/v3/StringMatcher';
import type { RequestMethod as _envoy_config_core_v3_RequestMethod, RequestMethod__Output as _envoy_config_core_v3_RequestMethod__Output } from '../../../../envoy/config/core/v3/RequestMethod';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface _envoy_config_core_v3_HealthCheck_CustomHealthCheck {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface _envoy_config_core_v3_HealthCheck_CustomHealthCheck__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}

export interface _envoy_config_core_v3_HealthCheck_GrpcHealthCheck {
  'service_name'?: (string);
  'authority'?: (string);
  'initial_metadata'?: (_envoy_config_core_v3_HeaderValueOption)[];
}

export interface _envoy_config_core_v3_HealthCheck_GrpcHealthCheck__Output {
  'service_name'?: (string);
  'authority'?: (string);
  'initial_metadata'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
}

export interface _envoy_config_core_v3_HealthCheck_HttpHealthCheck {
  'host'?: (string);
  'path'?: (string);
  'send'?: (_envoy_config_core_v3_HealthCheck_Payload | null);
  'receive'?: (_envoy_config_core_v3_HealthCheck_Payload)[];
  'response_buffer_size'?: (_google_protobuf_UInt64Value | null);
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'request_headers_to_remove'?: (string)[];
  'expected_statuses'?: (_envoy_type_v3_Int64Range)[];
  'retriable_statuses'?: (_envoy_type_v3_Int64Range)[];
  'codec_client_type'?: (_envoy_type_v3_CodecClientType);
  'service_name_matcher'?: (_envoy_type_matcher_v3_StringMatcher | null);
  'method'?: (_envoy_config_core_v3_RequestMethod);
}

export interface _envoy_config_core_v3_HealthCheck_HttpHealthCheck__Output {
  'host'?: (string);
  'path'?: (string);
  'send'?: (_envoy_config_core_v3_HealthCheck_Payload__Output);
  'receive'?: (_envoy_config_core_v3_HealthCheck_Payload__Output)[];
  'response_buffer_size'?: (_google_protobuf_UInt64Value__Output);
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'request_headers_to_remove'?: (string)[];
  'expected_statuses'?: (_envoy_type_v3_Int64Range__Output)[];
  'retriable_statuses'?: (_envoy_type_v3_Int64Range__Output)[];
  'codec_client_type'?: (_envoy_type_v3_CodecClientType__Output);
  'service_name_matcher'?: (_envoy_type_matcher_v3_StringMatcher__Output);
  'method'?: (_envoy_config_core_v3_RequestMethod__Output);
}

export interface _envoy_config_core_v3_HealthCheck_Payload {
  'text'?: (string);
  'binary'?: (Buffer | Uint8Array | string);
  'payload'?: "text"|"binary";
}

export interface _envoy_config_core_v3_HealthCheck_Payload__Output {
  'text'?: (string);
  'binary'?: (Buffer);
}

export interface _envoy_config_core_v3_HealthCheck_RedisHealthCheck {
  'key'?: (string);
}

export interface _envoy_config_core_v3_HealthCheck_RedisHealthCheck__Output {
  'key'?: (string);
}

export interface _envoy_config_core_v3_HealthCheck_TcpHealthCheck {
  'send'?: (_envoy_config_core_v3_HealthCheck_Payload | null);
  'receive'?: (_envoy_config_core_v3_HealthCheck_Payload)[];
}

export interface _envoy_config_core_v3_HealthCheck_TcpHealthCheck__Output {
  'send'?: (_envoy_config_core_v3_HealthCheck_Payload__Output);
  'receive'?: (_envoy_config_core_v3_HealthCheck_Payload__Output)[];
}

export interface _envoy_config_core_v3_HealthCheck_TlsOptions {
  'alpn_protocols'?: (string)[];
}

export interface _envoy_config_core_v3_HealthCheck_TlsOptions__Output {
  'alpn_protocols'?: (string)[];
}

export interface HealthCheck {
  'timeout'?: (_google_protobuf_Duration | null);
  'interval'?: (_google_protobuf_Duration | null);
  'interval_jitter'?: (_google_protobuf_Duration | null);
  'unhealthy_threshold'?: (_google_protobuf_UInt32Value | null);
  'healthy_threshold'?: (_google_protobuf_UInt32Value | null);
  'alt_port'?: (_google_protobuf_UInt32Value | null);
  'reuse_connection'?: (_google_protobuf_BoolValue | null);
  'http_health_check'?: (_envoy_config_core_v3_HealthCheck_HttpHealthCheck | null);
  'tcp_health_check'?: (_envoy_config_core_v3_HealthCheck_TcpHealthCheck | null);
  'grpc_health_check'?: (_envoy_config_core_v3_HealthCheck_GrpcHealthCheck | null);
  'no_traffic_interval'?: (_google_protobuf_Duration | null);
  'custom_health_check'?: (_envoy_config_core_v3_HealthCheck_CustomHealthCheck | null);
  'unhealthy_interval'?: (_google_protobuf_Duration | null);
  'unhealthy_edge_interval'?: (_google_protobuf_Duration | null);
  'healthy_edge_interval'?: (_google_protobuf_Duration | null);
  'event_log_path'?: (string);
  'interval_jitter_percent'?: (number);
  'always_log_health_check_failures'?: (boolean);
  'initial_jitter'?: (_google_protobuf_Duration | null);
  'tls_options'?: (_envoy_config_core_v3_HealthCheck_TlsOptions | null);
  'event_service'?: (_envoy_config_core_v3_EventServiceConfig | null);
  'transport_socket_match_criteria'?: (_google_protobuf_Struct | null);
  'no_traffic_healthy_interval'?: (_google_protobuf_Duration | null);
  'health_checker'?: "http_health_check"|"tcp_health_check"|"grpc_health_check"|"custom_health_check";
}

export interface HealthCheck__Output {
  'timeout'?: (_google_protobuf_Duration__Output);
  'interval'?: (_google_protobuf_Duration__Output);
  'interval_jitter'?: (_google_protobuf_Duration__Output);
  'unhealthy_threshold'?: (_google_protobuf_UInt32Value__Output);
  'healthy_threshold'?: (_google_protobuf_UInt32Value__Output);
  'alt_port'?: (_google_protobuf_UInt32Value__Output);
  'reuse_connection'?: (_google_protobuf_BoolValue__Output);
  'http_health_check'?: (_envoy_config_core_v3_HealthCheck_HttpHealthCheck__Output);
  'tcp_health_check'?: (_envoy_config_core_v3_HealthCheck_TcpHealthCheck__Output);
  'grpc_health_check'?: (_envoy_config_core_v3_HealthCheck_GrpcHealthCheck__Output);
  'no_traffic_interval'?: (_google_protobuf_Duration__Output);
  'custom_health_check'?: (_envoy_config_core_v3_HealthCheck_CustomHealthCheck__Output);
  'unhealthy_interval'?: (_google_protobuf_Duration__Output);
  'unhealthy_edge_interval'?: (_google_protobuf_Duration__Output);
  'healthy_edge_interval'?: (_google_protobuf_Duration__Output);
  'event_log_path'?: (string);
  'interval_jitter_percent'?: (number);
  'always_log_health_check_failures'?: (boolean);
  'initial_jitter'?: (_google_protobuf_Duration__Output);
  'tls_options'?: (_envoy_config_core_v3_HealthCheck_TlsOptions__Output);
  'event_service'?: (_envoy_config_core_v3_EventServiceConfig__Output);
  'transport_socket_match_criteria'?: (_google_protobuf_Struct__Output);
  'no_traffic_healthy_interval'?: (_google_protobuf_Duration__Output);
}
