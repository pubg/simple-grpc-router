// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { HeaderMatcher as _envoy_config_route_v3_HeaderMatcher, HeaderMatcher__Output as _envoy_config_route_v3_HeaderMatcher__Output } from '../../../../envoy/config/route/v3/HeaderMatcher';
import type { MetadataKey as _envoy_type_metadata_v3_MetadataKey, MetadataKey__Output as _envoy_type_metadata_v3_MetadataKey__Output } from '../../../../envoy/type/metadata/v3/MetadataKey';
import type { QueryParameterMatcher as _envoy_config_route_v3_QueryParameterMatcher, QueryParameterMatcher__Output as _envoy_config_route_v3_QueryParameterMatcher__Output } from '../../../../envoy/config/route/v3/QueryParameterMatcher';

export interface _envoy_config_route_v3_RateLimit_Action {
  'source_cluster'?: (_envoy_config_route_v3_RateLimit_Action_SourceCluster | null);
  'destination_cluster'?: (_envoy_config_route_v3_RateLimit_Action_DestinationCluster | null);
  'request_headers'?: (_envoy_config_route_v3_RateLimit_Action_RequestHeaders | null);
  'remote_address'?: (_envoy_config_route_v3_RateLimit_Action_RemoteAddress | null);
  'generic_key'?: (_envoy_config_route_v3_RateLimit_Action_GenericKey | null);
  'header_value_match'?: (_envoy_config_route_v3_RateLimit_Action_HeaderValueMatch | null);
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Action_DynamicMetaData | null);
  'metadata'?: (_envoy_config_route_v3_RateLimit_Action_MetaData | null);
  'extension'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'masked_remote_address'?: (_envoy_config_route_v3_RateLimit_Action_MaskedRemoteAddress | null);
  'query_parameter_value_match'?: (_envoy_config_route_v3_RateLimit_Action_QueryParameterValueMatch | null);
  'action_specifier'?: "source_cluster"|"destination_cluster"|"request_headers"|"remote_address"|"generic_key"|"header_value_match"|"dynamic_metadata"|"metadata"|"extension"|"masked_remote_address"|"query_parameter_value_match";
}

export interface _envoy_config_route_v3_RateLimit_Action__Output {
  'source_cluster'?: (_envoy_config_route_v3_RateLimit_Action_SourceCluster__Output);
  'destination_cluster'?: (_envoy_config_route_v3_RateLimit_Action_DestinationCluster__Output);
  'request_headers'?: (_envoy_config_route_v3_RateLimit_Action_RequestHeaders__Output);
  'remote_address'?: (_envoy_config_route_v3_RateLimit_Action_RemoteAddress__Output);
  'generic_key'?: (_envoy_config_route_v3_RateLimit_Action_GenericKey__Output);
  'header_value_match'?: (_envoy_config_route_v3_RateLimit_Action_HeaderValueMatch__Output);
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Action_DynamicMetaData__Output);
  'metadata'?: (_envoy_config_route_v3_RateLimit_Action_MetaData__Output);
  'extension'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'masked_remote_address'?: (_envoy_config_route_v3_RateLimit_Action_MaskedRemoteAddress__Output);
  'query_parameter_value_match'?: (_envoy_config_route_v3_RateLimit_Action_QueryParameterValueMatch__Output);
}

export interface _envoy_config_route_v3_RateLimit_Action_DestinationCluster {
}

export interface _envoy_config_route_v3_RateLimit_Action_DestinationCluster__Output {
}

export interface _envoy_config_route_v3_RateLimit_Action_DynamicMetaData {
  'descriptor_key'?: (string);
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey | null);
  'default_value'?: (string);
}

export interface _envoy_config_route_v3_RateLimit_Action_DynamicMetaData__Output {
  'descriptor_key'?: (string);
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey__Output);
  'default_value'?: (string);
}

export interface _envoy_config_route_v3_RateLimit_Override_DynamicMetadata {
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey | null);
}

export interface _envoy_config_route_v3_RateLimit_Override_DynamicMetadata__Output {
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey__Output);
}

export interface _envoy_config_route_v3_RateLimit_Action_GenericKey {
  'descriptor_value'?: (string);
  'descriptor_key'?: (string);
}

export interface _envoy_config_route_v3_RateLimit_Action_GenericKey__Output {
  'descriptor_value'?: (string);
  'descriptor_key'?: (string);
}

export interface _envoy_config_route_v3_RateLimit_Action_HeaderValueMatch {
  'descriptor_key'?: (string);
  'descriptor_value'?: (string);
  'expect_match'?: (_google_protobuf_BoolValue | null);
  'headers'?: (_envoy_config_route_v3_HeaderMatcher)[];
}

export interface _envoy_config_route_v3_RateLimit_Action_HeaderValueMatch__Output {
  'descriptor_key'?: (string);
  'descriptor_value'?: (string);
  'expect_match'?: (_google_protobuf_BoolValue__Output);
  'headers'?: (_envoy_config_route_v3_HeaderMatcher__Output)[];
}

export interface _envoy_config_route_v3_RateLimit_Action_MaskedRemoteAddress {
  'v4_prefix_mask_len'?: (_google_protobuf_UInt32Value | null);
  'v6_prefix_mask_len'?: (_google_protobuf_UInt32Value | null);
}

export interface _envoy_config_route_v3_RateLimit_Action_MaskedRemoteAddress__Output {
  'v4_prefix_mask_len'?: (_google_protobuf_UInt32Value__Output);
  'v6_prefix_mask_len'?: (_google_protobuf_UInt32Value__Output);
}

export interface _envoy_config_route_v3_RateLimit_Action_MetaData {
  'descriptor_key'?: (string);
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey | null);
  'default_value'?: (string);
  'source'?: (_envoy_config_route_v3_RateLimit_Action_MetaData_Source);
  'skip_if_absent'?: (boolean);
}

export interface _envoy_config_route_v3_RateLimit_Action_MetaData__Output {
  'descriptor_key'?: (string);
  'metadata_key'?: (_envoy_type_metadata_v3_MetadataKey__Output);
  'default_value'?: (string);
  'source'?: (_envoy_config_route_v3_RateLimit_Action_MetaData_Source__Output);
  'skip_if_absent'?: (boolean);
}

export interface _envoy_config_route_v3_RateLimit_Override {
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Override_DynamicMetadata | null);
  'override_specifier'?: "dynamic_metadata";
}

export interface _envoy_config_route_v3_RateLimit_Override__Output {
  'dynamic_metadata'?: (_envoy_config_route_v3_RateLimit_Override_DynamicMetadata__Output);
}

export interface _envoy_config_route_v3_RateLimit_Action_QueryParameterValueMatch {
  'descriptor_key'?: (string);
  'descriptor_value'?: (string);
  'expect_match'?: (_google_protobuf_BoolValue | null);
  'query_parameters'?: (_envoy_config_route_v3_QueryParameterMatcher)[];
}

export interface _envoy_config_route_v3_RateLimit_Action_QueryParameterValueMatch__Output {
  'descriptor_key'?: (string);
  'descriptor_value'?: (string);
  'expect_match'?: (_google_protobuf_BoolValue__Output);
  'query_parameters'?: (_envoy_config_route_v3_QueryParameterMatcher__Output)[];
}

export interface _envoy_config_route_v3_RateLimit_Action_RemoteAddress {
}

export interface _envoy_config_route_v3_RateLimit_Action_RemoteAddress__Output {
}

export interface _envoy_config_route_v3_RateLimit_Action_RequestHeaders {
  'header_name'?: (string);
  'descriptor_key'?: (string);
  'skip_if_absent'?: (boolean);
}

export interface _envoy_config_route_v3_RateLimit_Action_RequestHeaders__Output {
  'header_name'?: (string);
  'descriptor_key'?: (string);
  'skip_if_absent'?: (boolean);
}

// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

export const _envoy_config_route_v3_RateLimit_Action_MetaData_Source = {
  DYNAMIC: 0,
  ROUTE_ENTRY: 1,
} as const;

export type _envoy_config_route_v3_RateLimit_Action_MetaData_Source =
  | 'DYNAMIC'
  | 0
  | 'ROUTE_ENTRY'
  | 1

export type _envoy_config_route_v3_RateLimit_Action_MetaData_Source__Output = typeof _envoy_config_route_v3_RateLimit_Action_MetaData_Source[keyof typeof _envoy_config_route_v3_RateLimit_Action_MetaData_Source]

export interface _envoy_config_route_v3_RateLimit_Action_SourceCluster {
}

export interface _envoy_config_route_v3_RateLimit_Action_SourceCluster__Output {
}

export interface RateLimit {
  'stage'?: (_google_protobuf_UInt32Value | null);
  'disable_key'?: (string);
  'actions'?: (_envoy_config_route_v3_RateLimit_Action)[];
  'limit'?: (_envoy_config_route_v3_RateLimit_Override | null);
}

export interface RateLimit__Output {
  'stage'?: (_google_protobuf_UInt32Value__Output);
  'disable_key'?: (string);
  'actions'?: (_envoy_config_route_v3_RateLimit_Action__Output)[];
  'limit'?: (_envoy_config_route_v3_RateLimit_Override__Output);
}
