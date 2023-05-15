// Original file: .repos/envoy/api/envoy/type/v3/http.proto

export const CodecClientType = {
  HTTP1: 0,
  HTTP2: 1,
  HTTP3: 2,
} as const;

export type CodecClientType =
  | 'HTTP1'
  | 0
  | 'HTTP2'
  | 1
  | 'HTTP3'
  | 2

export type CodecClientType__Output = typeof CodecClientType[keyof typeof CodecClientType]
