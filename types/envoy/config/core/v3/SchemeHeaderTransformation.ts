// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto


export interface SchemeHeaderTransformation {
  'scheme_to_overwrite'?: (string);
  'transformation'?: "scheme_to_overwrite";
}

export interface SchemeHeaderTransformation__Output {
  'scheme_to_overwrite'?: (string);
}
