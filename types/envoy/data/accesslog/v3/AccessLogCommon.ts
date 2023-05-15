// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { TLSProperties as _envoy_data_accesslog_v3_TLSProperties, TLSProperties__Output as _envoy_data_accesslog_v3_TLSProperties__Output } from '../../../../envoy/data/accesslog/v3/TLSProperties';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../../../../google/protobuf/Timestamp';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { ResponseFlags as _envoy_data_accesslog_v3_ResponseFlags, ResponseFlags__Output as _envoy_data_accesslog_v3_ResponseFlags__Output } from '../../../../envoy/data/accesslog/v3/ResponseFlags';
import type { Metadata as _envoy_config_core_v3_Metadata, Metadata__Output as _envoy_config_core_v3_Metadata__Output } from '../../../../envoy/config/core/v3/Metadata';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { AccessLogType as _envoy_data_accesslog_v3_AccessLogType, AccessLogType__Output as _envoy_data_accesslog_v3_AccessLogType__Output } from '../../../../envoy/data/accesslog/v3/AccessLogType';
import type { Long } from '@grpc/proto-loader';

export interface AccessLogCommon {
  'sample_rate'?: (number | string);
  'downstream_remote_address'?: (_envoy_config_core_v3_Address | null);
  'downstream_local_address'?: (_envoy_config_core_v3_Address | null);
  'tls_properties'?: (_envoy_data_accesslog_v3_TLSProperties | null);
  'start_time'?: (_google_protobuf_Timestamp | null);
  'time_to_last_rx_byte'?: (_google_protobuf_Duration | null);
  'time_to_first_upstream_tx_byte'?: (_google_protobuf_Duration | null);
  'time_to_last_upstream_tx_byte'?: (_google_protobuf_Duration | null);
  'time_to_first_upstream_rx_byte'?: (_google_protobuf_Duration | null);
  'time_to_last_upstream_rx_byte'?: (_google_protobuf_Duration | null);
  'time_to_first_downstream_tx_byte'?: (_google_protobuf_Duration | null);
  'time_to_last_downstream_tx_byte'?: (_google_protobuf_Duration | null);
  'upstream_remote_address'?: (_envoy_config_core_v3_Address | null);
  'upstream_local_address'?: (_envoy_config_core_v3_Address | null);
  'upstream_cluster'?: (string);
  'response_flags'?: (_envoy_data_accesslog_v3_ResponseFlags | null);
  'metadata'?: (_envoy_config_core_v3_Metadata | null);
  'upstream_transport_failure_reason'?: (string);
  'route_name'?: (string);
  'downstream_direct_remote_address'?: (_envoy_config_core_v3_Address | null);
  'filter_state_objects'?: ({[key: string]: _google_protobuf_Any});
  'custom_tags'?: ({[key: string]: string});
  'duration'?: (_google_protobuf_Duration | null);
  'upstream_request_attempt_count'?: (number);
  'connection_termination_details'?: (string);
  'stream_id'?: (string);
  'intermediate_log_entry'?: (boolean);
  'downstream_transport_failure_reason'?: (string);
  'downstream_wire_bytes_sent'?: (number | string | Long);
  'downstream_wire_bytes_received'?: (number | string | Long);
  'upstream_wire_bytes_sent'?: (number | string | Long);
  'upstream_wire_bytes_received'?: (number | string | Long);
  'access_log_type'?: (_envoy_data_accesslog_v3_AccessLogType);
}

export interface AccessLogCommon__Output {
  'sample_rate'?: (number | string);
  'downstream_remote_address'?: (_envoy_config_core_v3_Address__Output);
  'downstream_local_address'?: (_envoy_config_core_v3_Address__Output);
  'tls_properties'?: (_envoy_data_accesslog_v3_TLSProperties__Output);
  'start_time'?: (_google_protobuf_Timestamp__Output);
  'time_to_last_rx_byte'?: (_google_protobuf_Duration__Output);
  'time_to_first_upstream_tx_byte'?: (_google_protobuf_Duration__Output);
  'time_to_last_upstream_tx_byte'?: (_google_protobuf_Duration__Output);
  'time_to_first_upstream_rx_byte'?: (_google_protobuf_Duration__Output);
  'time_to_last_upstream_rx_byte'?: (_google_protobuf_Duration__Output);
  'time_to_first_downstream_tx_byte'?: (_google_protobuf_Duration__Output);
  'time_to_last_downstream_tx_byte'?: (_google_protobuf_Duration__Output);
  'upstream_remote_address'?: (_envoy_config_core_v3_Address__Output);
  'upstream_local_address'?: (_envoy_config_core_v3_Address__Output);
  'upstream_cluster'?: (string);
  'response_flags'?: (_envoy_data_accesslog_v3_ResponseFlags__Output);
  'metadata'?: (_envoy_config_core_v3_Metadata__Output);
  'upstream_transport_failure_reason'?: (string);
  'route_name'?: (string);
  'downstream_direct_remote_address'?: (_envoy_config_core_v3_Address__Output);
  'filter_state_objects'?: ({[key: string]: _google_protobuf_Any__Output});
  'custom_tags'?: ({[key: string]: string});
  'duration'?: (_google_protobuf_Duration__Output);
  'upstream_request_attempt_count'?: (number);
  'connection_termination_details'?: (string);
  'stream_id'?: (string);
  'intermediate_log_entry'?: (boolean);
  'downstream_transport_failure_reason'?: (string);
  'downstream_wire_bytes_sent'?: (Long);
  'downstream_wire_bytes_received'?: (Long);
  'upstream_wire_bytes_sent'?: (Long);
  'upstream_wire_bytes_received'?: (Long);
  'access_log_type'?: (_envoy_data_accesslog_v3_AccessLogType__Output);
}
