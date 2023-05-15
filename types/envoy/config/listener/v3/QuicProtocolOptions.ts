// Original file: .repos/envoy/api/envoy/config/listener/v3/quic_config.proto

import type { QuicProtocolOptions as _envoy_config_core_v3_QuicProtocolOptions, QuicProtocolOptions__Output as _envoy_config_core_v3_QuicProtocolOptions__Output } from '../../../../envoy/config/core/v3/QuicProtocolOptions';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { RuntimeFeatureFlag as _envoy_config_core_v3_RuntimeFeatureFlag, RuntimeFeatureFlag__Output as _envoy_config_core_v3_RuntimeFeatureFlag__Output } from '../../../../envoy/config/core/v3/RuntimeFeatureFlag';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface QuicProtocolOptions {
  'quic_protocol_options'?: (_envoy_config_core_v3_QuicProtocolOptions | null);
  'idle_timeout'?: (_google_protobuf_Duration | null);
  'crypto_handshake_timeout'?: (_google_protobuf_Duration | null);
  'enabled'?: (_envoy_config_core_v3_RuntimeFeatureFlag | null);
  'packets_to_read_to_connection_count_ratio'?: (_google_protobuf_UInt32Value | null);
  'crypto_stream_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'proof_source_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'connection_id_generator_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'server_preferred_address_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
}

export interface QuicProtocolOptions__Output {
  'quic_protocol_options'?: (_envoy_config_core_v3_QuicProtocolOptions__Output);
  'idle_timeout'?: (_google_protobuf_Duration__Output);
  'crypto_handshake_timeout'?: (_google_protobuf_Duration__Output);
  'enabled'?: (_envoy_config_core_v3_RuntimeFeatureFlag__Output);
  'packets_to_read_to_connection_count_ratio'?: (_google_protobuf_UInt32Value__Output);
  'crypto_stream_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'proof_source_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'connection_id_generator_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'server_preferred_address_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}
