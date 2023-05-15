// Original file: .repos/envoy/api/envoy/config/core/v3/substitution_format_string.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';
import type { DataSource as _envoy_config_core_v3_DataSource, DataSource__Output as _envoy_config_core_v3_DataSource__Output } from '../../../../envoy/config/core/v3/DataSource';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface SubstitutionFormatString {
  'text_format'?: (string);
  'json_format'?: (_google_protobuf_Struct | null);
  'omit_empty_values'?: (boolean);
  'content_type'?: (string);
  'text_format_source'?: (_envoy_config_core_v3_DataSource | null);
  'formatters'?: (_envoy_config_core_v3_TypedExtensionConfig)[];
  'format'?: "text_format"|"json_format"|"text_format_source";
}

export interface SubstitutionFormatString__Output {
  'text_format'?: (string);
  'json_format'?: (_google_protobuf_Struct__Output);
  'omit_empty_values'?: (boolean);
  'content_type'?: (string);
  'text_format_source'?: (_envoy_config_core_v3_DataSource__Output);
  'formatters'?: (_envoy_config_core_v3_TypedExtensionConfig__Output)[];
}
