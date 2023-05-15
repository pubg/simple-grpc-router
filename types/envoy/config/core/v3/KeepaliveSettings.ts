// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { Percent as _envoy_type_v3_Percent, Percent__Output as _envoy_type_v3_Percent__Output } from '../../../../envoy/type/v3/Percent';

export interface KeepaliveSettings {
  'interval'?: (_google_protobuf_Duration | null);
  'timeout'?: (_google_protobuf_Duration | null);
  'interval_jitter'?: (_envoy_type_v3_Percent | null);
  'connection_idle_interval'?: (_google_protobuf_Duration | null);
}

export interface KeepaliveSettings__Output {
  'interval'?: (_google_protobuf_Duration__Output);
  'timeout'?: (_google_protobuf_Duration__Output);
  'interval_jitter'?: (_envoy_type_v3_Percent__Output);
  'connection_idle_interval'?: (_google_protobuf_Duration__Output);
}
