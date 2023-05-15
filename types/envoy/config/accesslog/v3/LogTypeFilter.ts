// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto

import type { AccessLogType as _envoy_data_accesslog_v3_AccessLogType, AccessLogType__Output as _envoy_data_accesslog_v3_AccessLogType__Output } from '../../../../envoy/data/accesslog/v3/AccessLogType';

export interface LogTypeFilter {
  'types'?: (_envoy_data_accesslog_v3_AccessLogType)[];
  'exclude'?: (boolean);
}

export interface LogTypeFilter__Output {
  'types'?: (_envoy_data_accesslog_v3_AccessLogType__Output)[];
  'exclude'?: (boolean);
}
