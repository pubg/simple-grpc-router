// Original file: .repos/envoy/api/envoy/config/core/v3/config_source.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { GrpcService as _envoy_config_core_v3_GrpcService, GrpcService__Output as _envoy_config_core_v3_GrpcService__Output } from '../../../../envoy/config/core/v3/GrpcService';
import type { RateLimitSettings as _envoy_config_core_v3_RateLimitSettings, RateLimitSettings__Output as _envoy_config_core_v3_RateLimitSettings__Output } from '../../../../envoy/config/core/v3/RateLimitSettings';
import type { ApiVersion as _envoy_config_core_v3_ApiVersion, ApiVersion__Output as _envoy_config_core_v3_ApiVersion__Output } from '../../../../envoy/config/core/v3/ApiVersion';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

// Original file: .repos/envoy/api/envoy/config/core/v3/config_source.proto

export const _envoy_config_core_v3_ApiConfigSource_ApiType = {
  DEPRECATED_AND_UNAVAILABLE_DO_NOT_USE: 0,
  REST: 1,
  GRPC: 2,
  DELTA_GRPC: 3,
  AGGREGATED_GRPC: 5,
  AGGREGATED_DELTA_GRPC: 6,
} as const;

export type _envoy_config_core_v3_ApiConfigSource_ApiType =
  | 'DEPRECATED_AND_UNAVAILABLE_DO_NOT_USE'
  | 0
  | 'REST'
  | 1
  | 'GRPC'
  | 2
  | 'DELTA_GRPC'
  | 3
  | 'AGGREGATED_GRPC'
  | 5
  | 'AGGREGATED_DELTA_GRPC'
  | 6

export type _envoy_config_core_v3_ApiConfigSource_ApiType__Output = typeof _envoy_config_core_v3_ApiConfigSource_ApiType[keyof typeof _envoy_config_core_v3_ApiConfigSource_ApiType]

export interface ApiConfigSource {
  'api_type'?: (_envoy_config_core_v3_ApiConfigSource_ApiType);
  'cluster_names'?: (string)[];
  'refresh_delay'?: (_google_protobuf_Duration | null);
  'grpc_services'?: (_envoy_config_core_v3_GrpcService)[];
  'request_timeout'?: (_google_protobuf_Duration | null);
  'rate_limit_settings'?: (_envoy_config_core_v3_RateLimitSettings | null);
  'set_node_on_first_message_only'?: (boolean);
  'transport_api_version'?: (_envoy_config_core_v3_ApiVersion);
  'config_validators'?: (_envoy_config_core_v3_TypedExtensionConfig)[];
}

export interface ApiConfigSource__Output {
  'api_type'?: (_envoy_config_core_v3_ApiConfigSource_ApiType__Output);
  'cluster_names'?: (string)[];
  'refresh_delay'?: (_google_protobuf_Duration__Output);
  'grpc_services'?: (_envoy_config_core_v3_GrpcService__Output)[];
  'request_timeout'?: (_google_protobuf_Duration__Output);
  'rate_limit_settings'?: (_envoy_config_core_v3_RateLimitSettings__Output);
  'set_node_on_first_message_only'?: (boolean);
  'transport_api_version'?: (_envoy_config_core_v3_ApiVersion__Output);
  'config_validators'?: (_envoy_config_core_v3_TypedExtensionConfig__Output)[];
}
