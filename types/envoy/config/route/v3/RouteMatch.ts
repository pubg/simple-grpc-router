// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { HeaderMatcher as _envoy_config_route_v3_HeaderMatcher, HeaderMatcher__Output as _envoy_config_route_v3_HeaderMatcher__Output } from '../../../../envoy/config/route/v3/HeaderMatcher';
import type { QueryParameterMatcher as _envoy_config_route_v3_QueryParameterMatcher, QueryParameterMatcher__Output as _envoy_config_route_v3_QueryParameterMatcher__Output } from '../../../../envoy/config/route/v3/QueryParameterMatcher';
import type { RuntimeFractionalPercent as _envoy_config_core_v3_RuntimeFractionalPercent, RuntimeFractionalPercent__Output as _envoy_config_core_v3_RuntimeFractionalPercent__Output } from '../../../../envoy/config/core/v3/RuntimeFractionalPercent';
import type { RegexMatcher as _envoy_type_matcher_v3_RegexMatcher, RegexMatcher__Output as _envoy_type_matcher_v3_RegexMatcher__Output } from '../../../../envoy/type/matcher/v3/RegexMatcher';
import type { MetadataMatcher as _envoy_type_matcher_v3_MetadataMatcher, MetadataMatcher__Output as _envoy_type_matcher_v3_MetadataMatcher__Output } from '../../../../envoy/type/matcher/v3/MetadataMatcher';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface _envoy_config_route_v3_RouteMatch_ConnectMatcher {
}

export interface _envoy_config_route_v3_RouteMatch_ConnectMatcher__Output {
}

export interface _envoy_config_route_v3_RouteMatch_GrpcRouteMatchOptions {
}

export interface _envoy_config_route_v3_RouteMatch_GrpcRouteMatchOptions__Output {
}

export interface _envoy_config_route_v3_RouteMatch_TlsContextMatchOptions {
  'presented'?: (_google_protobuf_BoolValue | null);
  'validated'?: (_google_protobuf_BoolValue | null);
}

export interface _envoy_config_route_v3_RouteMatch_TlsContextMatchOptions__Output {
  'presented'?: (_google_protobuf_BoolValue__Output);
  'validated'?: (_google_protobuf_BoolValue__Output);
}

export interface RouteMatch {
  'prefix'?: (string);
  'path'?: (string);
  'case_sensitive'?: (_google_protobuf_BoolValue | null);
  'headers'?: (_envoy_config_route_v3_HeaderMatcher)[];
  'query_parameters'?: (_envoy_config_route_v3_QueryParameterMatcher)[];
  'grpc'?: (_envoy_config_route_v3_RouteMatch_GrpcRouteMatchOptions | null);
  'runtime_fraction'?: (_envoy_config_core_v3_RuntimeFractionalPercent | null);
  'safe_regex'?: (_envoy_type_matcher_v3_RegexMatcher | null);
  'tls_context'?: (_envoy_config_route_v3_RouteMatch_TlsContextMatchOptions | null);
  'connect_matcher'?: (_envoy_config_route_v3_RouteMatch_ConnectMatcher | null);
  'dynamic_metadata'?: (_envoy_type_matcher_v3_MetadataMatcher)[];
  'path_separated_prefix'?: (string);
  'path_match_policy'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'path_specifier'?: "prefix"|"path"|"safe_regex"|"connect_matcher"|"path_separated_prefix"|"path_match_policy";
}

export interface RouteMatch__Output {
  'prefix'?: (string);
  'path'?: (string);
  'case_sensitive'?: (_google_protobuf_BoolValue__Output);
  'headers'?: (_envoy_config_route_v3_HeaderMatcher__Output)[];
  'query_parameters'?: (_envoy_config_route_v3_QueryParameterMatcher__Output)[];
  'grpc'?: (_envoy_config_route_v3_RouteMatch_GrpcRouteMatchOptions__Output);
  'runtime_fraction'?: (_envoy_config_core_v3_RuntimeFractionalPercent__Output);
  'safe_regex'?: (_envoy_type_matcher_v3_RegexMatcher__Output);
  'tls_context'?: (_envoy_config_route_v3_RouteMatch_TlsContextMatchOptions__Output);
  'connect_matcher'?: (_envoy_config_route_v3_RouteMatch_ConnectMatcher__Output);
  'dynamic_metadata'?: (_envoy_type_matcher_v3_MetadataMatcher__Output)[];
  'path_separated_prefix'?: (string);
  'path_match_policy'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}
