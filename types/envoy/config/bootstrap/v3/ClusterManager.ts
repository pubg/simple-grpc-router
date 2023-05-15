// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

import type { BindConfig as _envoy_config_core_v3_BindConfig, BindConfig__Output as _envoy_config_core_v3_BindConfig__Output } from '../../../../envoy/config/core/v3/BindConfig';
import type { ApiConfigSource as _envoy_config_core_v3_ApiConfigSource, ApiConfigSource__Output as _envoy_config_core_v3_ApiConfigSource__Output } from '../../../../envoy/config/core/v3/ApiConfigSource';
import type { EventServiceConfig as _envoy_config_core_v3_EventServiceConfig, EventServiceConfig__Output as _envoy_config_core_v3_EventServiceConfig__Output } from '../../../../envoy/config/core/v3/EventServiceConfig';

export interface _envoy_config_bootstrap_v3_ClusterManager_OutlierDetection {
  'event_log_path'?: (string);
  'event_service'?: (_envoy_config_core_v3_EventServiceConfig | null);
}

export interface _envoy_config_bootstrap_v3_ClusterManager_OutlierDetection__Output {
  'event_log_path'?: (string);
  'event_service'?: (_envoy_config_core_v3_EventServiceConfig__Output);
}

export interface ClusterManager {
  'local_cluster_name'?: (string);
  'outlier_detection'?: (_envoy_config_bootstrap_v3_ClusterManager_OutlierDetection | null);
  'upstream_bind_config'?: (_envoy_config_core_v3_BindConfig | null);
  'load_stats_config'?: (_envoy_config_core_v3_ApiConfigSource | null);
}

export interface ClusterManager__Output {
  'local_cluster_name'?: (string);
  'outlier_detection'?: (_envoy_config_bootstrap_v3_ClusterManager_OutlierDetection__Output);
  'upstream_bind_config'?: (_envoy_config_core_v3_BindConfig__Output);
  'load_stats_config'?: (_envoy_config_core_v3_ApiConfigSource__Output);
}
