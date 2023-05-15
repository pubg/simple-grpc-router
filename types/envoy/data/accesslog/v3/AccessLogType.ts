// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

export const AccessLogType = {
  NotSet: 0,
  TcpUpstreamConnected: 1,
  TcpPeriodic: 2,
  TcpConnectionEnd: 3,
  DownstreamStart: 4,
  DownstreamPeriodic: 5,
  DownstreamEnd: 6,
  UpstreamPoolReady: 7,
  UpstreamPeriodic: 8,
  UpstreamEnd: 9,
} as const;

export type AccessLogType =
  | 'NotSet'
  | 0
  | 'TcpUpstreamConnected'
  | 1
  | 'TcpPeriodic'
  | 2
  | 'TcpConnectionEnd'
  | 3
  | 'DownstreamStart'
  | 4
  | 'DownstreamPeriodic'
  | 5
  | 'DownstreamEnd'
  | 6
  | 'UpstreamPoolReady'
  | 7
  | 'UpstreamPeriodic'
  | 8
  | 'UpstreamEnd'
  | 9

export type AccessLogType__Output = typeof AccessLogType[keyof typeof AccessLogType]
