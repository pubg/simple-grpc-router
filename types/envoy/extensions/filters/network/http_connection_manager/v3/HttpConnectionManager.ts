// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

import type { Rds as _envoy_extensions_filters_network_http_connection_manager_v3_Rds, Rds__Output as _envoy_extensions_filters_network_http_connection_manager_v3_Rds__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/Rds';
import type { RouteConfiguration as _envoy_config_route_v3_RouteConfiguration, RouteConfiguration__Output as _envoy_config_route_v3_RouteConfiguration__Output } from '../../../../../../envoy/config/route/v3/RouteConfiguration';
import type { HttpFilter as _envoy_extensions_filters_network_http_connection_manager_v3_HttpFilter, HttpFilter__Output as _envoy_extensions_filters_network_http_connection_manager_v3_HttpFilter__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/HttpFilter';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../../../google/protobuf/BoolValue';
import type { Http1ProtocolOptions as _envoy_config_core_v3_Http1ProtocolOptions, Http1ProtocolOptions__Output as _envoy_config_core_v3_Http1ProtocolOptions__Output } from '../../../../../../envoy/config/core/v3/Http1ProtocolOptions';
import type { Http2ProtocolOptions as _envoy_config_core_v3_Http2ProtocolOptions, Http2ProtocolOptions__Output as _envoy_config_core_v3_Http2ProtocolOptions__Output } from '../../../../../../envoy/config/core/v3/Http2ProtocolOptions';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../../../google/protobuf/Duration';
import type { AccessLog as _envoy_config_accesslog_v3_AccessLog, AccessLog__Output as _envoy_config_accesslog_v3_AccessLog__Output } from '../../../../../../envoy/config/accesslog/v3/AccessLog';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../../../google/protobuf/UInt32Value';
import type { ScopedRoutes as _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes, ScopedRoutes__Output as _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/ScopedRoutes';
import type { HttpProtocolOptions as _envoy_config_core_v3_HttpProtocolOptions, HttpProtocolOptions__Output as _envoy_config_core_v3_HttpProtocolOptions__Output } from '../../../../../../envoy/config/core/v3/HttpProtocolOptions';
import type { RequestIDExtension as _envoy_extensions_filters_network_http_connection_manager_v3_RequestIDExtension, RequestIDExtension__Output as _envoy_extensions_filters_network_http_connection_manager_v3_RequestIDExtension__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/RequestIDExtension';
import type { LocalReplyConfig as _envoy_extensions_filters_network_http_connection_manager_v3_LocalReplyConfig, LocalReplyConfig__Output as _envoy_extensions_filters_network_http_connection_manager_v3_LocalReplyConfig__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/LocalReplyConfig';
import type { Http3ProtocolOptions as _envoy_config_core_v3_Http3ProtocolOptions, Http3ProtocolOptions__Output as _envoy_config_core_v3_Http3ProtocolOptions__Output } from '../../../../../../envoy/config/core/v3/Http3ProtocolOptions';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { SchemeHeaderTransformation as _envoy_config_core_v3_SchemeHeaderTransformation, SchemeHeaderTransformation__Output as _envoy_config_core_v3_SchemeHeaderTransformation__Output } from '../../../../../../envoy/config/core/v3/SchemeHeaderTransformation';
import type { Percent as _envoy_type_v3_Percent, Percent__Output as _envoy_type_v3_Percent__Output } from '../../../../../../envoy/type/v3/Percent';
import type { CustomTag as _envoy_type_tracing_v3_CustomTag, CustomTag__Output as _envoy_type_tracing_v3_CustomTag__Output } from '../../../../../../envoy/type/tracing/v3/CustomTag';
import type { _envoy_config_trace_v3_Tracing_Http, _envoy_config_trace_v3_Tracing_Http__Output } from '../../../../../../envoy/config/trace/v3/Tracing';
import type { CidrRange as _envoy_config_core_v3_CidrRange, CidrRange__Output as _envoy_config_core_v3_CidrRange__Output } from '../../../../../../envoy/config/core/v3/CidrRange';
import type { PathTransformation as _envoy_type_http_v3_PathTransformation, PathTransformation__Output as _envoy_type_http_v3_PathTransformation__Output } from '../../../../../../envoy/type/http/v3/PathTransformation';

// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

export const _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_CodecType = {
  AUTO: 0,
  HTTP1: 1,
  HTTP2: 2,
  HTTP3: 3,
} as const;

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_CodecType =
  | 'AUTO'
  | 0
  | 'HTTP1'
  | 1
  | 'HTTP2'
  | 2
  | 'HTTP3'
  | 3

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_CodecType__Output = typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_CodecType[keyof typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_CodecType]

// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

export const _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ForwardClientCertDetails = {
  SANITIZE: 0,
  FORWARD_ONLY: 1,
  APPEND_FORWARD: 2,
  SANITIZE_SET: 3,
  ALWAYS_FORWARD_ONLY: 4,
} as const;

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ForwardClientCertDetails =
  | 'SANITIZE'
  | 0
  | 'FORWARD_ONLY'
  | 1
  | 'APPEND_FORWARD'
  | 2
  | 'SANITIZE_SET'
  | 3
  | 'ALWAYS_FORWARD_ONLY'
  | 4

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ForwardClientCertDetails__Output = typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ForwardClientCertDetails[keyof typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ForwardClientCertDetails]

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_HcmAccessLogOptions {
  'access_log_flush_interval'?: (_google_protobuf_Duration | null);
  'flush_access_log_on_new_request'?: (boolean);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_HcmAccessLogOptions__Output {
  'access_log_flush_interval'?: (_google_protobuf_Duration__Output);
  'flush_access_log_on_new_request'?: (boolean);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_InternalAddressConfig {
  'unix_sockets'?: (boolean);
  'cidr_ranges'?: (_envoy_config_core_v3_CidrRange)[];
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_InternalAddressConfig__Output {
  'unix_sockets'?: (boolean);
  'cidr_ranges'?: (_envoy_config_core_v3_CidrRange__Output)[];
}

// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

export const _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing_OperationName = {
  INGRESS: 0,
  EGRESS: 1,
} as const;

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing_OperationName =
  | 'INGRESS'
  | 0
  | 'EGRESS'
  | 1

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing_OperationName__Output = typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing_OperationName[keyof typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing_OperationName]

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathNormalizationOptions {
  'forwarding_transformation'?: (_envoy_type_http_v3_PathTransformation | null);
  'http_filter_transformation'?: (_envoy_type_http_v3_PathTransformation | null);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathNormalizationOptions__Output {
  'forwarding_transformation'?: (_envoy_type_http_v3_PathTransformation__Output);
  'http_filter_transformation'?: (_envoy_type_http_v3_PathTransformation__Output);
}

// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

export const _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathWithEscapedSlashesAction = {
  IMPLEMENTATION_SPECIFIC_DEFAULT: 0,
  KEEP_UNCHANGED: 1,
  REJECT_REQUEST: 2,
  UNESCAPE_AND_REDIRECT: 3,
  UNESCAPE_AND_FORWARD: 4,
} as const;

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathWithEscapedSlashesAction =
  | 'IMPLEMENTATION_SPECIFIC_DEFAULT'
  | 0
  | 'KEEP_UNCHANGED'
  | 1
  | 'REJECT_REQUEST'
  | 2
  | 'UNESCAPE_AND_REDIRECT'
  | 3
  | 'UNESCAPE_AND_FORWARD'
  | 4

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathWithEscapedSlashesAction__Output = typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathWithEscapedSlashesAction[keyof typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathWithEscapedSlashesAction]

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ProxyStatusConfig {
  'remove_details'?: (boolean);
  'remove_connection_termination_details'?: (boolean);
  'remove_response_flags'?: (boolean);
  'set_recommended_response_code'?: (boolean);
  'use_node_id'?: (boolean);
  'literal_proxy_name'?: (string);
  'proxy_name'?: "use_node_id"|"literal_proxy_name";
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ProxyStatusConfig__Output {
  'remove_details'?: (boolean);
  'remove_connection_termination_details'?: (boolean);
  'remove_response_flags'?: (boolean);
  'set_recommended_response_code'?: (boolean);
  'use_node_id'?: (boolean);
  'literal_proxy_name'?: (string);
}

// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

export const _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ServerHeaderTransformation = {
  OVERWRITE: 0,
  APPEND_IF_ABSENT: 1,
  PASS_THROUGH: 2,
} as const;

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ServerHeaderTransformation =
  | 'OVERWRITE'
  | 0
  | 'APPEND_IF_ABSENT'
  | 1
  | 'PASS_THROUGH'
  | 2

export type _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ServerHeaderTransformation__Output = typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ServerHeaderTransformation[keyof typeof _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ServerHeaderTransformation]

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_SetCurrentClientCertDetails {
  'subject'?: (_google_protobuf_BoolValue | null);
  'cert'?: (boolean);
  'chain'?: (boolean);
  'dns'?: (boolean);
  'uri'?: (boolean);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_SetCurrentClientCertDetails__Output {
  'subject'?: (_google_protobuf_BoolValue__Output);
  'cert'?: (boolean);
  'chain'?: (boolean);
  'dns'?: (boolean);
  'uri'?: (boolean);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing {
  'client_sampling'?: (_envoy_type_v3_Percent | null);
  'random_sampling'?: (_envoy_type_v3_Percent | null);
  'overall_sampling'?: (_envoy_type_v3_Percent | null);
  'verbose'?: (boolean);
  'max_path_tag_length'?: (_google_protobuf_UInt32Value | null);
  'custom_tags'?: (_envoy_type_tracing_v3_CustomTag)[];
  'provider'?: (_envoy_config_trace_v3_Tracing_Http | null);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing__Output {
  'client_sampling'?: (_envoy_type_v3_Percent__Output);
  'random_sampling'?: (_envoy_type_v3_Percent__Output);
  'overall_sampling'?: (_envoy_type_v3_Percent__Output);
  'verbose'?: (boolean);
  'max_path_tag_length'?: (_google_protobuf_UInt32Value__Output);
  'custom_tags'?: (_envoy_type_tracing_v3_CustomTag__Output)[];
  'provider'?: (_envoy_config_trace_v3_Tracing_Http__Output);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_UpgradeConfig {
  'upgrade_type'?: (string);
  'filters'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpFilter)[];
  'enabled'?: (_google_protobuf_BoolValue | null);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_UpgradeConfig__Output {
  'upgrade_type'?: (string);
  'filters'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpFilter__Output)[];
  'enabled'?: (_google_protobuf_BoolValue__Output);
}

export interface HttpConnectionManager {
  'codec_type'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_CodecType);
  'stat_prefix'?: (string);
  'rds'?: (_envoy_extensions_filters_network_http_connection_manager_v3_Rds | null);
  'route_config'?: (_envoy_config_route_v3_RouteConfiguration | null);
  'http_filters'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpFilter)[];
  'add_user_agent'?: (_google_protobuf_BoolValue | null);
  'tracing'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing | null);
  'http_protocol_options'?: (_envoy_config_core_v3_Http1ProtocolOptions | null);
  'http2_protocol_options'?: (_envoy_config_core_v3_Http2ProtocolOptions | null);
  'server_name'?: (string);
  'drain_timeout'?: (_google_protobuf_Duration | null);
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog)[];
  'use_remote_address'?: (_google_protobuf_BoolValue | null);
  'generate_request_id'?: (_google_protobuf_BoolValue | null);
  'forward_client_cert_details'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ForwardClientCertDetails);
  'set_current_client_cert_details'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_SetCurrentClientCertDetails | null);
  'proxy_100_continue'?: (boolean);
  'xff_num_trusted_hops'?: (number);
  'represent_ipv4_remote_address_as_ipv4_mapped_ipv6'?: (boolean);
  'skip_xff_append'?: (boolean);
  'via'?: (string);
  'upgrade_configs'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_UpgradeConfig)[];
  'stream_idle_timeout'?: (_google_protobuf_Duration | null);
  'internal_address_config'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_InternalAddressConfig | null);
  'delayed_close_timeout'?: (_google_protobuf_Duration | null);
  'request_timeout'?: (_google_protobuf_Duration | null);
  'max_request_headers_kb'?: (_google_protobuf_UInt32Value | null);
  'normalize_path'?: (_google_protobuf_BoolValue | null);
  'scoped_routes'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes | null);
  'preserve_external_request_id'?: (boolean);
  'merge_slashes'?: (boolean);
  'server_header_transformation'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ServerHeaderTransformation);
  'common_http_protocol_options'?: (_envoy_config_core_v3_HttpProtocolOptions | null);
  'request_id_extension'?: (_envoy_extensions_filters_network_http_connection_manager_v3_RequestIDExtension | null);
  'always_set_request_id_in_response'?: (boolean);
  'local_reply_config'?: (_envoy_extensions_filters_network_http_connection_manager_v3_LocalReplyConfig | null);
  'strip_matching_host_port'?: (boolean);
  'stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue | null);
  'request_headers_timeout'?: (_google_protobuf_Duration | null);
  'strip_any_host_port'?: (boolean);
  'path_normalization_options'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathNormalizationOptions | null);
  'http3_protocol_options'?: (_envoy_config_core_v3_Http3ProtocolOptions | null);
  'path_with_escaped_slashes_action'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathWithEscapedSlashesAction);
  'original_ip_detection_extensions'?: (_envoy_config_core_v3_TypedExtensionConfig)[];
  'strip_trailing_host_dot'?: (boolean);
  'scheme_header_transformation'?: (_envoy_config_core_v3_SchemeHeaderTransformation | null);
  'proxy_status_config'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ProxyStatusConfig | null);
  'typed_header_validation_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'append_x_forwarded_port'?: (boolean);
  'early_header_mutation_extensions'?: (_envoy_config_core_v3_TypedExtensionConfig)[];
  'add_proxy_protocol_connection_state'?: (_google_protobuf_BoolValue | null);
  'access_log_flush_interval'?: (_google_protobuf_Duration | null);
  'flush_access_log_on_new_request'?: (boolean);
  'access_log_options'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_HcmAccessLogOptions | null);
  'route_specifier'?: "rds"|"route_config"|"scoped_routes";
  'strip_port_mode'?: "strip_any_host_port";
}

export interface HttpConnectionManager__Output {
  'codec_type'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_CodecType__Output);
  'stat_prefix'?: (string);
  'rds'?: (_envoy_extensions_filters_network_http_connection_manager_v3_Rds__Output);
  'route_config'?: (_envoy_config_route_v3_RouteConfiguration__Output);
  'http_filters'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpFilter__Output)[];
  'add_user_agent'?: (_google_protobuf_BoolValue__Output);
  'tracing'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_Tracing__Output);
  'http_protocol_options'?: (_envoy_config_core_v3_Http1ProtocolOptions__Output);
  'http2_protocol_options'?: (_envoy_config_core_v3_Http2ProtocolOptions__Output);
  'server_name'?: (string);
  'drain_timeout'?: (_google_protobuf_Duration__Output);
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog__Output)[];
  'use_remote_address'?: (_google_protobuf_BoolValue__Output);
  'generate_request_id'?: (_google_protobuf_BoolValue__Output);
  'forward_client_cert_details'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ForwardClientCertDetails__Output);
  'set_current_client_cert_details'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_SetCurrentClientCertDetails__Output);
  'proxy_100_continue'?: (boolean);
  'xff_num_trusted_hops'?: (number);
  'represent_ipv4_remote_address_as_ipv4_mapped_ipv6'?: (boolean);
  'skip_xff_append'?: (boolean);
  'via'?: (string);
  'upgrade_configs'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_UpgradeConfig__Output)[];
  'stream_idle_timeout'?: (_google_protobuf_Duration__Output);
  'internal_address_config'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_InternalAddressConfig__Output);
  'delayed_close_timeout'?: (_google_protobuf_Duration__Output);
  'request_timeout'?: (_google_protobuf_Duration__Output);
  'max_request_headers_kb'?: (_google_protobuf_UInt32Value__Output);
  'normalize_path'?: (_google_protobuf_BoolValue__Output);
  'scoped_routes'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes__Output);
  'preserve_external_request_id'?: (boolean);
  'merge_slashes'?: (boolean);
  'server_header_transformation'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ServerHeaderTransformation__Output);
  'common_http_protocol_options'?: (_envoy_config_core_v3_HttpProtocolOptions__Output);
  'request_id_extension'?: (_envoy_extensions_filters_network_http_connection_manager_v3_RequestIDExtension__Output);
  'always_set_request_id_in_response'?: (boolean);
  'local_reply_config'?: (_envoy_extensions_filters_network_http_connection_manager_v3_LocalReplyConfig__Output);
  'strip_matching_host_port'?: (boolean);
  'stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue__Output);
  'request_headers_timeout'?: (_google_protobuf_Duration__Output);
  'strip_any_host_port'?: (boolean);
  'path_normalization_options'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathNormalizationOptions__Output);
  'http3_protocol_options'?: (_envoy_config_core_v3_Http3ProtocolOptions__Output);
  'path_with_escaped_slashes_action'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_PathWithEscapedSlashesAction__Output);
  'original_ip_detection_extensions'?: (_envoy_config_core_v3_TypedExtensionConfig__Output)[];
  'strip_trailing_host_dot'?: (boolean);
  'scheme_header_transformation'?: (_envoy_config_core_v3_SchemeHeaderTransformation__Output);
  'proxy_status_config'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_ProxyStatusConfig__Output);
  'typed_header_validation_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'append_x_forwarded_port'?: (boolean);
  'early_header_mutation_extensions'?: (_envoy_config_core_v3_TypedExtensionConfig__Output)[];
  'add_proxy_protocol_connection_state'?: (_google_protobuf_BoolValue__Output);
  'access_log_flush_interval'?: (_google_protobuf_Duration__Output);
  'flush_access_log_on_new_request'?: (boolean);
  'access_log_options'?: (_envoy_extensions_filters_network_http_connection_manager_v3_HttpConnectionManager_HcmAccessLogOptions__Output);
}
