// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { HeaderValue as _envoy_config_core_v3_HeaderValue, HeaderValue__Output as _envoy_config_core_v3_HeaderValue__Output } from '../../../../envoy/config/core/v3/HeaderValue';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';

// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

export const _envoy_config_core_v3_HeaderValueOption_HeaderAppendAction = {
  APPEND_IF_EXISTS_OR_ADD: 0,
  ADD_IF_ABSENT: 1,
  OVERWRITE_IF_EXISTS_OR_ADD: 2,
} as const;

export type _envoy_config_core_v3_HeaderValueOption_HeaderAppendAction =
  | 'APPEND_IF_EXISTS_OR_ADD'
  | 0
  | 'ADD_IF_ABSENT'
  | 1
  | 'OVERWRITE_IF_EXISTS_OR_ADD'
  | 2

export type _envoy_config_core_v3_HeaderValueOption_HeaderAppendAction__Output = typeof _envoy_config_core_v3_HeaderValueOption_HeaderAppendAction[keyof typeof _envoy_config_core_v3_HeaderValueOption_HeaderAppendAction]

export interface HeaderValueOption {
  'header'?: (_envoy_config_core_v3_HeaderValue | null);
  'append'?: (_google_protobuf_BoolValue | null);
  'append_action'?: (_envoy_config_core_v3_HeaderValueOption_HeaderAppendAction);
  'keep_empty_value'?: (boolean);
}

export interface HeaderValueOption__Output {
  'header'?: (_envoy_config_core_v3_HeaderValue__Output);
  'append'?: (_google_protobuf_BoolValue__Output);
  'append_action'?: (_envoy_config_core_v3_HeaderValueOption_HeaderAppendAction__Output);
  'keep_empty_value'?: (boolean);
}
