// Original file: .repos/envoy/api/envoy/config/core/v3/base.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface Metadata {
  'filter_metadata'?: ({[key: string]: _google_protobuf_Struct});
  'typed_filter_metadata'?: ({[key: string]: _google_protobuf_Any});
}

export interface Metadata__Output {
  'filter_metadata'?: ({[key: string]: _google_protobuf_Struct__Output});
  'typed_filter_metadata'?: ({[key: string]: _google_protobuf_Any__Output});
}
