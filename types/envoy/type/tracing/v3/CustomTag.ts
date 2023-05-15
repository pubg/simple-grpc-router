// Original file: .repos/envoy/api/envoy/type/tracing/v3/custom_tag.proto

import type { MetadataKind as _envoy_type_metadata_v3_MetadataKind, MetadataKind__Output as _envoy_type_metadata_v3_MetadataKind__Output } from '../../../../envoy/type/metadata/v3/MetadataKind';
import type { MetadataKey as _envoy_type_metadata_v3_MetadataKey, MetadataKey__Output as _envoy_type_metadata_v3_MetadataKey__Output } from '../../../../envoy/type/metadata/v3/MetadataKey';

export interface _envoy_type_tracing_v3_CustomTag_Environment {
  'name'?: (string);
  'default_value'?: (string);
}

export interface _envoy_type_tracing_v3_CustomTag_Environment__Output {
  'name'?: (string);
  'default_value'?: (string);
}

export interface _envoy_type_tracing_v3_CustomTag_Header {
  'name'?: (string);
  'default_value'?: (string);
}

export interface _envoy_type_tracing_v3_CustomTag_Header__Output {
  'name'?: (string);
  'default_value'?: (string);
}

export interface _envoy_type_tracing_v3_CustomTag_Literal {
  'value'?: (string);
}

export interface _envoy_type_tracing_v3_CustomTag_Literal__Output {
  'value'?: (string);
}

export interface _envoy_type_tracing_v3_CustomTag_Metadata {
  'kind'?: (_envoy_type_metadata_v3_MetadataKind | null);
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey | null);
  'default_value'?: (string);
}

export interface _envoy_type_tracing_v3_CustomTag_Metadata__Output {
  'kind'?: (_envoy_type_metadata_v3_MetadataKind__Output);
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey__Output);
  'default_value'?: (string);
}

export interface CustomTag {
  'tag'?: (string);
  'literal'?: (_envoy_type_tracing_v3_CustomTag_Literal | null);
  'environment'?: (_envoy_type_tracing_v3_CustomTag_Environment | null);
  'request_header'?: (_envoy_type_tracing_v3_CustomTag_Header | null);
  'metadata'?: (_envoy_type_tracing_v3_CustomTag_Metadata | null);
  'type'?: "literal"|"environment"|"request_header"|"metadata";
}

export interface CustomTag__Output {
  'tag'?: (string);
  'literal'?: (_envoy_type_tracing_v3_CustomTag_Literal__Output);
  'environment'?: (_envoy_type_tracing_v3_CustomTag_Environment__Output);
  'request_header'?: (_envoy_type_tracing_v3_CustomTag_Header__Output);
  'metadata'?: (_envoy_type_tracing_v3_CustomTag_Metadata__Output);
}
