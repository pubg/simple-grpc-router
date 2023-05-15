// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';
import type { Locality as _envoy_config_core_v3_Locality, Locality__Output as _envoy_config_core_v3_Locality__Output } from '../../../../envoy/config/core/v3/Locality';
import type { BuildVersion as _envoy_config_core_v3_BuildVersion, BuildVersion__Output as _envoy_config_core_v3_BuildVersion__Output } from '../../../../envoy/config/core/v3/BuildVersion';
import type { Extension as _envoy_config_core_v3_Extension, Extension__Output as _envoy_config_core_v3_Extension__Output } from '../../../../envoy/config/core/v3/Extension';
import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { ContextParams as _xds_core_v3_ContextParams, ContextParams__Output as _xds_core_v3_ContextParams__Output } from '../../../../xds/core/v3/ContextParams';

export interface Node {
  'id'?: (string);
  'cluster'?: (string);
  'metadata'?: (_google_protobuf_Struct | null);
  'locality'?: (_envoy_config_core_v3_Locality | null);
  'user_agent_name'?: (string);
  'user_agent_version'?: (string);
  'user_agent_build_version'?: (_envoy_config_core_v3_BuildVersion | null);
  'extensions'?: (_envoy_config_core_v3_Extension)[];
  'client_features'?: (string)[];
  'listening_addresses'?: (_envoy_config_core_v3_Address)[];
  'dynamic_parameters'?: ({[key: string]: _xds_core_v3_ContextParams});
  'user_agent_version_type'?: "user_agent_version"|"user_agent_build_version";
}

export interface Node__Output {
  'id'?: (string);
  'cluster'?: (string);
  'metadata'?: (_google_protobuf_Struct__Output);
  'locality'?: (_envoy_config_core_v3_Locality__Output);
  'user_agent_name'?: (string);
  'user_agent_version'?: (string);
  'user_agent_build_version'?: (_envoy_config_core_v3_BuildVersion__Output);
  'extensions'?: (_envoy_config_core_v3_Extension__Output)[];
  'client_features'?: (string)[];
  'listening_addresses'?: (_envoy_config_core_v3_Address__Output)[];
  'dynamic_parameters'?: ({[key: string]: _xds_core_v3_ContextParams__Output});
}
