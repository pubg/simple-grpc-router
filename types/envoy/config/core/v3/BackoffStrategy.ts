// Original file: .repos/envoy/api/envoy/config/core/v3/backoff.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';

export interface BackoffStrategy {
  'base_interval'?: (_google_protobuf_Duration | null);
  'max_interval'?: (_google_protobuf_Duration | null);
}

export interface BackoffStrategy__Output {
  'base_interval'?: (_google_protobuf_Duration__Output);
  'max_interval'?: (_google_protobuf_Duration__Output);
}
