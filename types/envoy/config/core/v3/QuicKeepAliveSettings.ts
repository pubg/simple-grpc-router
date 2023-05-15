// Original file: .repos/envoy/api/envoy/config/core/v3/protocol.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';

export interface QuicKeepAliveSettings {
  'max_interval'?: (_google_protobuf_Duration | null);
  'initial_interval'?: (_google_protobuf_Duration | null);
}

export interface QuicKeepAliveSettings__Output {
  'max_interval'?: (_google_protobuf_Duration__Output);
  'initial_interval'?: (_google_protobuf_Duration__Output);
}
