// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

import type { AccessLogCommon as _envoy_data_accesslog_v3_AccessLogCommon, AccessLogCommon__Output as _envoy_data_accesslog_v3_AccessLogCommon__Output } from '../../../../envoy/data/accesslog/v3/AccessLogCommon';
import type { HTTPRequestProperties as _envoy_data_accesslog_v3_HTTPRequestProperties, HTTPRequestProperties__Output as _envoy_data_accesslog_v3_HTTPRequestProperties__Output } from '../../../../envoy/data/accesslog/v3/HTTPRequestProperties';
import type { HTTPResponseProperties as _envoy_data_accesslog_v3_HTTPResponseProperties, HTTPResponseProperties__Output as _envoy_data_accesslog_v3_HTTPResponseProperties__Output } from '../../../../envoy/data/accesslog/v3/HTTPResponseProperties';

// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

export const _envoy_data_accesslog_v3_HTTPAccessLogEntry_HTTPVersion = {
  PROTOCOL_UNSPECIFIED: 0,
  HTTP10: 1,
  HTTP11: 2,
  HTTP2: 3,
  HTTP3: 4,
} as const;

export type _envoy_data_accesslog_v3_HTTPAccessLogEntry_HTTPVersion =
  | 'PROTOCOL_UNSPECIFIED'
  | 0
  | 'HTTP10'
  | 1
  | 'HTTP11'
  | 2
  | 'HTTP2'
  | 3
  | 'HTTP3'
  | 4

export type _envoy_data_accesslog_v3_HTTPAccessLogEntry_HTTPVersion__Output = typeof _envoy_data_accesslog_v3_HTTPAccessLogEntry_HTTPVersion[keyof typeof _envoy_data_accesslog_v3_HTTPAccessLogEntry_HTTPVersion]

export interface HTTPAccessLogEntry {
  'common_properties'?: (_envoy_data_accesslog_v3_AccessLogCommon | null);
  'protocol_version'?: (_envoy_data_accesslog_v3_HTTPAccessLogEntry_HTTPVersion);
  'request'?: (_envoy_data_accesslog_v3_HTTPRequestProperties | null);
  'response'?: (_envoy_data_accesslog_v3_HTTPResponseProperties | null);
}

export interface HTTPAccessLogEntry__Output {
  'common_properties'?: (_envoy_data_accesslog_v3_AccessLogCommon__Output);
  'protocol_version'?: (_envoy_data_accesslog_v3_HTTPAccessLogEntry_HTTPVersion__Output);
  'request'?: (_envoy_data_accesslog_v3_HTTPRequestProperties__Output);
  'response'?: (_envoy_data_accesslog_v3_HTTPResponseProperties__Output);
}
