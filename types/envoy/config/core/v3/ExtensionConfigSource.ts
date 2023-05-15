// Original file: .repos/envoy/api/envoy/config/core/v3/config_source.proto

import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../envoy/config/core/v3/ConfigSource';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface ExtensionConfigSource {
  'config_source'?: (_envoy_config_core_v3_ConfigSource | null);
  'default_config'?: (_google_protobuf_Any | null);
  'apply_default_config_without_warming'?: (boolean);
  'type_urls'?: (string)[];
}

export interface ExtensionConfigSource__Output {
  'config_source'?: (_envoy_config_core_v3_ConfigSource__Output);
  'default_config'?: (_google_protobuf_Any__Output);
  'apply_default_config_without_warming'?: (boolean);
  'type_urls'?: (string)[];
}
