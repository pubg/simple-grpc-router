// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto

import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../../google/protobuf/Any';

export interface PrivateKeyProvider {
  'provider_name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface PrivateKeyProvider__Output {
  'provider_name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}
