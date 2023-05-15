// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto

import type { FractionalPercent as _envoy_type_v3_FractionalPercent, FractionalPercent__Output as _envoy_type_v3_FractionalPercent__Output } from '../../../../envoy/type/v3/FractionalPercent';

export interface RuntimeFilter {
  'runtime_key'?: (string);
  'percent_sampled'?: (_envoy_type_v3_FractionalPercent | null);
  'use_independent_randomness'?: (boolean);
}

export interface RuntimeFilter__Output {
  'runtime_key'?: (string);
  'percent_sampled'?: (_envoy_type_v3_FractionalPercent__Output);
  'use_independent_randomness'?: (boolean);
}
