// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

import type { RegexMatchAndSubstitute as _envoy_type_matcher_v3_RegexMatchAndSubstitute, RegexMatchAndSubstitute__Output as _envoy_type_matcher_v3_RegexMatchAndSubstitute__Output } from '../../../../envoy/type/matcher/v3/RegexMatchAndSubstitute';

// Original file: .repos/envoy/api/envoy/config/route/v3/route_components.proto

export const _envoy_config_route_v3_RedirectAction_RedirectResponseCode = {
  MOVED_PERMANENTLY: 0,
  FOUND: 1,
  SEE_OTHER: 2,
  TEMPORARY_REDIRECT: 3,
  PERMANENT_REDIRECT: 4,
} as const;

export type _envoy_config_route_v3_RedirectAction_RedirectResponseCode =
  | 'MOVED_PERMANENTLY'
  | 0
  | 'FOUND'
  | 1
  | 'SEE_OTHER'
  | 2
  | 'TEMPORARY_REDIRECT'
  | 3
  | 'PERMANENT_REDIRECT'
  | 4

export type _envoy_config_route_v3_RedirectAction_RedirectResponseCode__Output = typeof _envoy_config_route_v3_RedirectAction_RedirectResponseCode[keyof typeof _envoy_config_route_v3_RedirectAction_RedirectResponseCode]

export interface RedirectAction {
  'host_redirect'?: (string);
  'path_redirect'?: (string);
  'response_code'?: (_envoy_config_route_v3_RedirectAction_RedirectResponseCode);
  'https_redirect'?: (boolean);
  'prefix_rewrite'?: (string);
  'strip_query'?: (boolean);
  'scheme_redirect'?: (string);
  'port_redirect'?: (number);
  'regex_rewrite'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute | null);
  'scheme_rewrite_specifier'?: "https_redirect"|"scheme_redirect";
  'path_rewrite_specifier'?: "path_redirect"|"prefix_rewrite"|"regex_rewrite";
}

export interface RedirectAction__Output {
  'host_redirect'?: (string);
  'path_redirect'?: (string);
  'response_code'?: (_envoy_config_route_v3_RedirectAction_RedirectResponseCode__Output);
  'https_redirect'?: (boolean);
  'prefix_rewrite'?: (string);
  'strip_query'?: (boolean);
  'scheme_redirect'?: (string);
  'port_redirect'?: (number);
  'regex_rewrite'?: (_envoy_type_matcher_v3_RegexMatchAndSubstitute__Output);
}
