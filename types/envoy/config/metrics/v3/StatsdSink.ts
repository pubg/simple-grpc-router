// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';

export interface StatsdSink {
  'address'?: (_envoy_config_core_v3_Address | null);
  'tcp_cluster_name'?: (string);
  'prefix'?: (string);
  'statsd_specifier'?: "address"|"tcp_cluster_name";
}

export interface StatsdSink__Output {
  'address'?: (_envoy_config_core_v3_Address__Output);
  'tcp_cluster_name'?: (string);
  'prefix'?: (string);
}
