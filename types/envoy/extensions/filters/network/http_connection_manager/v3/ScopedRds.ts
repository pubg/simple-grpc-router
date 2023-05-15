// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../../../envoy/config/core/v3/ConfigSource';

export interface ScopedRds {
  'scoped_rds_config_source'?: (_envoy_config_core_v3_ConfigSource | null);
  'srds_resources_locator'?: (string);
}

export interface ScopedRds__Output {
  'scoped_rds_config_source'?: (_envoy_config_core_v3_ConfigSource__Output);
  'srds_resources_locator'?: (string);
}
