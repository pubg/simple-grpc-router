// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { HeaderMatcher as _envoy_config_route_v3_HeaderMatcher, HeaderMatcher__Output as _envoy_config_route_v3_HeaderMatcher__Output } from '../../../../envoy/config/route/v3/HeaderMatcher';

export interface VirtualCluster {
  'name'?: (string);
  'headers'?: (_envoy_config_route_v3_HeaderMatcher)[];
}

export interface VirtualCluster__Output {
  'name'?: (string);
  'headers'?: (_envoy_config_route_v3_HeaderMatcher__Output)[];
}
