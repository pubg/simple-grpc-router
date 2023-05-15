// Original file: .repos/envoy/api/envoy/config/endpoint/v3/endpoint_components.proto

import type { Locality as _envoy_config_core_v3_Locality, Locality__Output as _envoy_config_core_v3_Locality__Output } from '../../../../envoy/config/core/v3/Locality';
import type { LbEndpoint as _envoy_config_endpoint_v3_LbEndpoint, LbEndpoint__Output as _envoy_config_endpoint_v3_LbEndpoint__Output } from '../../../../envoy/config/endpoint/v3/LbEndpoint';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { LedsClusterLocalityConfig as _envoy_config_endpoint_v3_LedsClusterLocalityConfig, LedsClusterLocalityConfig__Output as _envoy_config_endpoint_v3_LedsClusterLocalityConfig__Output } from '../../../../envoy/config/endpoint/v3/LedsClusterLocalityConfig';

export interface _envoy_config_endpoint_v3_LocalityLbEndpoints_LbEndpointList {
  'lb_endpoints'?: (_envoy_config_endpoint_v3_LbEndpoint)[];
}

export interface _envoy_config_endpoint_v3_LocalityLbEndpoints_LbEndpointList__Output {
  'lb_endpoints'?: (_envoy_config_endpoint_v3_LbEndpoint__Output)[];
}

export interface LocalityLbEndpoints {
  'locality'?: (_envoy_config_core_v3_Locality | null);
  'lb_endpoints'?: (_envoy_config_endpoint_v3_LbEndpoint)[];
  'load_balancing_weight'?: (_google_protobuf_UInt32Value | null);
  'priority'?: (number);
  'proximity'?: (_google_protobuf_UInt32Value | null);
  'load_balancer_endpoints'?: (_envoy_config_endpoint_v3_LocalityLbEndpoints_LbEndpointList | null);
  'leds_cluster_locality_config'?: (_envoy_config_endpoint_v3_LedsClusterLocalityConfig | null);
  'lb_config'?: "load_balancer_endpoints"|"leds_cluster_locality_config";
}

export interface LocalityLbEndpoints__Output {
  'locality'?: (_envoy_config_core_v3_Locality__Output);
  'lb_endpoints'?: (_envoy_config_endpoint_v3_LbEndpoint__Output)[];
  'load_balancing_weight'?: (_google_protobuf_UInt32Value__Output);
  'priority'?: (number);
  'proximity'?: (_google_protobuf_UInt32Value__Output);
  'load_balancer_endpoints'?: (_envoy_config_endpoint_v3_LocalityLbEndpoints_LbEndpointList__Output);
  'leds_cluster_locality_config'?: (_envoy_config_endpoint_v3_LedsClusterLocalityConfig__Output);
}
