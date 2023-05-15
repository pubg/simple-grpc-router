// Original file: .repos/envoy/api/envoy/type/matcher/v3/number.proto

import type { DoubleRange as _envoy_type_v3_DoubleRange, DoubleRange__Output as _envoy_type_v3_DoubleRange__Output } from '../../../../envoy/type/v3/DoubleRange';

export interface DoubleMatcher {
  'range'?: (_envoy_type_v3_DoubleRange | null);
  'exact'?: (number | string);
  'match_pattern'?: "range"|"exact";
}

export interface DoubleMatcher__Output {
  'range'?: (_envoy_type_v3_DoubleRange__Output);
  'exact'?: (number | string);
}
