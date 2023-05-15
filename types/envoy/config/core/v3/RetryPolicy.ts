// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { BackoffStrategy as _envoy_config_core_v3_BackoffStrategy, BackoffStrategy__Output as _envoy_config_core_v3_BackoffStrategy__Output } from '../../../../envoy/config/core/v3/BackoffStrategy';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

export interface RetryPolicy {
  'retry_back_off'?: (_envoy_config_core_v3_BackoffStrategy | null);
  'num_retries'?: (_google_protobuf_UInt32Value | null);
}

export interface RetryPolicy__Output {
  'retry_back_off'?: (_envoy_config_core_v3_BackoffStrategy__Output);
  'num_retries'?: (_google_protobuf_UInt32Value__Output);
}
