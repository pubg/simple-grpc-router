// Original file: null

import type { UninterpretedOption as _google_protobuf_UninterpretedOption, UninterpretedOption__Output as _google_protobuf_UninterpretedOption__Output } from '../../google/protobuf/UninterpretedOption';
import type { FieldRules as _validate_FieldRules, FieldRules__Output as _validate_FieldRules__Output } from '../../validate/FieldRules';
import type { FieldMigrateAnnotation as _udpa_annotations_FieldMigrateAnnotation, FieldMigrateAnnotation__Output as _udpa_annotations_FieldMigrateAnnotation__Output } from '../../udpa/annotations/FieldMigrateAnnotation';

// Original file: null

export const _google_protobuf_FieldOptions_CType = {
  STRING: 0,
  CORD: 1,
  STRING_PIECE: 2,
} as const;

export type _google_protobuf_FieldOptions_CType =
  | 'STRING'
  | 0
  | 'CORD'
  | 1
  | 'STRING_PIECE'
  | 2

export type _google_protobuf_FieldOptions_CType__Output = typeof _google_protobuf_FieldOptions_CType[keyof typeof _google_protobuf_FieldOptions_CType]

// Original file: null

export const _google_protobuf_FieldOptions_JSType = {
  JS_NORMAL: 0,
  JS_STRING: 1,
  JS_NUMBER: 2,
} as const;

export type _google_protobuf_FieldOptions_JSType =
  | 'JS_NORMAL'
  | 0
  | 'JS_STRING'
  | 1
  | 'JS_NUMBER'
  | 2

export type _google_protobuf_FieldOptions_JSType__Output = typeof _google_protobuf_FieldOptions_JSType[keyof typeof _google_protobuf_FieldOptions_JSType]

export interface FieldOptions {
  'ctype'?: (_google_protobuf_FieldOptions_CType);
  'packed'?: (boolean);
  'deprecated'?: (boolean);
  'lazy'?: (boolean);
  'jstype'?: (_google_protobuf_FieldOptions_JSType);
  'weak'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOption)[];
  '.validate.rules'?: (_validate_FieldRules | null);
  '.udpa.annotations.sensitive'?: (boolean);
  '.envoy.annotations.deprecated_at_minor_version'?: (string);
  '.udpa.annotations.field_migrate'?: (_udpa_annotations_FieldMigrateAnnotation | null);
  '.envoy.annotations.disallowed_by_default'?: (boolean);
}

export interface FieldOptions__Output {
  'ctype'?: (_google_protobuf_FieldOptions_CType__Output);
  'packed'?: (boolean);
  'deprecated'?: (boolean);
  'lazy'?: (boolean);
  'jstype'?: (_google_protobuf_FieldOptions_JSType__Output);
  'weak'?: (boolean);
  'uninterpretedOption'?: (_google_protobuf_UninterpretedOption__Output)[];
  '.validate.rules'?: (_validate_FieldRules__Output);
  '.udpa.annotations.sensitive'?: (boolean);
  '.envoy.annotations.deprecated_at_minor_version'?: (string);
  '.udpa.annotations.field_migrate'?: (_udpa_annotations_FieldMigrateAnnotation__Output);
  '.envoy.annotations.disallowed_by_default'?: (boolean);
}
