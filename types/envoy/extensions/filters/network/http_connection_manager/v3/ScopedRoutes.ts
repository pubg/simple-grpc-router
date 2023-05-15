// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../../../envoy/config/core/v3/ConfigSource';
import type { ScopedRouteConfigurationsList as _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRouteConfigurationsList, ScopedRouteConfigurationsList__Output as _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRouteConfigurationsList__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/ScopedRouteConfigurationsList';
import type { ScopedRds as _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRds, ScopedRds__Output as _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRds__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/ScopedRds';

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder {
  'header_value_extractor'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor | null);
  'type'?: "header_value_extractor";
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder__Output {
  'header_value_extractor'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor__Output);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor {
  'name'?: (string);
  'element_separator'?: (string);
  'index'?: (number);
  'element'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor_KvElement | null);
  'extract_type'?: "index"|"element";
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor__Output {
  'name'?: (string);
  'element_separator'?: (string);
  'index'?: (number);
  'element'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor_KvElement__Output);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor_KvElement {
  'separator'?: (string);
  'key'?: (string);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder_HeaderValueExtractor_KvElement__Output {
  'separator'?: (string);
  'key'?: (string);
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder {
  'fragments'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder)[];
}

export interface _envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder__Output {
  'fragments'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder_FragmentBuilder__Output)[];
}

export interface ScopedRoutes {
  'name'?: (string);
  'scope_key_builder'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder | null);
  'rds_config_source'?: (_envoy_config_core_v3_ConfigSource | null);
  'scoped_route_configurations_list'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRouteConfigurationsList | null);
  'scoped_rds'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRds | null);
  'config_specifier'?: "scoped_route_configurations_list"|"scoped_rds";
}

export interface ScopedRoutes__Output {
  'name'?: (string);
  'scope_key_builder'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRoutes_ScopeKeyBuilder__Output);
  'rds_config_source'?: (_envoy_config_core_v3_ConfigSource__Output);
  'scoped_route_configurations_list'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRouteConfigurationsList__Output);
  'scoped_rds'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ScopedRds__Output);
}
