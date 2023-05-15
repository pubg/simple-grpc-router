// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../../../envoy/config/core/v3/ConfigSource';

export interface Rds {
  'config_source'?: (_envoy_config_core_v3_ConfigSource | null);
  'route_config_name'?: (string);
}

export interface Rds__Output {
  'config_source'?: (_envoy_config_core_v3_ConfigSource__Output);
  'route_config_name'?: (string);
}
