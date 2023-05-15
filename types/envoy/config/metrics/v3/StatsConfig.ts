// Original file: .repos/envoy/api/envoy/config/metrics/v3/stats.proto

import type { TagSpecifier as _envoy_config_metrics_v3_TagSpecifier, TagSpecifier__Output as _envoy_config_metrics_v3_TagSpecifier__Output } from '../../../../envoy/config/metrics/v3/TagSpecifier';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import type { StatsMatcher as _envoy_config_metrics_v3_StatsMatcher, StatsMatcher__Output as _envoy_config_metrics_v3_StatsMatcher__Output } from '../../../../envoy/config/metrics/v3/StatsMatcher';
import type { HistogramBucketSettings as _envoy_config_metrics_v3_HistogramBucketSettings, HistogramBucketSettings__Output as _envoy_config_metrics_v3_HistogramBucketSettings__Output } from '../../../../envoy/config/metrics/v3/HistogramBucketSettings';

export interface StatsConfig {
  'stats_tags'?: (_envoy_config_metrics_v3_TagSpecifier)[];
  'use_all_default_tags'?: (_google_protobuf_BoolValue | null);
  'stats_matcher'?: (_envoy_config_metrics_v3_StatsMatcher | null);
  'histogram_bucket_settings'?: (_envoy_config_metrics_v3_HistogramBucketSettings)[];
}

export interface StatsConfig__Output {
  'stats_tags'?: (_envoy_config_metrics_v3_TagSpecifier__Output)[];
  'use_all_default_tags'?: (_google_protobuf_BoolValue__Output);
  'stats_matcher'?: (_envoy_config_metrics_v3_StatsMatcher__Output);
  'histogram_bucket_settings'?: (_envoy_config_metrics_v3_HistogramBucketSettings__Output)[];
}
