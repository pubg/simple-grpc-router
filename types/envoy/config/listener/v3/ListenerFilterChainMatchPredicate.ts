// Original file: .repos/envoy/api/envoy/config/listener/v3/listener_components.proto

import type { ListenerFilterChainMatchPredicate as _envoy_config_listener_v3_ListenerFilterChainMatchPredicate, ListenerFilterChainMatchPredicate__Output as _envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output } from '../../../../envoy/config/listener/v3/ListenerFilterChainMatchPredicate';
import type { Int32Range as _envoy_type_v3_Int32Range, Int32Range__Output as _envoy_type_v3_Int32Range__Output } from '../../../../envoy/type/v3/Int32Range';

export interface _envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet {
  'rules'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate)[];
}

export interface _envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet__Output {
  'rules'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output)[];
}

export interface ListenerFilterChainMatchPredicate {
  'or_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet | null);
  'and_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet | null);
  'not_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate | null);
  'any_match'?: (boolean);
  'destination_port_range'?: (_envoy_type_v3_Int32Range | null);
  'rule'?: "or_match"|"and_match"|"not_match"|"any_match"|"destination_port_range";
}

export interface ListenerFilterChainMatchPredicate__Output {
  'or_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet__Output);
  'and_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate_MatchSet__Output);
  'not_match'?: (_envoy_config_listener_v3_ListenerFilterChainMatchPredicate__Output);
  'any_match'?: (boolean);
  'destination_port_range'?: (_envoy_type_v3_Int32Range__Output);
}
