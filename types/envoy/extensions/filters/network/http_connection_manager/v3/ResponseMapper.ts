// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

import type { AccessLogFilter as _envoy_config_accesslog_v3_AccessLogFilter, AccessLogFilter__Output as _envoy_config_accesslog_v3_AccessLogFilter__Output } from '../../../../../../envoy/config/accesslog/v3/AccessLogFilter';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../../../google/protobuf/UInt32Value';
import type { DataSource as _envoy_config_core_v3_DataSource, DataSource__Output as _envoy_config_core_v3_DataSource__Output } from '../../../../../../envoy/config/core/v3/DataSource';
import type { SubstitutionFormatString as _envoy_config_core_v3_SubstitutionFormatString, SubstitutionFormatString__Output as _envoy_config_core_v3_SubstitutionFormatString__Output } from '../../../../../../envoy/config/core/v3/SubstitutionFormatString';
import type { HeaderValueOption as _envoy_config_core_v3_HeaderValueOption, HeaderValueOption__Output as _envoy_config_core_v3_HeaderValueOption__Output } from '../../../../../../envoy/config/core/v3/HeaderValueOption';

export interface ResponseMapper {
  'filter'?: (_envoy_config_accesslog_v3_AccessLogFilter | null);
  'status_code'?: (_google_protobuf_UInt32Value | null);
  'body'?: (_envoy_config_core_v3_DataSource | null);
  'body_format_override'?: (_envoy_config_core_v3_SubstitutionFormatString | null);
  'headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption)[];
}

export interface ResponseMapper__Output {
  'filter'?: (_envoy_config_accesslog_v3_AccessLogFilter__Output);
  'status_code'?: (_google_protobuf_UInt32Value__Output);
  'body'?: (_envoy_config_core_v3_DataSource__Output);
  'body_format_override'?: (_envoy_config_core_v3_SubstitutionFormatString__Output);
  'headers_to_add'?: (_envoy_config_core_v3_HeaderValueOption__Output)[];
}
