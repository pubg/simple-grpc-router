// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto

import type { StatusCodeFilter as _envoy_config_accesslog_v3_StatusCodeFilter, StatusCodeFilter__Output as _envoy_config_accesslog_v3_StatusCodeFilter__Output } from '../../../../envoy/config/accesslog/v3/StatusCodeFilter';
import type { DurationFilter as _envoy_config_accesslog_v3_DurationFilter, DurationFilter__Output as _envoy_config_accesslog_v3_DurationFilter__Output } from '../../../../envoy/config/accesslog/v3/DurationFilter';
import type { NotHealthCheckFilter as _envoy_config_accesslog_v3_NotHealthCheckFilter, NotHealthCheckFilter__Output as _envoy_config_accesslog_v3_NotHealthCheckFilter__Output } from '../../../../envoy/config/accesslog/v3/NotHealthCheckFilter';
import type { TraceableFilter as _envoy_config_accesslog_v3_TraceableFilter, TraceableFilter__Output as _envoy_config_accesslog_v3_TraceableFilter__Output } from '../../../../envoy/config/accesslog/v3/TraceableFilter';
import type { RuntimeFilter as _envoy_config_accesslog_v3_RuntimeFilter, RuntimeFilter__Output as _envoy_config_accesslog_v3_RuntimeFilter__Output } from '../../../../envoy/config/accesslog/v3/RuntimeFilter';
import type { AndFilter as _envoy_config_accesslog_v3_AndFilter, AndFilter__Output as _envoy_config_accesslog_v3_AndFilter__Output } from '../../../../envoy/config/accesslog/v3/AndFilter';
import type { OrFilter as _envoy_config_accesslog_v3_OrFilter, OrFilter__Output as _envoy_config_accesslog_v3_OrFilter__Output } from '../../../../envoy/config/accesslog/v3/OrFilter';
import type { HeaderFilter as _envoy_config_accesslog_v3_HeaderFilter, HeaderFilter__Output as _envoy_config_accesslog_v3_HeaderFilter__Output } from '../../../../envoy/config/accesslog/v3/HeaderFilter';
import type { ResponseFlagFilter as _envoy_config_accesslog_v3_ResponseFlagFilter, ResponseFlagFilter__Output as _envoy_config_accesslog_v3_ResponseFlagFilter__Output } from '../../../../envoy/config/accesslog/v3/ResponseFlagFilter';
import type { GrpcStatusFilter as _envoy_config_accesslog_v3_GrpcStatusFilter, GrpcStatusFilter__Output as _envoy_config_accesslog_v3_GrpcStatusFilter__Output } from '../../../../envoy/config/accesslog/v3/GrpcStatusFilter';
import type { ExtensionFilter as _envoy_config_accesslog_v3_ExtensionFilter, ExtensionFilter__Output as _envoy_config_accesslog_v3_ExtensionFilter__Output } from '../../../../envoy/config/accesslog/v3/ExtensionFilter';
import type { MetadataFilter as _envoy_config_accesslog_v3_MetadataFilter, MetadataFilter__Output as _envoy_config_accesslog_v3_MetadataFilter__Output } from '../../../../envoy/config/accesslog/v3/MetadataFilter';
import type { LogTypeFilter as _envoy_config_accesslog_v3_LogTypeFilter, LogTypeFilter__Output as _envoy_config_accesslog_v3_LogTypeFilter__Output } from '../../../../envoy/config/accesslog/v3/LogTypeFilter';

export interface AccessLogFilter {
  'status_code_filter'?: (_envoy_config_accesslog_v3_StatusCodeFilter | null);
  'duration_filter'?: (_envoy_config_accesslog_v3_DurationFilter | null);
  'not_health_check_filter'?: (_envoy_config_accesslog_v3_NotHealthCheckFilter | null);
  'traceable_filter'?: (_envoy_config_accesslog_v3_TraceableFilter | null);
  'runtime_filter'?: (_envoy_config_accesslog_v3_RuntimeFilter | null);
  'and_filter'?: (_envoy_config_accesslog_v3_AndFilter | null);
  'or_filter'?: (_envoy_config_accesslog_v3_OrFilter | null);
  'header_filter'?: (_envoy_config_accesslog_v3_HeaderFilter | null);
  'response_flag_filter'?: (_envoy_config_accesslog_v3_ResponseFlagFilter | null);
  'grpc_status_filter'?: (_envoy_config_accesslog_v3_GrpcStatusFilter | null);
  'extension_filter'?: (_envoy_config_accesslog_v3_ExtensionFilter | null);
  'metadata_filter'?: (_envoy_config_accesslog_v3_MetadataFilter | null);
  'log_type_filter'?: (_envoy_config_accesslog_v3_LogTypeFilter | null);
  'filter_specifier'?: "status_code_filter"|"duration_filter"|"not_health_check_filter"|"traceable_filter"|"runtime_filter"|"and_filter"|"or_filter"|"header_filter"|"response_flag_filter"|"grpc_status_filter"|"extension_filter"|"metadata_filter"|"log_type_filter";
}

export interface AccessLogFilter__Output {
  'status_code_filter'?: (_envoy_config_accesslog_v3_StatusCodeFilter__Output);
  'duration_filter'?: (_envoy_config_accesslog_v3_DurationFilter__Output);
  'not_health_check_filter'?: (_envoy_config_accesslog_v3_NotHealthCheckFilter__Output);
  'traceable_filter'?: (_envoy_config_accesslog_v3_TraceableFilter__Output);
  'runtime_filter'?: (_envoy_config_accesslog_v3_RuntimeFilter__Output);
  'and_filter'?: (_envoy_config_accesslog_v3_AndFilter__Output);
  'or_filter'?: (_envoy_config_accesslog_v3_OrFilter__Output);
  'header_filter'?: (_envoy_config_accesslog_v3_HeaderFilter__Output);
  'response_flag_filter'?: (_envoy_config_accesslog_v3_ResponseFlagFilter__Output);
  'grpc_status_filter'?: (_envoy_config_accesslog_v3_GrpcStatusFilter__Output);
  'extension_filter'?: (_envoy_config_accesslog_v3_ExtensionFilter__Output);
  'metadata_filter'?: (_envoy_config_accesslog_v3_MetadataFilter__Output);
  'log_type_filter'?: (_envoy_config_accesslog_v3_LogTypeFilter__Output);
}
