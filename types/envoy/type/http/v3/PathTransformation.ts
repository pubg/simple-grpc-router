// Original file: .repos/envoy/api/envoy/type/http/v3/path_transformation.proto


export interface _envoy_type_http_v3_PathTransformation_Operation_MergeSlashes {
}

export interface _envoy_type_http_v3_PathTransformation_Operation_MergeSlashes__Output {
}

export interface _envoy_type_http_v3_PathTransformation_Operation_NormalizePathRFC3986 {
}

export interface _envoy_type_http_v3_PathTransformation_Operation_NormalizePathRFC3986__Output {
}

export interface _envoy_type_http_v3_PathTransformation_Operation {
  'normalize_path_rfc_3986'?: (_envoy_type_http_v3_PathTransformation_Operation_NormalizePathRFC3986 | null);
  'merge_slashes'?: (_envoy_type_http_v3_PathTransformation_Operation_MergeSlashes | null);
  'operation_specifier'?: "normalize_path_rfc_3986"|"merge_slashes";
}

export interface _envoy_type_http_v3_PathTransformation_Operation__Output {
  'normalize_path_rfc_3986'?: (_envoy_type_http_v3_PathTransformation_Operation_NormalizePathRFC3986__Output);
  'merge_slashes'?: (_envoy_type_http_v3_PathTransformation_Operation_MergeSlashes__Output);
}

export interface PathTransformation {
  'operations'?: (_envoy_type_http_v3_PathTransformation_Operation)[];
}

export interface PathTransformation__Output {
  'operations'?: (_envoy_type_http_v3_PathTransformation_Operation__Output)[];
}
