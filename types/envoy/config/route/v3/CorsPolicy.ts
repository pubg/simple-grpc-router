// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { RuntimeFractionalPercent as _envoy_config_core_v3_RuntimeFractionalPercent, RuntimeFractionalPercent__Output as _envoy_config_core_v3_RuntimeFractionalPercent__Output } from '../../../../envoy/config/core/v3/RuntimeFractionalPercent';
import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../envoy/type/matcher/v3/StringMatcher';

export interface CorsPolicy {
  'allow_methods'?: (string);
  'allow_headers'?: (string);
  'expose_headers'?: (string);
  'max_age'?: (string);
  'allow_credentials'?: (_google_protobuf_BoolValue | null);
  'filter_enabled'?: (_envoy_config_core_v3_RuntimeFractionalPercent | null);
  'shadow_enabled'?: (_envoy_config_core_v3_RuntimeFractionalPercent | null);
  'allow_origin_string_match'?: (_envoy_type_matcher_v3_StringMatcher)[];
  'allow_private_network_access'?: (_google_protobuf_BoolValue | null);
  'enabled_specifier'?: "filter_enabled";
}

export interface CorsPolicy__Output {
  'allow_methods'?: (string);
  'allow_headers'?: (string);
  'expose_headers'?: (string);
  'max_age'?: (string);
  'allow_credentials'?: (_google_protobuf_BoolValue__Output);
  'filter_enabled'?: (_envoy_config_core_v3_RuntimeFractionalPercent__Output);
  'shadow_enabled'?: (_envoy_config_core_v3_RuntimeFractionalPercent__Output);
  'allow_origin_string_match'?: (_envoy_type_matcher_v3_StringMatcher__Output)[];
  'allow_private_network_access'?: (_google_protobuf_BoolValue__Output);
}
