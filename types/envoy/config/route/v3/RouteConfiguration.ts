// Original file: .repos/envoy/api/envoy/config/route/v3/route.proto

import type { VirtualHost as _envoy_config_route_v3_VirtualHost, VirtualHost__Output as _envoy_config_route_v3_VirtualHost__Output } from '../../../../envoy/config/route/v3/VirtualHost';
import type { HeaderValueOption as _envoy_config_core_v3_HeaderValueOption, HeaderValueOption__Output as _envoy_config_core_v3_HeaderValueOption__Output } from '../../../../envoy/config/core/v3/HeaderValueOption';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { Vhds as _envoy_config_route_v3_Vhds, Vhds__Output as _envoy_config_route_v3_Vhds__Output } from '../../../../envoy/config/route/v3/Vhds';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { ClusterSpecifierPlugin as _envoy_config_route_v3_ClusterSpecifierPlugin, ClusterSpecifierPlugin__Output as _envoy_config_route_v3_ClusterSpecifierPlugin__Output } from '../../../../envoy/config/route/v3/ClusterSpecifierPlugin';
import type { _envoy_config_route_v3_RouteAction_RequestMirrorPolicy, _envoy_config_route_v3_RouteAction_RequestMirrorPolicy__Output } from '../../../../envoy/config/route/v3/RouteAction';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface RouteConfiguration {
  'name'?: (string);
  'virtual_hosts'?: (_envoy_config_route_v3_VirtualHost)[];
  'internal_only_headers'?: (string)[];
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'response_headers_to_remove'?: (string)[];
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'validate_clusters'?: (_google_protobuf_BoolValue | null);
  'request_headers_to_remove'?: (string)[];
  'vhds'?: (_envoy_config_route_v3_Vhds | null);
  'most_specific_header_mutations_wins'?: (boolean);
  'max_direct_response_body_size_bytes'?: (_google_protobuf_UInt32Value | null);
  'cluster_specifier_plugins'?: (_envoy_config_route_v3_ClusterSpecifierPlugin)[];
  'request_mirror_policies'?: (_envoy_config_route_v3_RouteAction_RequestMirrorPolicy)[];
  'ignore_port_in_host_matching'?: (boolean);
  'ignore_path_parameters_in_path_matching'?: (boolean);
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any});
}

export interface RouteConfiguration__Output {
  'name'?: (string);
  'virtual_hosts'?: (_envoy_config_route_v3_VirtualHost__Output)[];
  'internal_only_headers'?: (string)[];
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'response_headers_to_remove'?: (string)[];
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'validate_clusters'?: (_google_protobuf_BoolValue__Output);
  'request_headers_to_remove'?: (string)[];
  'vhds'?: (_envoy_config_route_v3_Vhds__Output);
  'most_specific_header_mutations_wins'?: (boolean);
  'max_direct_response_body_size_bytes'?: (_google_protobuf_UInt32Value__Output);
  'cluster_specifier_plugins'?: (_envoy_config_route_v3_ClusterSpecifierPlugin__Output)[];
  'request_mirror_policies'?: (_envoy_config_route_v3_RouteAction_RequestMirrorPolicy__Output)[];
  'ignore_port_in_host_matching'?: (boolean);
  'ignore_path_parameters_in_path_matching'?: (boolean);
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any__Output});
}
