// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { BuildVersion as _envoy_config_core_v3_BuildVersion, BuildVersion__Output as _envoy_config_core_v3_BuildVersion__Output } from '../../../../envoy/config/core/v3/BuildVersion';

export interface Extension {
  'name'?: (string);
  'category'?: (string);
  'type_descriptor'?: (string);
  'version'?: (_envoy_config_core_v3_BuildVersion | null);
  'disabled'?: (boolean);
  'type_urls'?: (string)[];
}

export interface Extension__Output {
  'name'?: (string);
  'category'?: (string);
  'type_descriptor'?: (string);
  'version'?: (_envoy_config_core_v3_BuildVersion__Output);
  'disabled'?: (boolean);
  'type_urls'?: (string)[];
}
