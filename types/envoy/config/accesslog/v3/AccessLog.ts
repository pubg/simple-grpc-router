// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto

import type { AccessLogFilter as _envoy_config_accesslog_v3_AccessLogFilter, AccessLogFilter__Output as _envoy_config_accesslog_v3_AccessLogFilter__Output } from '../../../../envoy/config/accesslog/v3/AccessLogFilter';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';

export interface AccessLog {
  'name'?: (string);
  'filter'?: (_envoy_config_accesslog_v3_AccessLogFilter | null);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface AccessLog__Output {
  'name'?: (string);
  'filter'?: (_envoy_config_accesslog_v3_AccessLogFilter__Output);
  'typed_config'?: (_google_protobuf_Any__Output);
}
