// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../../../google/protobuf/Any';
import type { ExtensionConfigSource as _envoy_config_core_v3_ExtensionConfigSource, ExtensionConfigSource__Output as _envoy_config_core_v3_ExtensionConfigSource__Output } from '../../../../../../envoy/config/core/v3/ExtensionConfigSource';

export interface HttpFilter {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_discovery'?: (_envoy_config_core_v3_ExtensionConfigSource | null);
  'is_optional'?: (boolean);
  'config_type'?: "typed_config"|"config_discovery";
}

export interface HttpFilter__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
  'config_discovery'?: (_envoy_config_core_v3_ExtensionConfigSource__Output);
  'is_optional'?: (boolean);
}
