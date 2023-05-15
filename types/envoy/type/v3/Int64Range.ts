// Original file: .repos/envoy/api/envoy/type/v3/range.proto

import type { Long } from '@grpc/proto-loader';

export interface Int64Range {
  'start'?: (number | string | Long);
  'end'?: (number | string | Long);
}

export interface Int64Range__Output {
  'start'?: (Long);
  'end'?: (Long);
}
