// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto


// Original file: .repos/envoy/api/envoy/config/accesslog/v3/accesslog.proto

export const _envoy_config_accesslog_v3_GrpcStatusFilter_Status = {
  OK: 0,
  CANCELED: 1,
  UNKNOWN: 2,
  INVALID_ARGUMENT: 3,
  DEADLINE_EXCEEDED: 4,
  NOT_FOUND: 5,
  ALREADY_EXISTS: 6,
  PERMISSION_DENIED: 7,
  RESOURCE_EXHAUSTED: 8,
  FAILED_PRECONDITION: 9,
  ABORTED: 10,
  OUT_OF_RANGE: 11,
  UNIMPLEMENTED: 12,
  INTERNAL: 13,
  UNAVAILABLE: 14,
  DATA_LOSS: 15,
  UNAUTHENTICATED: 16,
} as const;

export type _envoy_config_accesslog_v3_GrpcStatusFilter_Status =
  | 'OK'
  | 0
  | 'CANCELED'
  | 1
  | 'UNKNOWN'
  | 2
  | 'INVALID_ARGUMENT'
  | 3
  | 'DEADLINE_EXCEEDED'
  | 4
  | 'NOT_FOUND'
  | 5
  | 'ALREADY_EXISTS'
  | 6
  | 'PERMISSION_DENIED'
  | 7
  | 'RESOURCE_EXHAUSTED'
  | 8
  | 'FAILED_PRECONDITION'
  | 9
  | 'ABORTED'
  | 10
  | 'OUT_OF_RANGE'
  | 11
  | 'UNIMPLEMENTED'
  | 12
  | 'INTERNAL'
  | 13
  | 'UNAVAILABLE'
  | 14
  | 'DATA_LOSS'
  | 15
  | 'UNAUTHENTICATED'
  | 16

export type _envoy_config_accesslog_v3_GrpcStatusFilter_Status__Output = typeof _envoy_config_accesslog_v3_GrpcStatusFilter_Status[keyof typeof _envoy_config_accesslog_v3_GrpcStatusFilter_Status]

export interface GrpcStatusFilter {
  'statuses'?: (_envoy_config_accesslog_v3_GrpcStatusFilter_Status)[];
  'exclude'?: (boolean);
}

export interface GrpcStatusFilter__Output {
  'statuses'?: (_envoy_config_accesslog_v3_GrpcStatusFilter_Status__Output)[];
  'exclude'?: (boolean);
}
