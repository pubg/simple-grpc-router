// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/secret.proto

import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../../envoy/config/core/v3/ConfigSource';

export interface SdsSecretConfig {
  'name'?: (string);
  'sds_config'?: (_envoy_config_core_v3_ConfigSource | null);
}

export interface SdsSecretConfig__Output {
  'name'?: (string);
  'sds_config'?: (_envoy_config_core_v3_ConfigSource__Output);
}
