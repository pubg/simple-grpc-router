// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { Percent as _envoy_type_v3_Percent, Percent__Output as _envoy_type_v3_Percent__Output } from '../../../../envoy/type/v3/Percent';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface _envoy_config_bootstrap_v3_Watchdog_WatchdogAction {
  'config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'event'?: (_envoy_config_bootstrap_v3_Watchdog_WatchdogAction_WatchdogEvent);
}

export interface _envoy_config_bootstrap_v3_Watchdog_WatchdogAction__Output {
  'config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'event'?: (_envoy_config_bootstrap_v3_Watchdog_WatchdogAction_WatchdogEvent__Output);
}

// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

export const _envoy_config_bootstrap_v3_Watchdog_WatchdogAction_WatchdogEvent = {
  UNKNOWN: 0,
  KILL: 1,
  MULTIKILL: 2,
  MEGAMISS: 3,
  MISS: 4,
} as const;

export type _envoy_config_bootstrap_v3_Watchdog_WatchdogAction_WatchdogEvent =
  | 'UNKNOWN'
  | 0
  | 'KILL'
  | 1
  | 'MULTIKILL'
  | 2
  | 'MEGAMISS'
  | 3
  | 'MISS'
  | 4

export type _envoy_config_bootstrap_v3_Watchdog_WatchdogAction_WatchdogEvent__Output = typeof _envoy_config_bootstrap_v3_Watchdog_WatchdogAction_WatchdogEvent[keyof typeof _envoy_config_bootstrap_v3_Watchdog_WatchdogAction_WatchdogEvent]

export interface Watchdog {
  'miss_timeout'?: (_google_protobuf_Duration | null);
  'megamiss_timeout'?: (_google_protobuf_Duration | null);
  'kill_timeout'?: (_google_protobuf_Duration | null);
  'multikill_timeout'?: (_google_protobuf_Duration | null);
  'multikill_threshold'?: (_envoy_type_v3_Percent | null);
  'max_kill_timeout_jitter'?: (_google_protobuf_Duration | null);
  'actions'?: (_envoy_config_bootstrap_v3_Watchdog_WatchdogAction)[];
}

export interface Watchdog__Output {
  'miss_timeout'?: (_google_protobuf_Duration__Output);
  'megamiss_timeout'?: (_google_protobuf_Duration__Output);
  'kill_timeout'?: (_google_protobuf_Duration__Output);
  'multikill_timeout'?: (_google_protobuf_Duration__Output);
  'multikill_threshold'?: (_envoy_type_v3_Percent__Output);
  'max_kill_timeout_jitter'?: (_google_protobuf_Duration__Output);
  'actions'?: (_envoy_config_bootstrap_v3_Watchdog_WatchdogAction__Output)[];
}
