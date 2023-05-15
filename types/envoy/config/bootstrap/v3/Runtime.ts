// Original file: .repos/envoy/api/envoy/config/bootstrap/v3/bootstrap.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';

export interface Runtime {
  'symlink_root'?: (string);
  'subdirectory'?: (string);
  'override_subdirectory'?: (string);
  'base'?: (_google_protobuf_Struct | null);
}

export interface Runtime__Output {
  'symlink_root'?: (string);
  'subdirectory'?: (string);
  'override_subdirectory'?: (string);
  'base'?: (_google_protobuf_Struct__Output);
}
