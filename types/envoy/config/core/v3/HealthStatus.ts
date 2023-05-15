// Original file: .repos/envoy/api/envoy/config/core/v3/health_check.proto

export const HealthStatus = {
  UNKNOWN: 0,
  HEALTHY: 1,
  UNHEALTHY: 2,
  DRAINING: 3,
  TIMEOUT: 4,
  DEGRADED: 5,
} as const;

export type HealthStatus =
  | 'UNKNOWN'
  | 0
  | 'HEALTHY'
  | 1
  | 'UNHEALTHY'
  | 2
  | 'DRAINING'
  | 3
  | 'TIMEOUT'
  | 4
  | 'DEGRADED'
  | 5

export type HealthStatus__Output = typeof HealthStatus[keyof typeof HealthStatus]
