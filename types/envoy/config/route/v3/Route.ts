// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { RouteMatch as _envoy_config_route_v3_RouteMatch, RouteMatch__Output as _envoy_config_route_v3_RouteMatch__Output } from '../../../../envoy/config/route/v3/RouteMatch';
import type { RouteAction as _envoy_config_route_v3_RouteAction, RouteAction__Output as _envoy_config_route_v3_RouteAction__Output } from '../../../../envoy/config/route/v3/RouteAction';
import type { RedirectAction as _envoy_config_route_v3_RedirectAction, RedirectAction__Output as _envoy_config_route_v3_RedirectAction__Output } from '../../../../envoy/config/route/v3/RedirectAction';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { Decorator as _envoy_config_route_v3_Decorator, Decorator__Output as _envoy_config_route_v3_Decorator__Output } from '../../../../envoy/config/route/v3/Decorator';
import type { DirectResponseAction as _envoy_config_route_v3_DirectResponseAction, DirectResponseAction__Output as _envoy_config_route_v3_DirectResponseAction__Output } from '../../../../envoy/config/route/v3/DirectResponseAction';
import type { HeaderValueOption as _envoy_config_core_v3_HeaderValueOption, HeaderValueOption__Output as _envoy_config_core_v3_HeaderValueOption__Output } from '../../../../envoy/config/core/v3/HeaderValueOption';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { Tracing as _envoy_config_route_v3_Tracing, Tracing__Output as _envoy_config_route_v3_Tracing__Output } from '../../../../envoy/config/route/v3/Tracing';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { FilterAction as _envoy_config_route_v3_FilterAction, FilterAction__Output as _envoy_config_route_v3_FilterAction__Output } from '../../../../envoy/config/route/v3/FilterAction';
import type { NonForwardingAction as _envoy_config_route_v3_NonForwardingAction, NonForwardingAction__Output as _envoy_config_route_v3_NonForwardingAction__Output } from '../../../../envoy/config/route/v3/NonForwardingAction';

export interface Route {
  'match'?: (_envoy_config_route_v3_RouteMatch | null);
  'route'?: (_envoy_config_route_v3_RouteAction | null);
  'redirect'?: (_envoy_config_route_v3_RedirectAction | null);
  'metadata'?: (_envoy_config_core_v3_Metadata | null);
  'decorator'?: (_envoy_config_route_v3_Decorator | null);
  'direct_response'?: (_envoy_config_route_v3_DirectResponseAction | null);
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'response_headers_to_remove'?: (string)[];
  'request_headers_to_remove'?: (string)[];
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any});
  'name'?: (string);
  'tracing'?: (_envoy_config_route_v3_Tracing | null);
  'per_request_buffer_limit_bytes'?: (_google_protobuf_UInt32Value | null);
  'filter_action'?: (_envoy_config_route_v3_FilterAction | null);
  'non_forwarding_action'?: (_envoy_config_route_v3_NonForwardingAction | null);
  'stat_prefix'?: (string);
  'action'?: "route"|"redirect"|"direct_response"|"filter_action"|"non_forwarding_action";
}

export interface Route__Output {
  'match'?: (_envoy_config_route_v3_RouteMatch__Output);
  'route'?: (_envoy_config_route_v3_RouteAction__Output);
  'redirect'?: (_envoy_config_route_v3_RedirectAction__Output);
  'metadata'?: (_envoy_config_core_v3_Metadata__Output);
  'decorator'?: (_envoy_config_route_v3_Decorator__Output);
  'direct_response'?: (_envoy_config_route_v3_DirectResponseAction__Output);
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'response_headers_to_remove'?: (string)[];
  'request_headers_to_remove'?: (string)[];
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any__Output});
  'name'?: (string);
  'tracing'?: (_envoy_config_route_v3_Tracing__Output);
  'per_request_buffer_limit_bytes'?: (_google_protobuf_UInt32Value__Output);
  'filter_action'?: (_envoy_config_route_v3_FilterAction__Output);
  'non_forwarding_action'?: (_envoy_config_route_v3_NonForwardingAction__Output);
  'stat_prefix'?: (string);
}
