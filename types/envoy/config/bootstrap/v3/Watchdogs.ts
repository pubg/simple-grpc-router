// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

import type { Watchdog as _envoy_config_bootstrap_v3_Watchdog, Watchdog__Output as _envoy_config_bootstrap_v3_Watchdog__Output } from '../../../../envoy/config/bootstrap/v3/Watchdog';

export interface Watchdogs {
  'main_thread_watchdog'?: (_envoy_config_bootstrap_v3_Watchdog | null);
  'worker_watchdog'?: (_envoy_config_bootstrap_v3_Watchdog | null);
}

export interface Watchdogs__Output {
  'main_thread_watchdog'?: (_envoy_config_bootstrap_v3_Watchdog__Output);
  'worker_watchdog'?: (_envoy_config_bootstrap_v3_Watchdog__Output);
}
