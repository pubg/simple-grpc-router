// Original file: .repos/envoy/api/envoy/config/core/v3/config_source.proto

import type { ApiConfigSource as _envoy_config_core_v3_ApiConfigSource, ApiConfigSource__Output as _envoy_config_core_v3_ApiConfigSource__Output } from '../../../../envoy/config/core/v3/ApiConfigSource';
import type { AggregatedConfigSource as _envoy_config_core_v3_AggregatedConfigSource, AggregatedConfigSource__Output as _envoy_config_core_v3_AggregatedConfigSource__Output } from '../../../../envoy/config/core/v3/AggregatedConfigSource';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { SelfConfigSource as _envoy_config_core_v3_SelfConfigSource, SelfConfigSource__Output as _envoy_config_core_v3_SelfConfigSource__Output } from '../../../../envoy/config/core/v3/SelfConfigSource';
import type { ApiVersion as _envoy_config_core_v3_ApiVersion, ApiVersion__Output as _envoy_config_core_v3_ApiVersion__Output } from '../../../../envoy/config/core/v3/ApiVersion';
import type { Authority as _xds_core_v3_Authority, Authority__Output as _xds_core_v3_Authority__Output } from '../../../../xds/core/v3/Authority';
import type { PathConfigSource as _envoy_config_core_v3_PathConfigSource, PathConfigSource__Output as _envoy_config_core_v3_PathConfigSource__Output } from '../../../../envoy/config/core/v3/PathConfigSource';

export interface ConfigSource {
  'path'?: (string);
  'api_config_source'?: (_envoy_config_core_v3_ApiConfigSource | null);
  'ads'?: (_envoy_config_core_v3_AggregatedConfigSource | null);
  'initial_fetch_timeout'?: (_google_protobuf_Duration | null);
  'self'?: (_envoy_config_core_v3_SelfConfigSource | null);
  'resource_api_version'?: (_envoy_config_core_v3_ApiVersion);
  'authorities'?: (_xds_core_v3_Authority)[];
  'path_config_source'?: (_envoy_config_core_v3_PathConfigSource | null);
  'config_source_specifier'?: "path"|"path_config_source"|"api_config_source"|"ads"|"self";
}

export interface ConfigSource__Output {
  'path'?: (string);
  'api_config_source'?: (_envoy_config_core_v3_ApiConfigSource__Output);
  'ads'?: (_envoy_config_core_v3_AggregatedConfigSource__Output);
  'initial_fetch_timeout'?: (_google_protobuf_Duration__Output);
  'self'?: (_envoy_config_core_v3_SelfConfigSource__Output);
  'resource_api_version'?: (_envoy_config_core_v3_ApiVersion__Output);
  'authorities'?: (_xds_core_v3_Authority__Output)[];
  'path_config_source'?: (_envoy_config_core_v3_PathConfigSource__Output);
}
