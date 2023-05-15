// Original file: .repos/protoc-gen-validate/validate/validate.proto

import type { FieldRules as _validate_FieldRules, FieldRules__Output as _validate_FieldRules__Output } from '../validate/FieldRules';
import type { Long } from '@grpc/proto-loader';

export interface RepeatedRules {
  'min_items'?: (number | string | Long);
  'max_items'?: (number | string | Long);
  'unique'?: (boolean);
  'items'?: (_validate_FieldRules | null);
  'ignore_empty'?: (boolean);
}

export interface RepeatedRules__Output {
  'min_items'?: (Long);
  'max_items'?: (Long);
  'unique'?: (boolean);
  'items'?: (_validate_FieldRules__Output);
  'ignore_empty'?: (boolean);
}
