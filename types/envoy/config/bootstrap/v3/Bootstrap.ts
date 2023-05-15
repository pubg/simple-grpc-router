// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

import type { Node as _envoy_config_core_v3_Node, Node__Output as _envoy_config_core_v3_Node__Output } from '../../../../envoy/config/core/v3/Node';
import type { ClusterManager as _envoy_config_bootstrap_v3_ClusterManager, ClusterManager__Output as _envoy_config_bootstrap_v3_ClusterManager__Output } from '../../../../envoy/config/bootstrap/v3/ClusterManager';
import type { StatsSink as _envoy_config_metrics_v3_StatsSink, StatsSink__Output as _envoy_config_metrics_v3_StatsSink__Output } from '../../../../envoy/config/metrics/v3/StatsSink';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { Watchdog as _envoy_config_bootstrap_v3_Watchdog, Watchdog__Output as _envoy_config_bootstrap_v3_Watchdog__Output } from '../../../../envoy/config/bootstrap/v3/Watchdog';
import type { Tracing as _envoy_config_trace_v3_Tracing, Tracing__Output as _envoy_config_trace_v3_Tracing__Output } from '../../../../envoy/config/trace/v3/Tracing';
import type { Admin as _envoy_config_bootstrap_v3_Admin, Admin__Output as _envoy_config_bootstrap_v3_Admin__Output } from '../../../../envoy/config/bootstrap/v3/Admin';
import type { StatsConfig as _envoy_config_metrics_v3_StatsConfig, StatsConfig__Output as _envoy_config_metrics_v3_StatsConfig__Output } from '../../../../envoy/config/metrics/v3/StatsConfig';
import type { ApiConfigSource as _envoy_config_core_v3_ApiConfigSource, ApiConfigSource__Output as _envoy_config_core_v3_ApiConfigSource__Output } from '../../../../envoy/config/core/v3/ApiConfigSource';
import type { OverloadManager as _envoy_config_overload_v3_OverloadManager, OverloadManager__Output as _envoy_config_overload_v3_OverloadManager__Output } from '../../../../envoy/config/overload/v3/OverloadManager';
import type { LayeredRuntime as _envoy_config_bootstrap_v3_LayeredRuntime, LayeredRuntime__Output as _envoy_config_bootstrap_v3_LayeredRuntime__Output } from '../../../../envoy/config/bootstrap/v3/LayeredRuntime';
import type { UInt64Value as _google_protobuf_UInt64Value, UInt64Value__Output as _google_protobuf_UInt64Value__Output } from '../../../../google/protobuf/UInt64Value';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../envoy/config/core/v3/ConfigSource';
import type { Watchdogs as _envoy_config_bootstrap_v3_Watchdogs, Watchdogs__Output as _envoy_config_bootstrap_v3_Watchdogs__Output } from '../../../../envoy/config/bootstrap/v3/Watchdogs';
import type { FatalAction as _envoy_config_bootstrap_v3_FatalAction, FatalAction__Output as _envoy_config_bootstrap_v3_FatalAction__Output } from '../../../../envoy/config/bootstrap/v3/FatalAction';
import type { DnsResolutionConfig as _envoy_config_core_v3_DnsResolutionConfig, DnsResolutionConfig__Output as _envoy_config_core_v3_DnsResolutionConfig__Output } from '../../../../envoy/config/core/v3/DnsResolutionConfig';
import type { CustomInlineHeader as _envoy_config_bootstrap_v3_CustomInlineHeader, CustomInlineHeader__Output as _envoy_config_bootstrap_v3_CustomInlineHeader__Output } from '../../../../envoy/config/bootstrap/v3/CustomInlineHeader';
import type { Listener as _envoy_config_listener_v3_Listener, Listener__Output as _envoy_config_listener_v3_Listener__Output } from '../../../../envoy/config/listener/v3/Listener';
import type { Cluster as _envoy_config_cluster_v3_Cluster, Cluster__Output as _envoy_config_cluster_v3_Cluster__Output } from '../../../../envoy/config/cluster/v3/Cluster';
import type { Secret as _envoy_extensions_transport_sockets_tls_v3_Secret, Secret__Output as _envoy_extensions_transport_sockets_tls_v3_Secret__Output } from '../../../../envoy/extensions/transport_sockets/tls/v3/Secret';

export interface _envoy_config_bootstrap_v3_Bootstrap_DynamicResources {
  'lds_config'?: (_envoy_config_core_v3_ConfigSource | null);
  'lds_resources_locator'?: (string);
  'cds_config'?: (_envoy_config_core_v3_ConfigSource | null);
  'cds_resources_locator'?: (string);
  'ads_config'?: (_envoy_config_core_v3_ApiConfigSource | null);
}

export interface _envoy_config_bootstrap_v3_Bootstrap_DynamicResources__Output {
  'lds_config'?: (_envoy_config_core_v3_ConfigSource__Output);
  'lds_resources_locator'?: (string);
  'cds_config'?: (_envoy_config_core_v3_ConfigSource__Output);
  'cds_resources_locator'?: (string);
  'ads_config'?: (_envoy_config_core_v3_ApiConfigSource__Output);
}

export interface _envoy_config_bootstrap_v3_Bootstrap_StaticResources {
  'listeners'?: (_envoy_config_listener_v3_Listener)[];
  'clusters'?: (_envoy_config_cluster_v3_Cluster)[];
  'secrets'?: (_envoy_extensions_transport_sockets_tls_v3_Secret)[];
}

export interface _envoy_config_bootstrap_v3_Bootstrap_StaticResources__Output {
  'listeners'?: (_envoy_config_listener_v3_Listener__Output)[];
  'clusters'?: (_envoy_config_cluster_v3_Cluster__Output)[];
  'secrets'?: (_envoy_extensions_transport_sockets_tls_v3_Secret__Output)[];
}

export interface Bootstrap {
  'node'?: (_envoy_config_core_v3_Node | null);
  'static_resources'?: (_envoy_config_bootstrap_v3_Bootstrap_StaticResources | null);
  'dynamic_resources'?: (_envoy_config_bootstrap_v3_Bootstrap_DynamicResources | null);
  'cluster_manager'?: (_envoy_config_bootstrap_v3_ClusterManager | null);
  'flags_path'?: (string);
  'stats_sinks'?: (_envoy_config_metrics_v3_StatsSink)[];
  'stats_flush_interval'?: (_google_protobuf_Duration | null);
  'watchdog'?: (_envoy_config_bootstrap_v3_Watchdog | null);
  'tracing'?: (_envoy_config_trace_v3_Tracing | null);
  'admin'?: (_envoy_config_bootstrap_v3_Admin | null);
  'stats_config'?: (_envoy_config_metrics_v3_StatsConfig | null);
  'hds_config'?: (_envoy_config_core_v3_ApiConfigSource | null);
  'overload_manager'?: (_envoy_config_overload_v3_OverloadManager | null);
  'enable_dispatcher_stats'?: (boolean);
  'layered_runtime'?: (_envoy_config_bootstrap_v3_LayeredRuntime | null);
  'header_prefix'?: (string);
  'stats_server_version_override'?: (_google_protobuf_UInt64Value | null);
  'use_tcp_for_dns_lookups'?: (boolean);
  'bootstrap_extensions'?: (_envoy_config_core_v3_TypedExtensionConfig)[];
  'config_sources'?: (_envoy_config_core_v3_ConfigSource)[];
  'default_config_source'?: (_envoy_config_core_v3_ConfigSource | null);
  'default_socket_interface'?: (string);
  'certificate_provider_instances'?: ({[key: string]: _envoy_config_core_v3_TypedExtensionConfig});
  'node_context_params'?: (string)[];
  'watchdogs'?: (_envoy_config_bootstrap_v3_Watchdogs | null);
  'fatal_actions'?: (_envoy_config_bootstrap_v3_FatalAction)[];
  'stats_flush_on_admin'?: (boolean);
  'dns_resolution_config'?: (_envoy_config_core_v3_DnsResolutionConfig | null);
  'typed_dns_resolver_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'inline_headers'?: (_envoy_config_bootstrap_v3_CustomInlineHeader)[];
  'perf_tracing_file_path'?: (string);
  'default_regex_engine'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'xds_delegate_extension'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'xds_config_tracker_extension'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'listener_manager'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'stats_flush'?: "stats_flush_on_admin";
}

export interface Bootstrap__Output {
  'node'?: (_envoy_config_core_v3_Node__Output);
  'static_resources'?: (_envoy_config_bootstrap_v3_Bootstrap_StaticResources__Output);
  'dynamic_resources'?: (_envoy_config_bootstrap_v3_Bootstrap_DynamicResources__Output);
  'cluster_manager'?: (_envoy_config_bootstrap_v3_ClusterManager__Output);
  'flags_path'?: (string);
  'stats_sinks'?: (_envoy_config_metrics_v3_StatsSink__Output)[];
  'stats_flush_interval'?: (_google_protobuf_Duration__Output);
  'watchdog'?: (_envoy_config_bootstrap_v3_Watchdog__Output);
  'tracing'?: (_envoy_config_trace_v3_Tracing__Output);
  'admin'?: (_envoy_config_bootstrap_v3_Admin__Output);
  'stats_config'?: (_envoy_config_metrics_v3_StatsConfig__Output);
  'hds_config'?: (_envoy_config_core_v3_ApiConfigSource__Output);
  'overload_manager'?: (_envoy_config_overload_v3_OverloadManager__Output);
  'enable_dispatcher_stats'?: (boolean);
  'layered_runtime'?: (_envoy_config_bootstrap_v3_LayeredRuntime__Output);
  'header_prefix'?: (string);
  'stats_server_version_override'?: (_google_protobuf_UInt64Value__Output);
  'use_tcp_for_dns_lookups'?: (boolean);
  'bootstrap_extensions'?: (_envoy_config_core_v3_TypedExtensionConfig__Output)[];
  'config_sources'?: (_envoy_config_core_v3_ConfigSource__Output)[];
  'default_config_source'?: (_envoy_config_core_v3_ConfigSource__Output);
  'default_socket_interface'?: (string);
  'certificate_provider_instances'?: ({[key: string]: _envoy_config_core_v3_TypedExtensionConfig__Output});
  'node_context_params'?: (string)[];
  'watchdogs'?: (_envoy_config_bootstrap_v3_Watchdogs__Output);
  'fatal_actions'?: (_envoy_config_bootstrap_v3_FatalAction__Output)[];
  'stats_flush_on_admin'?: (boolean);
  'dns_resolution_config'?: (_envoy_config_core_v3_DnsResolutionConfig__Output);
  'typed_dns_resolver_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'inline_headers'?: (_envoy_config_bootstrap_v3_CustomInlineHeader__Output)[];
  'perf_tracing_file_path'?: (string);
  'default_regex_engine'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'xds_delegate_extension'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'xds_config_tracker_extension'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'listener_manager'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}
