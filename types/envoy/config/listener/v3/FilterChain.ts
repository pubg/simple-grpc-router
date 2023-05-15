// Original file: .repos/envoy/api/envoy/config/listener/v3/listener_components.proto

import type { FilterChainMatch as _envoy_config_listener_v3_FilterChainMatch, FilterChainMatch__Output as _envoy_config_listener_v3_FilterChainMatch__Output } from '../../../../envoy/config/listener/v3/FilterChainMatch';
import type { Filter as _envoy_config_listener_v3_Filter, Filter__Output as _envoy_config_listener_v3_Filter__Output } from '../../../../envoy/config/listener/v3/Filter';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { TransportSocket as _envoy_config_core_v3_TransportSocket, TransportSocket__Output as _envoy_config_core_v3_TransportSocket__Output } from '../../../../envoy/config/core/v3/TransportSocket';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';

export interface _envoy_config_listener_v3_FilterChain_OnDemandConfiguration {
  'rebuild_timeout'?: (_google_protobuf_Duration | null);
}

export interface _envoy_config_listener_v3_FilterChain_OnDemandConfiguration__Output {
  'rebuild_timeout'?: (_google_protobuf_Duration__Output);
}

export interface FilterChain {
  'filter_chain_match'?: (_envoy_config_listener_v3_FilterChainMatch | null);
  'filters'?: (_envoy_config_listener_v3_Filter)[];
  'use_proxy_proto'?: (_google_protobuf_BoolValue | null);
  'metadata'?: (_envoy_config_core_v3_Metadata | null);
  'transport_socket'?: (_envoy_config_core_v3_TransportSocket | null);
  'name'?: (string);
  'on_demand_configuration'?: (_envoy_config_listener_v3_FilterChain_OnDemandConfiguration | null);
  'transport_socket_connect_timeout'?: (_google_protobuf_Duration | null);
}

export interface FilterChain__Output {
  'filter_chain_match'?: (_envoy_config_listener_v3_FilterChainMatch__Output);
  'filters'?: (_envoy_config_listener_v3_Filter__Output)[];
  'use_proxy_proto'?: (_google_protobuf_BoolValue__Output);
  'metadata'?: (_envoy_config_core_v3_Metadata__Output);
  'transport_socket'?: (_envoy_config_core_v3_TransportSocket__Output);
  'name'?: (string);
  'on_demand_configuration'?: (_envoy_config_listener_v3_FilterChain_OnDemandConfiguration__Output);
  'transport_socket_connect_timeout'?: (_google_protobuf_Duration__Output);
}
