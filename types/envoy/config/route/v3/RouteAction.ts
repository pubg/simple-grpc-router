// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { WeightedCluster as _envoy_config_route_v3_WeightedCluster, WeightedCluster__Output as _envoy_config_route_v3_WeightedCluster__Output } from '../../../../envoy/config/route/v3/WeightedCluster';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { RetryPolicy as _envoy_config_route_v3_RetryPolicy, RetryPolicy__Output as _envoy_config_route_v3_RetryPolicy__Output } from '../../../../envoy/config/route/v3/RetryPolicy';
import type { RoutingPriority as _envoy_config_core_v3_RoutingPriority, RoutingPriority__Output as _envoy_config_core_v3_RoutingPriority__Output } from '../../../../envoy/config/core/v3/RoutingPriority';
import type { RateLimit as _envoy_config_route_v3_RateLimit, RateLimit__Output as _envoy_config_route_v3_RateLimit__Output } from '../../../../envoy/config/route/v3/RateLimit';
import type { CorsPolicy as _envoy_config_route_v3_CorsPolicy, CorsPolicy__Output as _envoy_config_route_v3_CorsPolicy__Output } from '../../../../envoy/config/route/v3/CorsPolicy';
import type { HedgePolicy as _envoy_config_route_v3_HedgePolicy, HedgePolicy__Output as _envoy_config_route_v3_HedgePolicy__Output } from '../../../../envoy/config/route/v3/HedgePolicy';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { RegexMatchAndSubstitute as _envoy_type_matcher_v3_RegexMatchAndSubstitute, RegexMatchAndSubstitute__Output as _envoy_type_matcher_v3_RegexMatchAndSubstitute__Output } from '../../../../envoy/type/matcher/v3/RegexMatchAndSubstitute';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { InternalRedirectPolicy as _envoy_config_route_v3_InternalRedirectPolicy, InternalRedirectPolicy__Output as _envoy_config_route_v3_InternalRedirectPolicy__Output } from '../../../../envoy/config/route/v3/InternalRedirectPolicy';
import type { ClusterSpecifierPlugin as _envoy_config_route_v3_ClusterSpecifierPlugin, ClusterSpecifierPlugin__Output as _envoy_config_route_v3_ClusterSpecifierPlugin__Output } from '../../../../envoy/config/route/v3/ClusterSpecifierPlugin';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { RuntimeFractionalPercent as _envoy_config_core_v3_RuntimeFractionalPercent, RuntimeFractionalPercent__Output as _envoy_config_core_v3_RuntimeFractionalPercent__Output } from '../../../../envoy/config/core/v3/RuntimeFractionalPercent';
import type { ProxyProtocolConfig as _envoy_config_core_v3_ProxyProtocolConfig, ProxyProtocolConfig__Output as _envoy_config_core_v3_ProxyProtocolConfig__Output } from '../../../../envoy/config/core/v3/ProxyProtocolConfig';

// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

export const _envoy_config_route_v3_RouteAction_ClusterNotFoundResponseCode = {
  SERVICE_UNAVAILABLE: 0,
  NOT_FOUND: 1,
  INTERNAL_SERVER_ERROR: 2,
} as const;

export type _envoy_config_route_v3_RouteAction_ClusterNotFoundResponseCode =
  | 'SERVICE_UNAVAILABLE'
  | 0
  | 'NOT_FOUND'
  | 1
  | 'INTERNAL_SERVER_ERROR'
  | 2

export type _envoy_config_route_v3_RouteAction_ClusterNotFoundResponseCode__Output = typeof _envoy_config_route_v3_RouteAction_ClusterNotFoundResponseCode[keyof typeof _envoy_config_route_v3_RouteAction_ClusterNotFoundResponseCode]

export interface _envoy_config_route_v3_RouteAction_UpgradeConfig_ConnectConfig {
  'proxy_protocol_config'?: (_envoy_config_core_v3_ProxyProtocolConfig | null);
  'allow_post'?: (boolean);
}

export interface _envoy_config_route_v3_RouteAction_UpgradeConfig_ConnectConfig__Output {
  'proxy_protocol_config'?: (_envoy_config_core_v3_ProxyProtocolConfig__Output);
  'allow_post'?: (boolean);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_ConnectionProperties {
  'source_ip'?: (boolean);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_ConnectionProperties__Output {
  'source_ip'?: (boolean);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_Cookie {
  'name'?: (string);
  'ttl'?: (_google_protobuf_Duration | null);
  'path'?: (string);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_Cookie__Output {
  'name'?: (string);
  'ttl'?: (_google_protobuf_Duration__Output);
  'path'?: (string);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_FilterState {
  'key'?: (string);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_FilterState__Output {
  'key'?: (string);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy {
  'header'?: (_envoy_config_route_v3_RouteAction_HashPolicy_Header | null);
  'cookie'?: (_envoy_config_route_v3_RouteAction_HashPolicy_Cookie | null);
  'connection_properties'?: (_envoy_config_route_v3_RouteAction_HashPolicy_ConnectionProperties | null);
  'query_parameter'?: (_envoy_config_route_v3_RouteAction_HashPolicy_QueryParameter | null);
  'filter_state'?: (_envoy_config_route_v3_RouteAction_HashPolicy_FilterState | null);
  'terminal'?: (boolean);
  'policy_specifier'?: "header"|"cookie"|"connection_properties"|"query_parameter"|"filter_state";
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy__Output {
  'header'?: (_envoy_config_route_v3_RouteAction_HashPolicy_Header__Output);
  'cookie'?: (_envoy_config_route_v3_RouteAction_HashPolicy_Cookie__Output);
  'connection_properties'?: (_envoy_config_route_v3_RouteAction_HashPolicy_ConnectionProperties__Output);
  'query_parameter'?: (_envoy_config_route_v3_RouteAction_HashPolicy_QueryParameter__Output);
  'filter_state'?: (_envoy_config_route_v3_RouteAction_HashPolicy_FilterState__Output);
  'terminal'?: (boolean);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_Header {
  'header_name'?: (string);
  'regex_rewrite'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute | null);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_Header__Output {
  'header_name'?: (string);
  'regex_rewrite'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute__Output);
}

// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

export const _envoy_config_route_v3_RouteAction_InternalRedirectAction = {
  PASS_THROUGH_INTERNAL_REDIRECT: 0,
  HANDLE_INTERNAL_REDIRECT: 1,
} as const;

export type _envoy_config_route_v3_RouteAction_InternalRedirectAction =
  | 'PASS_THROUGH_INTERNAL_REDIRECT'
  | 0
  | 'HANDLE_INTERNAL_REDIRECT'
  | 1

export type _envoy_config_route_v3_RouteAction_InternalRedirectAction__Output = typeof _envoy_config_route_v3_RouteAction_InternalRedirectAction[keyof typeof _envoy_config_route_v3_RouteAction_InternalRedirectAction]

export interface _envoy_config_route_v3_RouteAction_MaxStreamDuration {
  'max_stream_duration'?: (_google_protobuf_Duration | null);
  'grpc_timeout_header_max'?: (_google_protobuf_Duration | null);
  'grpc_timeout_header_offset'?: (_google_protobuf_Duration | null);
}

export interface _envoy_config_route_v3_RouteAction_MaxStreamDuration__Output {
  'max_stream_duration'?: (_google_protobuf_Duration__Output);
  'grpc_timeout_header_max'?: (_google_protobuf_Duration__Output);
  'grpc_timeout_header_offset'?: (_google_protobuf_Duration__Output);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_QueryParameter {
  'name'?: (string);
}

export interface _envoy_config_route_v3_RouteAction_HashPolicy_QueryParameter__Output {
  'name'?: (string);
}

export interface _envoy_config_route_v3_RouteAction_RequestMirrorPolicy {
  'cluster'?: (string);
  'cluster_header'?: (string);
  'runtime_fraction'?: (_envoy_config_core_v3_RuntimeFractionalPercent | null);
  'trace_sampled'?: (_google_protobuf_BoolValue | null);
}

export interface _envoy_config_route_v3_RouteAction_RequestMirrorPolicy__Output {
  'cluster'?: (string);
  'cluster_header'?: (string);
  'runtime_fraction'?: (_envoy_config_core_v3_RuntimeFractionalPercent__Output);
  'trace_sampled'?: (_google_protobuf_BoolValue__Output);
}

export interface _envoy_config_route_v3_RouteAction_UpgradeConfig {
  'upgrade_type'?: (string);
  'enabled'?: (_google_protobuf_BoolValue | null);
  'connect_config'?: (_envoy_config_route_v3_RouteAction_UpgradeConfig_ConnectConfig | null);
}

export interface _envoy_config_route_v3_RouteAction_UpgradeConfig__Output {
  'upgrade_type'?: (string);
  'enabled'?: (_google_protobuf_BoolValue__Output);
  'connect_config'?: (_envoy_config_route_v3_RouteAction_UpgradeConfig_ConnectConfig__Output);
}

export interface RouteAction {
  'cluster'?: (string);
  'cluster_header'?: (string);
  'weighted_clusters'?: (_envoy_config_route_v3_WeightedCluster | null);
  'metadata_match'?: (_envoy_config_core_v3_Metadata | null);
  'prefix_rewrite'?: (string);
  'host_rewrite_literal'?: (string);
  'auto_host_rewrite'?: (_google_protobuf_BoolValue | null);
  'timeout'?: (_google_protobuf_Duration | null);
  'retry_policy'?: (_envoy_config_route_v3_RetryPolicy | null);
  'priority'?: (_envoy_config_core_v3_RoutingPriority);
  'rate_limits'?: (_envoy_config_route_v3_RateLimit)[];
  'include_vh_rate_limits'?: (_google_protobuf_BoolValue | null);
  'hash_policy'?: (_envoy_config_route_v3_RouteAction_HashPolicy)[];
  'cors'?: (_envoy_config_route_v3_CorsPolicy | null);
  'cluster_not_found_response_code'?: (_envoy_config_route_v3_RouteAction_ClusterNotFoundResponseCode);
  'max_grpc_timeout'?: (_google_protobuf_Duration | null);
  'idle_timeout'?: (_google_protobuf_Duration | null);
  'upgrade_configs'?: (_envoy_config_route_v3_RouteAction_UpgradeConfig)[];
  'internal_redirect_action'?: (_envoy_config_route_v3_RouteAction_InternalRedirectAction);
  'hedge_policy'?: (_envoy_config_route_v3_HedgePolicy | null);
  'grpc_timeout_offset'?: (_google_protobuf_Duration | null);
  'host_rewrite_header'?: (string);
  'request_mirror_policies'?: (_envoy_config_route_v3_RouteAction_RequestMirrorPolicy)[];
  'max_internal_redirects'?: (_google_protobuf_UInt32Value | null);
  'regex_rewrite'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute | null);
  'retry_policy_typed_config'?: (_google_protobuf_Any | null);
  'internal_redirect_policy'?: (_envoy_config_route_v3_InternalRedirectPolicy | null);
  'host_rewrite_path_regex'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute | null);
  'max_stream_duration'?: (_envoy_config_route_v3_RouteAction_MaxStreamDuration | null);
  'cluster_specifier_plugin'?: (string);
  'append_x_forwarded_host'?: (boolean);
  'inline_cluster_specifier_plugin'?: (_envoy_config_route_v3_ClusterSpecifierPlugin | null);
  'early_data_policy'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'path_rewrite_policy'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'cluster_specifier'?: "cluster"|"cluster_header"|"weighted_clusters"|"cluster_specifier_plugin"|"inline_cluster_specifier_plugin";
  'host_rewrite_specifier'?: "host_rewrite_literal"|"auto_host_rewrite"|"host_rewrite_header"|"host_rewrite_path_regex";
}

export interface RouteAction__Output {
  'cluster'?: (string);
  'cluster_header'?: (string);
  'weighted_clusters'?: (_envoy_config_route_v3_WeightedCluster__Output);
  'metadata_match'?: (_envoy_config_core_v3_Metadata__Output);
  'prefix_rewrite'?: (string);
  'host_rewrite_literal'?: (string);
  'auto_host_rewrite'?: (_google_protobuf_BoolValue__Output);
  'timeout'?: (_google_protobuf_Duration__Output);
  'retry_policy'?: (_envoy_config_route_v3_RetryPolicy__Output);
  'priority'?: (_envoy_config_core_v3_RoutingPriority__Output);
  'rate_limits'?: (_envoy_config_route_v3_RateLimit__Output)[];
  'include_vh_rate_limits'?: (_google_protobuf_BoolValue__Output);
  'hash_policy'?: (_envoy_config_route_v3_RouteAction_HashPolicy__Output)[];
  'cors'?: (_envoy_config_route_v3_CorsPolicy__Output);
  'cluster_not_found_response_code'?: (_envoy_config_route_v3_RouteAction_ClusterNotFoundResponseCode__Output);
  'max_grpc_timeout'?: (_google_protobuf_Duration__Output);
  'idle_timeout'?: (_google_protobuf_Duration__Output);
  'upgrade_configs'?: (_envoy_config_route_v3_RouteAction_UpgradeConfig__Output)[];
  'internal_redirect_action'?: (_envoy_config_route_v3_RouteAction_InternalRedirectAction__Output);
  'hedge_policy'?: (_envoy_config_route_v3_HedgePolicy__Output);
  'grpc_timeout_offset'?: (_google_protobuf_Duration__Output);
  'host_rewrite_header'?: (string);
  'request_mirror_policies'?: (_envoy_config_route_v3_RouteAction_RequestMirrorPolicy__Output)[];
  'max_internal_redirects'?: (_google_protobuf_UInt32Value__Output);
  'regex_rewrite'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute__Output);
  'retry_policy_typed_config'?: (_google_protobuf_Any__Output);
  'internal_redirect_policy'?: (_envoy_config_route_v3_InternalRedirectPolicy__Output);
  'host_rewrite_path_regex'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute__Output);
  'max_stream_duration'?: (_envoy_config_route_v3_RouteAction_MaxStreamDuration__Output);
  'cluster_specifier_plugin'?: (string);
  'append_x_forwarded_host'?: (boolean);
  'inline_cluster_specifier_plugin'?: (_envoy_config_route_v3_ClusterSpecifierPlugin__Output);
  'early_data_policy'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'path_rewrite_policy'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}
