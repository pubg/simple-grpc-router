// Original file: .repos/envoy/api/envoy/config/core/v3/event_service_config.proto

import type { GrpcService as _envoy_config_core_v3_GrpcService, GrpcService__Output as _envoy_config_core_v3_GrpcService__Output } from '../../../../envoy/config/core/v3/GrpcService';

export interface EventServiceConfig {
  'grpc_service'?: (_envoy_config_core_v3_GrpcService | null);
  'config_source_specifier'?: "grpc_service";
}

export interface EventServiceConfig__Output {
  'grpc_service'?: (_envoy_config_core_v3_GrpcService__Output);
}
