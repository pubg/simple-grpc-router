// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { Route as _envoy_config_route_v3_Route, Route__Output as _envoy_config_route_v3_Route__Output } from '../../../../envoy/config/route/v3/Route';
import type { VirtualCluster as _envoy_config_route_v3_VirtualCluster, VirtualCluster__Output as _envoy_config_route_v3_VirtualCluster__Output } from '../../../../envoy/config/route/v3/VirtualCluster';
import type { RateLimit as _envoy_config_route_v3_RateLimit, RateLimit__Output as _envoy_config_route_v3_RateLimit__Output } from '../../../../envoy/config/route/v3/RateLimit';
import type { HeaderValueOption as _envoy_config_core_v3_HeaderValueOption, HeaderValueOption__Output as _envoy_config_core_v3_HeaderValueOption__Output } from '../../../../envoy/config/core/v3/HeaderValueOption';
import type { CorsPolicy as _envoy_config_route_v3_CorsPolicy, CorsPolicy__Output as _envoy_config_route_v3_CorsPolicy__Output } from '../../../../envoy/config/route/v3/CorsPolicy';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { RetryPolicy as _envoy_config_route_v3_RetryPolicy, RetryPolicy__Output as _envoy_config_route_v3_RetryPolicy__Output } from '../../../../envoy/config/route/v3/RetryPolicy';
import type { HedgePolicy as _envoy_config_route_v3_HedgePolicy, HedgePolicy__Output as _envoy_config_route_v3_HedgePolicy__Output } from '../../../../envoy/config/route/v3/HedgePolicy';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Matcher as _xds_type_matcher_v3_Matcher, Matcher__Output as _xds_type_matcher_v3_Matcher__Output } from '../../../../xds/type/matcher/v3/Matcher';
import type { _envoy_config_route_v3_RouteAction_RequestMirrorPolicy, _envoy_config_route_v3_RouteAction_RequestMirrorPolicy__Output } from '../../../../envoy/config/route/v3/RouteAction';

// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

export const _envoy_config_route_v3_VirtualHost_TlsRequirementType = {
  NONE: 0,
  EXTERNAL_ONLY: 1,
  ALL: 2,
} as const;

export type _envoy_config_route_v3_VirtualHost_TlsRequirementType =
  | 'NONE'
  | 0
  | 'EXTERNAL_ONLY'
  | 1
  | 'ALL'
  | 2

export type _envoy_config_route_v3_VirtualHost_TlsRequirementType__Output = typeof _envoy_config_route_v3_VirtualHost_TlsRequirementType[keyof typeof _envoy_config_route_v3_VirtualHost_TlsRequirementType]

export interface VirtualHost {
  'name'?: (string);
  'domains'?: (string)[];
  'routes'?: (_envoy_config_route_v3_Route)[];
  'require_tls'?: (_envoy_config_route_v3_VirtualHost_TlsRequirementType);
  'virtual_clusters'?: (_envoy_config_route_v3_VirtualCluster)[];
  'rate_limits'?: (_envoy_config_route_v3_RateLimit)[];
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'cors'?: (_envoy_config_route_v3_CorsPolicy | null);
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'response_headers_to_remove'?: (string)[];
  'request_headers_to_remove'?: (string)[];
  'include_request_attempt_count'?: (boolean);
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any});
  'retry_policy'?: (_envoy_config_route_v3_RetryPolicy | null);
  'hedge_policy'?: (_envoy_config_route_v3_HedgePolicy | null);
  'per_request_buffer_limit_bytes'?: (_google_protobuf_UInt32Value | null);
  'include_attempt_count_in_response'?: (boolean);
  'retry_policy_typed_config'?: (_google_protobuf_Any | null);
  'matcher'?: (_xds_type_matcher_v3_Matcher | null);
  'request_mirror_policies'?: (_envoy_config_route_v3_RouteAction_RequestMirrorPolicy)[];
  'include_is_timeout_retry_header'?: (boolean);
}

export interface VirtualHost__Output {
  'name'?: (string);
  'domains'?: (string)[];
  'routes'?: (_envoy_config_route_v3_Route__Output)[];
  'require_tls'?: (_envoy_config_route_v3_VirtualHost_TlsRequirementType__Output);
  'virtual_clusters'?: (_envoy_config_route_v3_VirtualCluster__Output)[];
  'rate_limits'?: (_envoy_config_route_v3_RateLimit__Output)[];
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'cors'?: (_envoy_config_route_v3_CorsPolicy__Output);
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'response_headers_to_remove'?: (string)[];
  'request_headers_to_remove'?: (string)[];
  'include_request_attempt_count'?: (boolean);
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any__Output});
  'retry_policy'?: (_envoy_config_route_v3_RetryPolicy__Output);
  'hedge_policy'?: (_envoy_config_route_v3_HedgePolicy__Output);
  'per_request_buffer_limit_bytes'?: (_google_protobuf_UInt32Value__Output);
  'include_attempt_count_in_response'?: (boolean);
  'retry_policy_typed_config'?: (_google_protobuf_Any__Output);
  'matcher'?: (_xds_type_matcher_v3_Matcher__Output);
  'request_mirror_policies'?: (_envoy_config_route_v3_RouteAction_RequestMirrorPolicy__Output)[];
  'include_is_timeout_retry_header'?: (boolean);
}
