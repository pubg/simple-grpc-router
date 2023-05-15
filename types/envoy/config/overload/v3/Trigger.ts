// Original file: .repos/envoy/api/envoy/config/overload/v3/overload.proto

import type { ThresholdTrigger as _envoy_config_overload_v3_ThresholdTrigger, ThresholdTrigger__Output as _envoy_config_overload_v3_ThresholdTrigger__Output } from '../../../../envoy/config/overload/v3/ThresholdTrigger';
import type { ScaledTrigger as _envoy_config_overload_v3_ScaledTrigger, ScaledTrigger__Output as _envoy_config_overload_v3_ScaledTrigger__Output } from '../../../../envoy/config/overload/v3/ScaledTrigger';

export interface Trigger {
  'name'?: (string);
  'threshold'?: (_envoy_config_overload_v3_ThresholdTrigger | null);
  'scaled'?: (_envoy_config_overload_v3_ScaledTrigger | null);
  'trigger_oneof'?: "threshold"|"scaled";
}

export interface Trigger__Output {
  'name'?: (string);
  'threshold'?: (_envoy_config_overload_v3_ThresholdTrigger__Output);
  'scaled'?: (_envoy_config_overload_v3_ScaledTrigger__Output);
}
