// Original file: .repos/envoy/api/envoy/config/overload/v3/overload.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { ResourceMonitor as _envoy_config_overload_v3_ResourceMonitor, ResourceMonitor__Output as _envoy_config_overload_v3_ResourceMonitor__Output } from '../../../../envoy/config/overload/v3/ResourceMonitor';
import type { OverloadAction as _envoy_config_overload_v3_OverloadAction, OverloadAction__Output as _envoy_config_overload_v3_OverloadAction__Output } from '../../../../envoy/config/overload/v3/OverloadAction';
import type { BufferFactoryConfig as _envoy_config_overload_v3_BufferFactoryConfig, BufferFactoryConfig__Output as _envoy_config_overload_v3_BufferFactoryConfig__Output } from '../../../../envoy/config/overload/v3/BufferFactoryConfig';
import type { LoadShedPoint as _envoy_config_overload_v3_LoadShedPoint, LoadShedPoint__Output as _envoy_config_overload_v3_LoadShedPoint__Output } from '../../../../envoy/config/overload/v3/LoadShedPoint';

export interface OverloadManager {
  'refresh_interval'?: (_google_protobuf_Duration | null);
  'resource_monitors'?: (_envoy_config_overload_v3_ResourceMonitor)[];
  'actions'?: (_envoy_config_overload_v3_OverloadAction)[];
  'buffer_factory_config'?: (_envoy_config_overload_v3_BufferFactoryConfig | null);
  'loadshed_points'?: (_envoy_config_overload_v3_LoadShedPoint)[];
}

export interface OverloadManager__Output {
  'refresh_interval'?: (_google_protobuf_Duration__Output);
  'resource_monitors'?: (_envoy_config_overload_v3_ResourceMonitor__Output)[];
  'actions'?: (_envoy_config_overload_v3_OverloadAction__Output)[];
  'buffer_factory_config'?: (_envoy_config_overload_v3_BufferFactoryConfig__Output);
  'loadshed_points'?: (_envoy_config_overload_v3_LoadShedPoint__Output)[];
}
