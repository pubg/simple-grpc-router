// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface StatsSink {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface StatsSink__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}
