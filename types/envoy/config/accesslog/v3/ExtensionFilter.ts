// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface ExtensionFilter {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface ExtensionFilter__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}
