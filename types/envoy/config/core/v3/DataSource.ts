// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto


export interface DataSource {
  'filename'?: (string);
  'inline_bytes'?: (Buffer | Uint8Array | string);
  'inline_string'?: (string);
  'environment_variable'?: (string);
  'specifier'?: "filename"|"inline_bytes"|"inline_string"|"environment_variable";
}

export interface DataSource__Output {
  'filename'?: (string);
  'inline_bytes'?: (Buffer);
  'inline_string'?: (string);
  'environment_variable'?: (string);
}
