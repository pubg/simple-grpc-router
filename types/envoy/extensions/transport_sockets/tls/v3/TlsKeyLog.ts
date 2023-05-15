// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/tls.proto

import type { CidrRange as _envoy_config_core_v3_CidrRange, CidrRange__Output as _envoy_config_core_v3_CidrRange__Output } from '../../../../../envoy/config/core/v3/CidrRange';

export interface TlsKeyLog {
  'path'?: (string);
  'local_address_range'?: (_envoy_config_core_v3_CidrRange)[];
  'remote_address_range'?: (_envoy_config_core_v3_CidrRange)[];
}

export interface TlsKeyLog__Output {
  'path'?: (string);
  'local_address_range'?: (_envoy_config_core_v3_CidrRange__Output)[];
  'remote_address_range'?: (_envoy_config_core_v3_CidrRange__Output)[];
}
