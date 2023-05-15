// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

import type { Long } from '@grpc/proto-loader';

export interface ConnectionProperties {
  'received_bytes'?: (number | string | Long);
  'sent_bytes'?: (number | string | Long);
}

export interface ConnectionProperties__Output {
  'received_bytes'?: (Long);
  'sent_bytes'?: (Long);
}
