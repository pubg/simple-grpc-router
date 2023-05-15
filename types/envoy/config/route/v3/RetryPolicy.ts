// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { HeaderMatcher as _envoy_config_route_v3_HeaderMatcher, HeaderMatcher__Output as _envoy_config_route_v3_HeaderMatcher__Output } from '../../../../envoy/config/route/v3/HeaderMatcher';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { Long } from '@grpc/proto-loader';

export interface _envoy_config_route_v3_RetryPolicy_RateLimitedRetryBackOff {
  'reset_headers'?: (_envoy_config_route_v3_RetryPolicy_ResetHeader)[];
  'max_interval'?: (_google_protobuf_Duration | null);
}

export interface _envoy_config_route_v3_RetryPolicy_RateLimitedRetryBackOff__Output {
  'reset_headers'?: (_envoy_config_route_v3_RetryPolicy_ResetHeader__Output)[];
  'max_interval'?: (_google_protobuf_Duration__Output);
}

export interface _envoy_config_route_v3_RetryPolicy_ResetHeader {
  'name'?: (string);
  'format'?: (_envoy_config_route_v3_RetryPolicy_ResetHeaderFormat);
}

export interface _envoy_config_route_v3_RetryPolicy_ResetHeader__Output {
  'name'?: (string);
  'format'?: (_envoy_config_route_v3_RetryPolicy_ResetHeaderFormat__Output);
}

// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

export const _envoy_config_route_v3_RetryPolicy_ResetHeaderFormat = {
  SECONDS: 0,
  UNIX_TIMESTAMP: 1,
} as const;

export type _envoy_config_route_v3_RetryPolicy_ResetHeaderFormat =
  | 'SECONDS'
  | 0
  | 'UNIX_TIMESTAMP'
  | 1

export type _envoy_config_route_v3_RetryPolicy_ResetHeaderFormat__Output = typeof _envoy_config_route_v3_RetryPolicy_ResetHeaderFormat[keyof typeof _envoy_config_route_v3_RetryPolicy_ResetHeaderFormat]

export interface _envoy_config_route_v3_RetryPolicy_RetryBackOff {
  'base_interval'?: (_google_protobuf_Duration | null);
  'max_interval'?: (_google_protobuf_Duration | null);
}

export interface _envoy_config_route_v3_RetryPolicy_RetryBackOff__Output {
  'base_interval'?: (_google_protobuf_Duration__Output);
  'max_interval'?: (_google_protobuf_Duration__Output);
}

export interface _envoy_config_route_v3_RetryPolicy_RetryHostPredicate {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface _envoy_config_route_v3_RetryPolicy_RetryHostPredicate__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}

export interface _envoy_config_route_v3_RetryPolicy_RetryPriority {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface _envoy_config_route_v3_RetryPolicy_RetryPriority__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}

export interface RetryPolicy {
  'retry_on'?: (string);
  'num_retries'?: (_google_protobuf_UInt32Value | null);
  'per_try_timeout'?: (_google_protobuf_Duration | null);
  'retry_priority'?: (_envoy_config_route_v3_RetryPolicy_RetryPriority | null);
  'retry_host_predicate'?: (_envoy_config_route_v3_RetryPolicy_RetryHostPredicate)[];
  'host_selection_retry_max_attempts'?: (number | string | Long);
  'retriable_status_codes'?: (number)[];
  'retry_back_off'?: (_envoy_config_route_v3_RetryPolicy_RetryBackOff | null);
  'retriable_headers'?: (_envoy_config_route_v3_HeaderMatcher)[];
  'retriable_request_headers'?: (_envoy_config_route_v3_HeaderMatcher)[];
  'rate_limited_retry_back_off'?: (_envoy_config_route_v3_RetryPolicy_RateLimitedRetryBackOff | null);
  'retry_options_predicates'?: (_envoy_config_core_v3_TypedExtensionConfig)[];
  'per_try_idle_timeout'?: (_google_protobuf_Duration | null);
}

export interface RetryPolicy__Output {
  'retry_on'?: (string);
  'num_retries'?: (_google_protobuf_UInt32Value__Output);
  'per_try_timeout'?: (_google_protobuf_Duration__Output);
  'retry_priority'?: (_envoy_config_route_v3_RetryPolicy_RetryPriority__Output);
  'retry_host_predicate'?: (_envoy_config_route_v3_RetryPolicy_RetryHostPredicate__Output)[];
  'host_selection_retry_max_attempts'?: (Long);
  'retriable_status_codes'?: (number)[];
  'retry_back_off'?: (_envoy_config_route_v3_RetryPolicy_RetryBackOff__Output);
  'retriable_headers'?: (_envoy_config_route_v3_HeaderMatcher__Output)[];
  'retriable_request_headers'?: (_envoy_config_route_v3_HeaderMatcher__Output)[];
  'rate_limited_retry_back_off'?: (_envoy_config_route_v3_RetryPolicy_RateLimitedRetryBackOff__Output);
  'retry_options_predicates'?: (_envoy_config_core_v3_TypedExtensionConfig__Output)[];
  'per_try_idle_timeout'?: (_google_protobuf_Duration__Output);
}
