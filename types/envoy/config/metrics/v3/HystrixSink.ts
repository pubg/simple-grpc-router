// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto

import type { Long } from '@grpc/proto-loader';

export interface HystrixSink {
  'num_buckets'?: (number | string | Long);
}

export interface HystrixSink__Output {
  'num_buckets'?: (Long);
}
