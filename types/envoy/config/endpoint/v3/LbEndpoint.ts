// Original file: .repos/envoy/api/envoy/config/endpoint/v3/endpoint_components.proto

import type { Endpoint as _envoy_config_endpoint_v3_Endpoint, Endpoint__Output as _envoy_config_endpoint_v3_Endpoint__Output } from '../../../../envoy/config/endpoint/v3/Endpoint';
import type { HealthStatus as _envoy_config_core_v3_HealthStatus, HealthStatus__Output as _envoy_config_core_v3_HealthStatus__Output } from '../../../../envoy/config/core/v3/HealthStatus';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

export interface LbEndpoint {
  'endpoint'?: (_envoy_config_endpoint_v3_Endpoint | null);
  'health_status'?: (_envoy_config_core_v3_HealthStatus);
  'metadata'?: (_envoy_config_core_v3_Metadata | null);
  'load_balancing_weight'?: (_google_protobuf_UInt32Value | null);
  'endpoint_name'?: (string);
  'host_identifier'?: "endpoint"|"endpoint_name";
}

export interface LbEndpoint__Output {
  'endpoint'?: (_envoy_config_endpoint_v3_Endpoint__Output);
  'health_status'?: (_envoy_config_core_v3_HealthStatus__Output);
  'metadata'?: (_envoy_config_core_v3_Metadata__Output);
  'load_balancing_weight'?: (_google_protobuf_UInt32Value__Output);
  'endpoint_name'?: (string);
}
