// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { FractionalPercent as _envoy_type_v3_FractionalPercent, FractionalPercent__Output as _envoy_type_v3_FractionalPercent__Output } from '../../../../envoy/type/v3/FractionalPercent';
import type { CustomTag as _envoy_type_tracing_v3_CustomTag, CustomTag__Output as _envoy_type_tracing_v3_CustomTag__Output } from '../../../../envoy/type/tracing/v3/CustomTag';

export interface Tracing {
  'client_sampling'?: (_envoy_type_v3_FractionalPercent | null);
  'random_sampling'?: (_envoy_type_v3_FractionalPercent | null);
  'overall_sampling'?: (_envoy_type_v3_FractionalPercent | null);
  'custom_tags'?: (_envoy_type_tracing_v3_CustomTag)[];
}

export interface Tracing__Output {
  'client_sampling'?: (_envoy_type_v3_FractionalPercent__Output);
  'random_sampling'?: (_envoy_type_v3_FractionalPercent__Output);
  'overall_sampling'?: (_envoy_type_v3_FractionalPercent__Output);
  'custom_tags'?: (_envoy_type_tracing_v3_CustomTag__Output)[];
}
