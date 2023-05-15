// Original file: .repos/envoy/api/envoy/config/cluster/v3/cluster.proto

import type { TcpKeepalive as _envoy_config_core_v3_TcpKeepalive, TcpKeepalive__Output as _envoy_config_core_v3_TcpKeepalive__Output } from '../../../../envoy/config/core/v3/TcpKeepalive';

export interface UpstreamConnectionOptions {
  'tcp_keepalive'?: (_envoy_config_core_v3_TcpKeepalive | null);
  'set_local_interface_name_on_upstream_connections'?: (boolean);
}

export interface UpstreamConnectionOptions__Output {
  'tcp_keepalive'?: (_envoy_config_core_v3_TcpKeepalive__Output);
  'set_local_interface_name_on_upstream_connections'?: (boolean);
}
