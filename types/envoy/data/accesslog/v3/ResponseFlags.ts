// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto


// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

export const _envoy_data_accesslog_v3_ResponseFlags_Unauthorized_Reason = {
  REASON_UNSPECIFIED: 0,
  EXTERNAL_SERVICE: 1,
} as const;

export type _envoy_data_accesslog_v3_ResponseFlags_Unauthorized_Reason =
  | 'REASON_UNSPECIFIED'
  | 0
  | 'EXTERNAL_SERVICE'
  | 1

export type _envoy_data_accesslog_v3_ResponseFlags_Unauthorized_Reason__Output = typeof _envoy_data_accesslog_v3_ResponseFlags_Unauthorized_Reason[keyof typeof _envoy_data_accesslog_v3_ResponseFlags_Unauthorized_Reason]

export interface _envoy_data_accesslog_v3_ResponseFlags_Unauthorized {
  'reason'?: (_envoy_data_accesslog_v3_ResponseFlags_Unauthorized_Reason);
}

export interface _envoy_data_accesslog_v3_ResponseFlags_Unauthorized__Output {
  'reason'?: (_envoy_data_accesslog_v3_ResponseFlags_Unauthorized_Reason__Output);
}

export interface ResponseFlags {
  'failed_local_healthcheck'?: (boolean);
  'no_healthy_upstream'?: (boolean);
  'upstream_request_timeout'?: (boolean);
  'local_reset'?: (boolean);
  'upstream_remote_reset'?: (boolean);
  'upstream_connection_failure'?: (boolean);
  'upstream_connection_termination'?: (boolean);
  'upstream_overflow'?: (boolean);
  'no_route_found'?: (boolean);
  'delay_injected'?: (boolean);
  'fault_injected'?: (boolean);
  'rate_limited'?: (boolean);
  'unauthorized_details'?: (_envoy_data_accesslog_v3_ResponseFlags_Unauthorized | null);
  'rate_limit_service_error'?: (boolean);
  'downstream_connection_termination'?: (boolean);
  'upstream_retry_limit_exceeded'?: (boolean);
  'stream_idle_timeout'?: (boolean);
  'invalid_envoy_request_headers'?: (boolean);
  'downstream_protocol_error'?: (boolean);
  'upstream_max_stream_duration_reached'?: (boolean);
  'response_from_cache_filter'?: (boolean);
  'no_filter_config_found'?: (boolean);
  'duration_timeout'?: (boolean);
  'upstream_protocol_error'?: (boolean);
  'no_cluster_found'?: (boolean);
  'overload_manager'?: (boolean);
  'dns_resolution_failure'?: (boolean);
}

export interface ResponseFlags__Output {
  'failed_local_healthcheck'?: (boolean);
  'no_healthy_upstream'?: (boolean);
  'upstream_request_timeout'?: (boolean);
  'local_reset'?: (boolean);
  'upstream_remote_reset'?: (boolean);
  'upstream_connection_failure'?: (boolean);
  'upstream_connection_termination'?: (boolean);
  'upstream_overflow'?: (boolean);
  'no_route_found'?: (boolean);
  'delay_injected'?: (boolean);
  'fault_injected'?: (boolean);
  'rate_limited'?: (boolean);
  'unauthorized_details'?: (_envoy_data_accesslog_v3_ResponseFlags_Unauthorized__Output);
  'rate_limit_service_error'?: (boolean);
  'downstream_connection_termination'?: (boolean);
  'upstream_retry_limit_exceeded'?: (boolean);
  'stream_idle_timeout'?: (boolean);
  'invalid_envoy_request_headers'?: (boolean);
  'downstream_protocol_error'?: (boolean);
  'upstream_max_stream_duration_reached'?: (boolean);
  'response_from_cache_filter'?: (boolean);
  'no_filter_config_found'?: (boolean);
  'duration_timeout'?: (boolean);
  'upstream_protocol_error'?: (boolean);
  'no_cluster_found'?: (boolean);
  'overload_manager'?: (boolean);
  'dns_resolution_failure'?: (boolean);
}
