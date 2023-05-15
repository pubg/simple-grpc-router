// Original file: .repos/protoc-gen-validate/validate/validate.proto


export interface DoubleRules {
  'const'?: (number | string);
  'lt'?: (number | string);
  'lte'?: (number | string);
  'gt'?: (number | string);
  'gte'?: (number | string);
  'in'?: (number | string)[];
  'not_in'?: (number | string)[];
  'ignore_empty'?: (boolean);
}

export interface DoubleRules__Output {
  'const'?: (number | string);
  'lt'?: (number | string);
  'lte'?: (number | string);
  'gt'?: (number | string);
  'gte'?: (number | string);
  'in'?: (number | string)[];
  'not_in'?: (number | string)[];
  'ignore_empty'?: (boolean);
}
