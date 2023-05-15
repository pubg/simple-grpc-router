// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto


export interface TagSpecifier {
  'tag_name'?: (string);
  'regex'?: (string);
  'fixed_value'?: (string);
  'tag_value'?: "regex"|"fixed_value";
}

export interface TagSpecifier__Output {
  'tag_name'?: (string);
  'regex'?: (string);
  'fixed_value'?: (string);
}
