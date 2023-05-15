// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { HttpUri as _envoy_config_core_v3_HttpUri, HttpUri__Output as _envoy_config_core_v3_HttpUri__Output } from '../../../../envoy/config/core/v3/HttpUri';
import type { RetryPolicy as _envoy_config_core_v3_RetryPolicy, RetryPolicy__Output as _envoy_config_core_v3_RetryPolicy__Output } from '../../../../envoy/config/core/v3/RetryPolicy';

export interface RemoteDataSource {
  'http_uri'?: (_envoy_config_core_v3_HttpUri | null);
  'sha256'?: (string);
  'retry_policy'?: (_envoy_config_core_v3_RetryPolicy | null);
}

export interface RemoteDataSource__Output {
  'http_uri'?: (_envoy_config_core_v3_HttpUri__Output);
  'sha256'?: (string);
  'retry_policy'?: (_envoy_config_core_v3_RetryPolicy__Output);
}
