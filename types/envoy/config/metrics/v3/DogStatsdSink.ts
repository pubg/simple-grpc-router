// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { UInt64Value as _google_protobuf_UInt64Value, UInt64Value__Output as _google_protobuf_UInt64Value__Output } from '../../../../google/protobuf/UInt64Value';

export interface DogStatsdSink {
  'address'?: (_envoy_config_core_v3_Address | null);
  'prefix'?: (string);
  'max_bytes_per_datagram'?: (_google_protobuf_UInt64Value | null);
  'dog_statsd_specifier'?: "address";
}

export interface DogStatsdSink__Output {
  'address'?: (_envoy_config_core_v3_Address__Output);
  'prefix'?: (string);
  'max_bytes_per_datagram'?: (_google_protobuf_UInt64Value__Output);
}
