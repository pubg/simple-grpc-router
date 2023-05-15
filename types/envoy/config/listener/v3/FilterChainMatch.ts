// Original file: .repos/envoy/api/envoy/config/listener/v3/listener_components.proto

import type { CidrRange as _envoy_config_core_v3_CidrRange, CidrRange__Output as _envoy_config_core_v3_CidrRange__Output } from '../../../../envoy/config/core/v3/CidrRange';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

// Original file: .repos/envoy/api/envoy/config/listener/v3/listener_components.proto

export const _envoy_config_listener_v3_FilterChainMatch_ConnectionSourceType = {
  ANY: 0,
  SAME_IP_OR_LOOPBACK: 1,
  EXTERNAL: 2,
} as const;

export type _envoy_config_listener_v3_FilterChainMatch_ConnectionSourceType =
  | 'ANY'
  | 0
  | 'SAME_IP_OR_LOOPBACK'
  | 1
  | 'EXTERNAL'
  | 2

export type _envoy_config_listener_v3_FilterChainMatch_ConnectionSourceType__Output = typeof _envoy_config_listener_v3_FilterChainMatch_ConnectionSourceType[keyof typeof _envoy_config_listener_v3_FilterChainMatch_ConnectionSourceType]

export interface FilterChainMatch {
  'prefix_ranges'?: (_envoy_config_core_v3_CidrRange)[];
  'address_suffix'?: (string);
  'suffix_len'?: (_google_protobuf_UInt32Value | null);
  'source_prefix_ranges'?: (_envoy_config_core_v3_CidrRange)[];
  'source_ports'?: (number)[];
  'destination_port'?: (_google_protobuf_UInt32Value | null);
  'transport_protocol'?: (string);
  'application_protocols'?: (string)[];
  'server_names'?: (string)[];
  'source_type'?: (_envoy_config_listener_v3_FilterChainMatch_ConnectionSourceType);
  'direct_source_prefix_ranges'?: (_envoy_config_core_v3_CidrRange)[];
}

export interface FilterChainMatch__Output {
  'prefix_ranges'?: (_envoy_config_core_v3_CidrRange__Output)[];
  'address_suffix'?: (string);
  'suffix_len'?: (_google_protobuf_UInt32Value__Output);
  'source_prefix_ranges'?: (_envoy_config_core_v3_CidrRange__Output)[];
  'source_ports'?: (number)[];
  'destination_port'?: (_google_protobuf_UInt32Value__Output);
  'transport_protocol'?: (string);
  'application_protocols'?: (string)[];
  'server_names'?: (string)[];
  'source_type'?: (_envoy_config_listener_v3_FilterChainMatch_ConnectionSourceType__Output);
  'direct_source_prefix_ranges'?: (_envoy_config_core_v3_CidrRange__Output)[];
}
