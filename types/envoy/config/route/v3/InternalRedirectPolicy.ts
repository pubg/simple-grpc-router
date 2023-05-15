// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface InternalRedirectPolicy {
  'max_internal_redirects'?: (_google_protobuf_UInt32Value | null);
  'redirect_response_codes'?: (number)[];
  'predicates'?: (_envoy_config_core_v3_TypedExtensionConfig)[];
  'allow_cross_scheme_redirect'?: (boolean);
}

export interface InternalRedirectPolicy__Output {
  'max_internal_redirects'?: (_google_protobuf_UInt32Value__Output);
  'redirect_response_codes'?: (number)[];
  'predicates'?: (_envoy_config_core_v3_TypedExtensionConfig__Output)[];
  'allow_cross_scheme_redirect'?: (boolean);
}
