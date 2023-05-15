// Original file: .repos/protoc-gen-validate/validate/validate.proto

import type { FieldRules as _validate_FieldRules, FieldRules__Output as _validate_FieldRules__Output } from '../validate/FieldRules';
import type { Long } from '@grpc/proto-loader';

export interface MapRules {
  'min_pairs'?: (number | string | Long);
  'max_pairs'?: (number | string | Long);
  'no_sparse'?: (boolean);
  'keys'?: (_validate_FieldRules | null);
  'values'?: (_validate_FieldRules | null);
  'ignore_empty'?: (boolean);
}

export interface MapRules__Output {
  'min_pairs'?: (Long);
  'max_pairs'?: (Long);
  'no_sparse'?: (boolean);
  'keys'?: (_validate_FieldRules__Output);
  'values'?: (_validate_FieldRules__Output);
  'ignore_empty'?: (boolean);
}
