// Original file: .repos/udpa/xds/core/v3/collection_entry.proto

import type { ResourceLocator as _xds_core_v3_ResourceLocator, ResourceLocator__Output as _xds_core_v3_ResourceLocator__Output } from '../../../xds/core/v3/ResourceLocator';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../google/protobuf/Any';

export interface _xds_core_v3_CollectionEntry_InlineEntry {
  'name'?: (string);
  'version'?: (string);
  'resource'?: (_google_protobuf_Any | null);
}

export interface _xds_core_v3_CollectionEntry_InlineEntry__Output {
  'name'?: (string);
  'version'?: (string);
  'resource'?: (_google_protobuf_Any__Output);
}

export interface CollectionEntry {
  'locator'?: (_xds_core_v3_ResourceLocator | null);
  'inline_entry'?: (_xds_core_v3_CollectionEntry_InlineEntry | null);
  'resource_specifier'?: "locator"|"inline_entry";
}

export interface CollectionEntry__Output {
  'locator'?: (_xds_core_v3_ResourceLocator__Output);
  'inline_entry'?: (_xds_core_v3_CollectionEntry_InlineEntry__Output);
}
