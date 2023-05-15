// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { HeaderValueOption as _envoy_config_core_v3_HeaderValueOption, HeaderValueOption__Output as _envoy_config_core_v3_HeaderValueOption__Output } from '../../../../envoy/config/core/v3/HeaderValueOption';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface _envoy_config_route_v3_WeightedCluster_ClusterWeight {
  'name'?: (string);
  'cluster_header'?: (string);
  'weight'?: (_google_protobuf_UInt32Value | null);
  'metadata_match'?: (_envoy_config_core_v3_Metadata | null);
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'request_headers_to_remove'?: (string)[];
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
  'response_headers_to_remove'?: (string)[];
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any});
  'host_rewrite_literal'?: (string);
  'host_rewrite_specifier'?: "host_rewrite_literal";
}

export interface _envoy_config_route_v3_WeightedCluster_ClusterWeight__Output {
  'name'?: (string);
  'cluster_header'?: (string);
  'weight'?: (_google_protobuf_UInt32Value__Output);
  'metadata_match'?: (_envoy_config_core_v3_Metadata__Output);
  'request_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'request_headers_to_remove'?: (string)[];
  'response_headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
  'response_headers_to_remove'?: (string)[];
  'typed_per_filter_config'?: ({[key: string]: _google_protobuf_Any__Output});
  'host_rewrite_literal'?: (string);
}

export interface WeightedCluster {
  'clusters'?: (_envoy_config_route_v3_WeightedCluster_ClusterWeight)[];
  'runtime_key_prefix'?: (string);
  'total_weight'?: (_google_protobuf_UInt32Value | null);
  'header_name'?: (string);
  'random_value_specifier'?: "header_name";
}

export interface WeightedCluster__Output {
  'clusters'?: (_envoy_config_route_v3_WeightedCluster_ClusterWeight__Output)[];
  'runtime_key_prefix'?: (string);
  'total_weight'?: (_google_protobuf_UInt32Value__Output);
  'header_name'?: (string);
}
