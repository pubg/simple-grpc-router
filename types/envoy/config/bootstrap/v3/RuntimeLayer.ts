// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';
import type { ConfigSource as _envoy_config_core_v3_ConfigSource, ConfigSource__Output as _envoy_config_core_v3_ConfigSource__Output } from '../../../../envoy/config/core/v3/ConfigSource';

export interface _envoy_config_bootstrap_v3_RuntimeLayer_AdminLayer {
}

export interface _envoy_config_bootstrap_v3_RuntimeLayer_AdminLayer__Output {
}

export interface _envoy_config_bootstrap_v3_RuntimeLayer_DiskLayer {
  'symlink_root'?: (string);
  'subdirectory'?: (string);
  'append_service_cluster'?: (boolean);
}

export interface _envoy_config_bootstrap_v3_RuntimeLayer_DiskLayer__Output {
  'symlink_root'?: (string);
  'subdirectory'?: (string);
  'append_service_cluster'?: (boolean);
}

export interface _envoy_config_bootstrap_v3_RuntimeLayer_RtdsLayer {
  'name'?: (string);
  'rtds_config'?: (_envoy_config_core_v3_ConfigSource | null);
}

export interface _envoy_config_bootstrap_v3_RuntimeLayer_RtdsLayer__Output {
  'name'?: (string);
  'rtds_config'?: (_envoy_config_core_v3_ConfigSource__Output);
}

export interface RuntimeLayer {
  'name'?: (string);
  'static_layer'?: (_google_protobuf_Struct | null);
  'disk_layer'?: (_envoy_config_bootstrap_v3_RuntimeLayer_DiskLayer | null);
  'admin_layer'?: (_envoy_config_bootstrap_v3_RuntimeLayer_AdminLayer | null);
  'rtds_layer'?: (_envoy_config_bootstrap_v3_RuntimeLayer_RtdsLayer | null);
  'layer_specifier'?: "static_layer"|"disk_layer"|"admin_layer"|"rtds_layer";
}

export interface RuntimeLayer__Output {
  'name'?: (string);
  'static_layer'?: (_google_protobuf_Struct__Output);
  'disk_layer'?: (_envoy_config_bootstrap_v3_RuntimeLayer_DiskLayer__Output);
  'admin_layer'?: (_envoy_config_bootstrap_v3_RuntimeLayer_AdminLayer__Output);
  'rtds_layer'?: (_envoy_config_bootstrap_v3_RuntimeLayer_RtdsLayer__Output);
}
