// Original file: .repos/udpa/xds/core/v3/resource_locator.proto

import type { ContextParams as _xds_core_v3_ContextParams, ContextParams__Output as _xds_core_v3_ContextParams__Output } from '../../../xds/core/v3/ContextParams';
import type { ResourceLocator as _xds_core_v3_ResourceLocator, ResourceLocator__Output as _xds_core_v3_ResourceLocator__Output } from '../../../xds/core/v3/ResourceLocator';

export interface _xds_core_v3_ResourceLocator_Directive {
  'alt'?: (_xds_core_v3_ResourceLocator | null);
  'entry'?: (string);
  'directive'?: "alt"|"entry";
}

export interface _xds_core_v3_ResourceLocator_Directive__Output {
  'alt'?: (_xds_core_v3_ResourceLocator__Output);
  'entry'?: (string);
}

// Original file: .repos/udpa/xds/core/v3/resource_locator.proto

export const _xds_core_v3_ResourceLocator_Scheme = {
  XDSTP: 0,
  HTTP: 1,
  FILE: 2,
} as const;

export type _xds_core_v3_ResourceLocator_Scheme =
  | 'XDSTP'
  | 0
  | 'HTTP'
  | 1
  | 'FILE'
  | 2

export type _xds_core_v3_ResourceLocator_Scheme__Output = typeof _xds_core_v3_ResourceLocator_Scheme[keyof typeof _xds_core_v3_ResourceLocator_Scheme]

export interface ResourceLocator {
  'scheme'?: (_xds_core_v3_ResourceLocator_Scheme);
  'id'?: (string);
  'authority'?: (string);
  'resource_type'?: (string);
  'exact_context'?: (_xds_core_v3_ContextParams | null);
  'directives'?: (_xds_core_v3_ResourceLocator_Directive)[];
  'context_param_specifier'?: "exact_context";
}

export interface ResourceLocator__Output {
  'scheme'?: (_xds_core_v3_ResourceLocator_Scheme__Output);
  'id'?: (string);
  'authority'?: (string);
  'resource_type'?: (string);
  'exact_context'?: (_xds_core_v3_ContextParams__Output);
  'directives'?: (_xds_core_v3_ResourceLocator_Directive__Output)[];
}
