// Original file: .repos/envoy/api/envoy/config/endpoint/v3/endpoint_components.proto

import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../envoy/config/core/v3/ConfigSource';

export interface LedsClusterLocalityConfig {
  'leds_config'?: (_envoy_config_core_v3_ConfigSource | null);
  'leds_collection_name'?: (string);
}

export interface LedsClusterLocalityConfig__Output {
  'leds_config'?: (_envoy_config_core_v3_ConfigSource__Output);
  'leds_collection_name'?: (string);
}
