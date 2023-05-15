// Original file: .repos/envoy/api/envoy/extensions/access_loggers/file/v3/file.proto

import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../../google/protobuf/Struct';
import type { SubstitutionFormatString as _envoy_config_core_v3_SubstitutionFormatString, SubstitutionFormatString__Output as _envoy_config_core_v3_SubstitutionFormatString__Output } from '../../../../../envoy/config/core/v3/SubstitutionFormatString';

export interface FileAccessLog {
  'path'?: (string);
  'format'?: (string);
  'json_format'?: (_google_protobuf_Struct | null);
  'typed_json_format'?: (_google_protobuf_Struct | null);
  'log_format'?: (_envoy_config_core_v3_SubstitutionFormatString | null);
  'access_log_format'?: "format"|"json_format"|"typed_json_format"|"log_format";
}

export interface FileAccessLog__Output {
  'path'?: (string);
  'format'?: (string);
  'json_format'?: (_google_protobuf_Struct__Output);
  'typed_json_format'?: (_google_protobuf_Struct__Output);
  'log_format'?: (_envoy_config_core_v3_SubstitutionFormatString__Output);
}
