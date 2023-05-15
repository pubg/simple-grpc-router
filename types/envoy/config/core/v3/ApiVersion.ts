// Original file: .repos/envoy/api/envoy/config/core/v3/config_source.proto

export const ApiVersion = {
  AUTO: 0,
  V2: 1,
  V3: 2,
} as const;

export type ApiVersion =
  | 'AUTO'
  | 0
  | 'V2'
  | 1
  | 'V3'
  | 2

export type ApiVersion__Output = typeof ApiVersion[keyof typeof ApiVersion]
