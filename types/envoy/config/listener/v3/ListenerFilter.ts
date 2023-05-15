// Original file: .repos/envoy/api/envoy/config/listener/v3/listener_components.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { ListenerFilterChainMatchPredicate as _envoy_config_listener_v3_ListenerFilterChainMatchPredicate, ListenerFilterChainMatchPredicate__Output as _envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output } from '../../../../envoy/config/listener/v3/ListenerFilterChainMatchPredicate';
import type { ExtensionConfigSource as _envoy_config_core_v3_ExtensionConfigSource, ExtensionConfigSource__Output as _envoy_config_core_v3_ExtensionConfigSource__Output } from '../../../../envoy/config/core/v3/ExtensionConfigSource';

export interface ListenerFilter {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'filter_disabled'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate | null);
  'config_discovery'?: (_envoy_config_core_v3_ExtensionConfigSource | null);
  'config_type'?: "typed_config"|"config_discovery";
}

export interface ListenerFilter__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
  'filter_disabled'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output);
  'config_discovery'?: (_envoy_config_core_v3_ExtensionConfigSource__Output);
}
