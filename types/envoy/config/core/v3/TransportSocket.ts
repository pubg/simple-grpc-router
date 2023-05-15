// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface TransportSocket {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface TransportSocket__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}
