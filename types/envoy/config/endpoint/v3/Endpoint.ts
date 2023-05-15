// Original file: .repos/envoy/api/envoy/config/endpoint/v3/endpoint_components.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';

export interface _envoy_config_endpoint_v3_Endpoint_HealthCheckConfig {
  'port_value'?: (number);
  'hostname'?: (string);
  'address'?: (_envoy_config_core_v3_Address | null);
  'disable_active_health_check'?: (boolean);
}

export interface _envoy_config_endpoint_v3_Endpoint_HealthCheckConfig__Output {
  'port_value'?: (number);
  'hostname'?: (string);
  'address'?: (_envoy_config_core_v3_Address__Output);
  'disable_active_health_check'?: (boolean);
}

export interface Endpoint {
  'address'?: (_envoy_config_core_v3_Address | null);
  'health_check_config'?: (_envoy_config_endpoint_v3_Endpoint_HealthCheckConfig | null);
  'hostname'?: (string);
}

export interface Endpoint__Output {
  'address'?: (_envoy_config_core_v3_Address__Output);
  'health_check_config'?: (_envoy_config_endpoint_v3_Endpoint_HealthCheckConfig__Output);
  'hostname'?: (string);
}
