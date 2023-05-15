// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface _envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat {
  'proper_case_words'?: (_envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat_ProperCaseWords | null);
  'stateful_formatter'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'header_format'?: "proper_case_words"|"stateful_formatter";
}

export interface _envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat__Output {
  'proper_case_words'?: (_envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat_ProperCaseWords__Output);
  'stateful_formatter'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}

export interface _envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat_ProperCaseWords {
}

export interface _envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat_ProperCaseWords__Output {
}

export interface Http1ProtocolOptions {
  'allow_absolute_url'?: (_google_protobuf_BoolValue | null);
  'accept_http_10'?: (boolean);
  'default_host_for_http_10'?: (string);
  'header_key_format'?: (_envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat | null);
  'enable_trailers'?: (boolean);
  'allow_chunked_length'?: (boolean);
  'override_stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue | null);
  'send_fully_qualified_url'?: (boolean);
  'use_balsa_parser'?: (_google_protobuf_BoolValue | null);
  'allow_custom_methods'?: (boolean);
}

export interface Http1ProtocolOptions__Output {
  'allow_absolute_url'?: (_google_protobuf_BoolValue__Output);
  'accept_http_10'?: (boolean);
  'default_host_for_http_10'?: (string);
  'header_key_format'?: (_envoy_config_core_v3_Http1ProtocolOptions_HeaderKeyFormat__Output);
  'enable_trailers'?: (boolean);
  'allow_chunked_length'?: (boolean);
  'override_stream_error_on_invalid_http_message'?: (_google_protobuf_BoolValue__Output);
  'send_fully_qualified_url'?: (boolean);
  'use_balsa_parser'?: (_google_protobuf_BoolValue__Output);
  'allow_custom_methods'?: (boolean);
}
