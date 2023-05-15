// Original file: .repos/envoy/api/envoy/config/listener/v3/listener.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { FilterChain as _envoy_config_listener_v3_FilterChain, FilterChain__Output as _envoy_config_listener_v3_FilterChain__Output } from '../../../../envoy/config/listener/v3/FilterChain';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { ListenerFilter as _envoy_config_listener_v3_ListenerFilter, ListenerFilter__Output as _envoy_config_listener_v3_ListenerFilter__Output } from '../../../../envoy/config/listener/v3/ListenerFilter';
import type { SocketOption as _envoy_config_core_v3_SocketOption, SocketOption__Output as _envoy_config_core_v3_SocketOption__Output } from '../../../../envoy/config/core/v3/SocketOption';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { TrafficDirection as _envoy_config_core_v3_TrafficDirection, TrafficDirection__Output as _envoy_config_core_v3_TrafficDirection__Output } from '../../../../envoy/config/core/v3/TrafficDirection';
import type { UdpListenerConfig as _envoy_config_listener_v3_UdpListenerConfig, UdpListenerConfig__Output as _envoy_config_listener_v3_UdpListenerConfig__Output } from '../../../../envoy/config/listener/v3/UdpListenerConfig';
import type { ApiListener as _envoy_config_listener_v3_ApiListener, ApiListener__Output as _envoy_config_listener_v3_ApiListener__Output } from '../../../../envoy/config/listener/v3/ApiListener';
import type { AccessLog as _envoy_config_accesslog_v3_AccessLog, AccessLog__Output as _envoy_config_accesslog_v3_AccessLog__Output } from '../../../../envoy/config/accesslog/v3/AccessLog';
import type { Matcher as _xds_type_matcher_v3_Matcher, Matcher__Output as _xds_type_matcher_v3_Matcher__Output } from '../../../../xds/type/matcher/v3/Matcher';
import type { AdditionalAddress as _envoy_config_listener_v3_AdditionalAddress, AdditionalAddress__Output as _envoy_config_listener_v3_AdditionalAddress__Output } from '../../../../envoy/config/listener/v3/AdditionalAddress';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig {
  'exact_balance'?: (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance | null);
  'extend_balance'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'balance_type'?: "exact_balance"|"extend_balance";
}

export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig__Output {
  'exact_balance'?: (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance__Output);
  'extend_balance'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}

export interface _envoy_config_listener_v3_Listener_DeprecatedV1 {
  'bind_to_port'?: (_google_protobuf_BoolValue | null);
}

export interface _envoy_config_listener_v3_Listener_DeprecatedV1__Output {
  'bind_to_port'?: (_google_protobuf_BoolValue__Output);
}

// Original file: .repos/envoy/api/envoy/config/listener/v3/listener.proto

export const _envoy_config_listener_v3_Listener_DrainType = {
  DEFAULT: 0,
  MODIFY_ONLY: 1,
} as const;

export type _envoy_config_listener_v3_Listener_DrainType =
  | 'DEFAULT'
  | 0
  | 'MODIFY_ONLY'
  | 1

export type _envoy_config_listener_v3_Listener_DrainType__Output = typeof _envoy_config_listener_v3_Listener_DrainType[keyof typeof _envoy_config_listener_v3_Listener_DrainType]

export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance {
}

export interface _envoy_config_listener_v3_Listener_ConnectionBalanceConfig_ExactBalance__Output {
}

export interface _envoy_config_listener_v3_Listener_InternalListenerConfig {
}

export interface _envoy_config_listener_v3_Listener_InternalListenerConfig__Output {
}

export interface Listener {
  'name'?: (string);
  'address'?: (_envoy_config_core_v3_Address | null);
  'filter_chains'?: (_envoy_config_listener_v3_FilterChain)[];
  'use_original_dst'?: (_google_protobuf_BoolValue | null);
  'per_connection_buffer_limit_bytes'?: (_google_protobuf_UInt32Value | null);
  'metadata'?: (_envoy_config_core_v3_Metadata | null);
  'deprecated_v1'?: (_envoy_config_listener_v3_Listener_DeprecatedV1 | null);
  'drain_type'?: (_envoy_config_listener_v3_Listener_DrainType);
  'listener_filters'?: (_envoy_config_listener_v3_ListenerFilter)[];
  'transparent'?: (_google_protobuf_BoolValue | null);
  'freebind'?: (_google_protobuf_BoolValue | null);
  'tcp_fast_open_queue_length'?: (_google_protobuf_UInt32Value | null);
  'socket_options'?: (_envoy_config_core_v3_SocketOption)[];
  'listener_filters_timeout'?: (_google_protobuf_Duration | null);
  'traffic_direction'?: (_envoy_config_core_v3_TrafficDirection);
  'continue_on_listener_filters_timeout'?: (boolean);
  'udp_listener_config'?: (_envoy_config_listener_v3_UdpListenerConfig | null);
  'api_listener'?: (_envoy_config_listener_v3_ApiListener | null);
  'connection_balance_config'?: (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig | null);
  'reuse_port'?: (boolean);
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog)[];
  'tcp_backlog_size'?: (_google_protobuf_UInt32Value | null);
  'default_filter_chain'?: (_envoy_config_listener_v3_FilterChain | null);
  'bind_to_port'?: (_google_protobuf_BoolValue | null);
  'internal_listener'?: (_envoy_config_listener_v3_Listener_InternalListenerConfig | null);
  'stat_prefix'?: (string);
  'enable_reuse_port'?: (_google_protobuf_BoolValue | null);
  'enable_mptcp'?: (boolean);
  'ignore_global_conn_limit'?: (boolean);
  'filter_chain_matcher'?: (_xds_type_matcher_v3_Matcher | null);
  'additional_addresses'?: (_envoy_config_listener_v3_AdditionalAddress)[];
  'listener_specifier'?: "internal_listener";
}

export interface Listener__Output {
  'name'?: (string);
  'address'?: (_envoy_config_core_v3_Address__Output);
  'filter_chains'?: (_envoy_config_listener_v3_FilterChain__Output)[];
  'use_original_dst'?: (_google_protobuf_BoolValue__Output);
  'per_connection_buffer_limit_bytes'?: (_google_protobuf_UInt32Value__Output);
  'metadata'?: (_envoy_config_core_v3_Metadata__Output);
  'deprecated_v1'?: (_envoy_config_listener_v3_Listener_DeprecatedV1__Output);
  'drain_type'?: (_envoy_config_listener_v3_Listener_DrainType__Output);
  'listener_filters'?: (_envoy_config_listener_v3_ListenerFilter__Output)[];
  'transparent'?: (_google_protobuf_BoolValue__Output);
  'freebind'?: (_google_protobuf_BoolValue__Output);
  'tcp_fast_open_queue_length'?: (_google_protobuf_UInt32Value__Output);
  'socket_options'?: (_envoy_config_core_v3_SocketOption__Output)[];
  'listener_filters_timeout'?: (_google_protobuf_Duration__Output);
  'traffic_direction'?: (_envoy_config_core_v3_TrafficDirection__Output);
  'continue_on_listener_filters_timeout'?: (boolean);
  'udp_listener_config'?: (_envoy_config_listener_v3_UdpListenerConfig__Output);
  'api_listener'?: (_envoy_config_listener_v3_ApiListener__Output);
  'connection_balance_config'?: (_envoy_config_listener_v3_Listener_ConnectionBalanceConfig__Output);
  'reuse_port'?: (boolean);
  'access_log'?: (_envoy_config_accesslog_v3_AccessLog__Output)[];
  'tcp_backlog_size'?: (_google_protobuf_UInt32Value__Output);
  'default_filter_chain'?: (_envoy_config_listener_v3_FilterChain__Output);
  'bind_to_port'?: (_google_protobuf_BoolValue__Output);
  'internal_listener'?: (_envoy_config_listener_v3_Listener_InternalListenerConfig__Output);
  'stat_prefix'?: (string);
  'enable_reuse_port'?: (_google_protobuf_BoolValue__Output);
  'enable_mptcp'?: (boolean);
  'ignore_global_conn_limit'?: (boolean);
  'filter_chain_matcher'?: (_xds_type_matcher_v3_Matcher__Output);
  'additional_addresses'?: (_envoy_config_listener_v3_AdditionalAddress__Output)[];
}
