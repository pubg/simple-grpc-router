// Original file: .repos/envoy/api/envoy/config/cluster/v3/outlier_detection.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';

export interface OutlierDetection {
  'consecutive_5xx'?: (_google_protobuf_UInt32Value | null);
  'interval'?: (_google_protobuf_Duration | null);
  'base_ejection_time'?: (_google_protobuf_Duration | null);
  'max_ejection_percent'?: (_google_protobuf_UInt32Value | null);
  'enforcing_consecutive_5xx'?: (_google_protobuf_UInt32Value | null);
  'enforcing_success_rate'?: (_google_protobuf_UInt32Value | null);
  'success_rate_minimum_hosts'?: (_google_protobuf_UInt32Value | null);
  'success_rate_request_volume'?: (_google_protobuf_UInt32Value | null);
  'success_rate_stdev_factor'?: (_google_protobuf_UInt32Value | null);
  'consecutive_gateway_failure'?: (_google_protobuf_UInt32Value | null);
  'enforcing_consecutive_gateway_failure'?: (_google_protobuf_UInt32Value | null);
  'split_external_local_origin_errors'?: (boolean);
  'consecutive_local_origin_failure'?: (_google_protobuf_UInt32Value | null);
  'enforcing_consecutive_local_origin_failure'?: (_google_protobuf_UInt32Value | null);
  'enforcing_local_origin_success_rate'?: (_google_protobuf_UInt32Value | null);
  'failure_percentage_threshold'?: (_google_protobuf_UInt32Value | null);
  'enforcing_failure_percentage'?: (_google_protobuf_UInt32Value | null);
  'enforcing_failure_percentage_local_origin'?: (_google_protobuf_UInt32Value | null);
  'failure_percentage_minimum_hosts'?: (_google_protobuf_UInt32Value | null);
  'failure_percentage_request_volume'?: (_google_protobuf_UInt32Value | null);
  'max_ejection_time'?: (_google_protobuf_Duration | null);
  'max_ejection_time_jitter'?: (_google_protobuf_Duration | null);
}

export interface OutlierDetection__Output {
  'consecutive_5xx'?: (_google_protobuf_UInt32Value__Output);
  'interval'?: (_google_protobuf_Duration__Output);
  'base_ejection_time'?: (_google_protobuf_Duration__Output);
  'max_ejection_percent'?: (_google_protobuf_UInt32Value__Output);
  'enforcing_consecutive_5xx'?: (_google_protobuf_UInt32Value__Output);
  'enforcing_success_rate'?: (_google_protobuf_UInt32Value__Output);
  'success_rate_minimum_hosts'?: (_google_protobuf_UInt32Value__Output);
  'success_rate_request_volume'?: (_google_protobuf_UInt32Value__Output);
  'success_rate_stdev_factor'?: (_google_protobuf_UInt32Value__Output);
  'consecutive_gateway_failure'?: (_google_protobuf_UInt32Value__Output);
  'enforcing_consecutive_gateway_failure'?: (_google_protobuf_UInt32Value__Output);
  'split_external_local_origin_errors'?: (boolean);
  'consecutive_local_origin_failure'?: (_google_protobuf_UInt32Value__Output);
  'enforcing_consecutive_local_origin_failure'?: (_google_protobuf_UInt32Value__Output);
  'enforcing_local_origin_success_rate'?: (_google_protobuf_UInt32Value__Output);
  'failure_percentage_threshold'?: (_google_protobuf_UInt32Value__Output);
  'enforcing_failure_percentage'?: (_google_protobuf_UInt32Value__Output);
  'enforcing_failure_percentage_local_origin'?: (_google_protobuf_UInt32Value__Output);
  'failure_percentage_minimum_hosts'?: (_google_protobuf_UInt32Value__Output);
  'failure_percentage_request_volume'?: (_google_protobuf_UInt32Value__Output);
  'max_ejection_time'?: (_google_protobuf_Duration__Output);
  'max_ejection_time_jitter'?: (_google_protobuf_Duration__Output);
}
