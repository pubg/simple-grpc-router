// Original file: .repos/envoy/api/envoy/config/endpoint/v3/endpoint.proto

import type { LocalityLbEndpoints as _envoy_config_endpoint_v3_LocalityLbEndpoints, LocalityLbEndpoints__Output as _envoy_config_endpoint_v3_LocalityLbEndpoints__Output } from '../../../../envoy/config/endpoint/v3/LocalityLbEndpoints';
import type { Endpoint as _envoy_config_endpoint_v3_Endpoint, Endpoint__Output as _envoy_config_endpoint_v3_Endpoint__Output } from '../../../../envoy/config/endpoint/v3/Endpoint';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { FractionalPercent as _envoy_type_v3_FractionalPercent, FractionalPercent__Output as _envoy_type_v3_FractionalPercent__Output } from '../../../../envoy/type/v3/FractionalPercent';

export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload {
  'category'?: (string);
  'drop_percentage'?: (_envoy_type_v3_FractionalPercent | null);
}

export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload__Output {
  'category'?: (string);
  'drop_percentage'?: (_envoy_type_v3_FractionalPercent__Output);
}

export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy {
  'drop_overloads'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload)[];
  'overprovisioning_factor'?: (_google_protobuf_UInt32Value | null);
  'endpoint_stale_after'?: (_google_protobuf_Duration | null);
}

export interface _envoy_config_endpoint_v3_ClusterLoadAssignment_Policy__Output {
  'drop_overloads'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy_DropOverload__Output)[];
  'overprovisioning_factor'?: (_google_protobuf_UInt32Value__Output);
  'endpoint_stale_after'?: (_google_protobuf_Duration__Output);
}

export interface ClusterLoadAssignment {
  'cluster_name'?: (string);
  'endpoints'?: (_envoy_config_endpoint_v3_LocalityLbEndpoints)[];
  'policy'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy | null);
  'named_endpoints'?: ({[key: string]: _envoy_config_endpoint_v3_Endpoint});
}

export interface ClusterLoadAssignment__Output {
  'cluster_name'?: (string);
  'endpoints'?: (_envoy_config_endpoint_v3_LocalityLbEndpoints__Output)[];
  'policy'?: (_envoy_config_endpoint_v3_ClusterLoadAssignment_Policy__Output);
  'named_endpoints'?: ({[key: string]: _envoy_config_endpoint_v3_Endpoint__Output});
}
