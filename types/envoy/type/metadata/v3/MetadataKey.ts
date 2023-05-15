// Original file: .repos/envoy/api/envoy/type/metadata/v3/metadata.proto


export interface _envoy_type_metadata_v3_MetadataKey_PathSegment {
  'key'?: (string);
  'segment'?: "key";
}

export interface _envoy_type_metadata_v3_MetadataKey_PathSegment__Output {
  'key'?: (string);
}

export interface MetadataKey {
  'key'?: (string);
  'path'?: (_envoy_type_metadata_v3_MetadataKey_PathSegment)[];
}

export interface MetadataKey__Output {
  'key'?: (string);
  'path'?: (_envoy_type_metadata_v3_MetadataKey_PathSegment__Output)[];
}
