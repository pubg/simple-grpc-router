// Original file: .repos/envoy/api/envoy/config/route/v3/scoped_route.proto

import type { RouteConfiguration as _envoy_config_route_v3_RouteConfiguration, RouteConfiguration__Output as _envoy_config_route_v3_RouteConfiguration__Output } from '../../../../envoy/config/route/v3/RouteConfiguration';

export interface _envoy_config_route_v3_ScopedRouteConfiguration_Key_Fragment {
  'string_key'?: (string);
  'type'?: "string_key";
}

export interface _envoy_config_route_v3_ScopedRouteConfiguration_Key_Fragment__Output {
  'string_key'?: (string);
}

export interface _envoy_config_route_v3_ScopedRouteConfiguration_Key {
  'fragments'?: (_envoy_config_route_v3_ScopedRouteConfiguration_Key_Fragment)[];
}

export interface _envoy_config_route_v3_ScopedRouteConfiguration_Key__Output {
  'fragments'?: (_envoy_config_route_v3_ScopedRouteConfiguration_Key_Fragment__Output)[];
}

export interface ScopedRouteConfiguration {
  'name'?: (string);
  'route_configuration_name'?: (string);
  'key'?: (_envoy_config_route_v3_ScopedRouteConfiguration_Key | null);
  'on_demand'?: (boolean);
  'route_configuration'?: (_envoy_config_route_v3_RouteConfiguration | null);
}

export interface ScopedRouteConfiguration__Output {
  'name'?: (string);
  'route_configuration_name'?: (string);
  'key'?: (_envoy_config_route_v3_ScopedRouteConfiguration_Key__Output);
  'on_demand'?: (boolean);
  'route_configuration'?: (_envoy_config_route_v3_RouteConfiguration__Output);
}
