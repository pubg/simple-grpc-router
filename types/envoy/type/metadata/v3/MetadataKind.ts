// Original file: .repos/envoy/api/envoy/type/metadata/v3/metadata.proto


export interface _envoy_type_metadata_v3_MetadataKind_Cluster {
}

export interface _envoy_type_metadata_v3_MetadataKind_Cluster__Output {
}

export interface _envoy_type_metadata_v3_MetadataKind_Host {
}

export interface _envoy_type_metadata_v3_MetadataKind_Host__Output {
}

export interface _envoy_type_metadata_v3_MetadataKind_Request {
}

export interface _envoy_type_metadata_v3_MetadataKind_Request__Output {
}

export interface _envoy_type_metadata_v3_MetadataKind_Route {
}

export interface _envoy_type_metadata_v3_MetadataKind_Route__Output {
}

export interface MetadataKind {
  'request'?: (_envoy_type_metadata_v3_MetadataKind_Request | null);
  'route'?: (_envoy_type_metadata_v3_MetadataKind_Route | null);
  'cluster'?: (_envoy_type_metadata_v3_MetadataKind_Cluster | null);
  'host'?: (_envoy_type_metadata_v3_MetadataKind_Host | null);
  'kind'?: "request"|"route"|"cluster"|"host";
}

export interface MetadataKind__Output {
  'request'?: (_envoy_type_metadata_v3_MetadataKind_Request__Output);
  'route'?: (_envoy_type_metadata_v3_MetadataKind_Route__Output);
  'cluster'?: (_envoy_type_metadata_v3_MetadataKind_Cluster__Output);
  'host'?: (_envoy_type_metadata_v3_MetadataKind_Host__Output);
}
