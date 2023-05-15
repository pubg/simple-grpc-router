// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/tls.proto

import type { CommonTlsContext as _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext, CommonTlsContext__Output as _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/CommonTlsContext';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../../google/protobuf/BoolValue';
import type { TlsSessionTicketKeys as _envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys, TlsSessionTicketKeys__Output as _envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/TlsSessionTicketKeys';
import type { SdsSecretConfig as _envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig, SdsSecretConfig__Output as _envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/SdsSecretConfig';
import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../../google/protobuf/Duration';

// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/tls.proto

export const _envoy_extensions_transport_sockets_tls_v3_DownstreamTlsContext_OcspStaplePolicy = {
  LENIENT_STAPLING: 0,
  STRICT_STAPLING: 1,
  MUST_STAPLE: 2,
} as const;

export type _envoy_extensions_transport_sockets_tls_v3_DownstreamTlsContext_OcspStaplePolicy =
  | 'LENIENT_STAPLING'
  | 0
  | 'STRICT_STAPLING'
  | 1
  | 'MUST_STAPLE'
  | 2

export type _envoy_extensions_transport_sockets_tls_v3_DownstreamTlsContext_OcspStaplePolicy__Output = typeof _envoy_extensions_transport_sockets_tls_v3_DownstreamTlsContext_OcspStaplePolicy[keyof typeof _envoy_extensions_transport_sockets_tls_v3_DownstreamTlsContext_OcspStaplePolicy]

export interface DownstreamTlsContext {
  'common_tls_context'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext | null);
  'require_client_certificate'?: (_google_protobuf_BoolValue | null);
  'require_sni'?: (_google_protobuf_BoolValue | null);
  'session_ticket_keys'?: (_envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys | null);
  'session_ticket_keys_sds_secret_config'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig | null);
  'session_timeout'?: (_google_protobuf_Duration | null);
  'disable_stateless_session_resumption'?: (boolean);
  'ocsp_staple_policy'?: (_envoy_extensions_transport_sockets_tls_v3_DownstreamTlsContext_OcspStaplePolicy);
  'full_scan_certs_on_sni_mismatch'?: (_google_protobuf_BoolValue | null);
  'session_ticket_keys_type'?: "session_ticket_keys"|"session_ticket_keys_sds_secret_config"|"disable_stateless_session_resumption";
}

export interface DownstreamTlsContext__Output {
  'common_tls_context'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext__Output);
  'require_client_certificate'?: (_google_protobuf_BoolValue__Output);
  'require_sni'?: (_google_protobuf_BoolValue__Output);
  'session_ticket_keys'?: (_envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys__Output);
  'session_ticket_keys_sds_secret_config'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig__Output);
  'session_timeout'?: (_google_protobuf_Duration__Output);
  'disable_stateless_session_resumption'?: (boolean);
  'ocsp_staple_policy'?: (_envoy_extensions_transport_sockets_tls_v3_DownstreamTlsContext_OcspStaplePolicy__Output);
  'full_scan_certs_on_sni_mismatch'?: (_google_protobuf_BoolValue__Output);
}
