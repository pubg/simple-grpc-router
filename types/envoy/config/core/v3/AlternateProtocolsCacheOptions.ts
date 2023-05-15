// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface _envoy_config_core_v3_AlternateProtocolsCacheOptions_AlternateProtocolsCacheEntry {
  'hostname'?: (string);
  'port'?: (number);
}

export interface _envoy_config_core_v3_AlternateProtocolsCacheOptions_AlternateProtocolsCacheEntry__Output {
  'hostname'?: (string);
  'port'?: (number);
}

export interface AlternateProtocolsCacheOptions {
  'name'?: (string);
  'max_entries'?: (_google_protobuf_UInt32Value | null);
  'key_value_store_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'prepopulated_entries'?: (_envoy_config_core_v3_AlternateProtocolsCacheOptions_AlternateProtocolsCacheEntry)[];
  'canonical_suffixes'?: (string)[];
}

export interface AlternateProtocolsCacheOptions__Output {
  'name'?: (string);
  'max_entries'?: (_google_protobuf_UInt32Value__Output);
  'key_value_store_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'prepopulated_entries'?: (_envoy_config_core_v3_AlternateProtocolsCacheOptions_AlternateProtocolsCacheEntry__Output)[];
  'canonical_suffixes'?: (string)[];
}
