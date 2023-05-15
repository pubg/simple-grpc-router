// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { DataSource as _envoy_config_core_v3_DataSource, DataSource__Output as _envoy_config_core_v3_DataSource__Output } from '../../../../envoy/config/core/v3/DataSource';

export interface DirectResponseAction {
  'status'?: (number);
  'body'?: (_envoy_config_core_v3_DataSource | null);
}

export interface DirectResponseAction__Output {
  'status'?: (number);
  'body'?: (_envoy_config_core_v3_DataSource__Output);
}
