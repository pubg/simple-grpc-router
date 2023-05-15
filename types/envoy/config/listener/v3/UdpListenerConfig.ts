// Original file: .repos/envoy/api/envoy/config/listener/v3/udp_listener_config.proto

import type { UdpSocketConfig as _envoy_config_core_v3_UdpSocketConfig, UdpSocketConfig__Output as _envoy_config_core_v3_UdpSocketConfig__Output } from '../../../../envoy/config/core/v3/UdpSocketConfig';
import type { QuicProtocolOptions as _envoy_config_listener_v3_QuicProtocolOptions, QuicProtocolOptions__Output as _envoy_config_listener_v3_QuicProtocolOptions__Output } from '../../../../envoy/config/listener/v3/QuicProtocolOptions';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../envoy/config/core/v3/TypedExtensionConfig';

export interface UdpListenerConfig {
  'downstream_socket_config'?: (_envoy_config_core_v3_UdpSocketConfig | null);
  'quic_options'?: (_envoy_config_listener_v3_QuicProtocolOptions | null);
  'udp_packet_packet_writer_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
}

export interface UdpListenerConfig__Output {
  'downstream_socket_config'?: (_envoy_config_core_v3_UdpSocketConfig__Output);
  'quic_options'?: (_envoy_config_listener_v3_QuicProtocolOptions__Output);
  'udp_packet_packet_writer_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}
