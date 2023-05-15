// Original file: .repos/envoy/api/envoy/config/core/v3/config_source.proto

import type { WatchedDirectory as _envoy_config_core_v3_WatchedDirectory, WatchedDirectory__Output as _envoy_config_core_v3_WatchedDirectory__Output } from '../../../../envoy/config/core/v3/WatchedDirectory';

export interface PathConfigSource {
  'path'?: (string);
  'watched_directory'?: (_envoy_config_core_v3_WatchedDirectory | null);
}

export interface PathConfigSource__Output {
  'path'?: (string);
  'watched_directory'?: (_envoy_config_core_v3_WatchedDirectory__Output);
}
