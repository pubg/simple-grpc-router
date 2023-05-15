// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/secret.proto

import type { TlsCertificate as _envoy_extensions_transport_sockets_tls_v3_TlsCertificate, TlsCertificate__Output as _envoy_extensions_transport_sockets_tls_v3_TlsCertificate__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/TlsCertificate';
import type { TlsSessionTicketKeys as _envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys, TlsSessionTicketKeys__Output as _envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/TlsSessionTicketKeys';
import type { CertificateValidationContext as _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext, CertificateValidationContext__Output as _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/CertificateValidationContext';
import type { GenericSecret as _envoy_extensions_transport_sockets_tls_v3_GenericSecret, GenericSecret__Output as _envoy_extensions_transport_sockets_tls_v3_GenericSecret__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/GenericSecret';

export interface Secret {
  'name'?: (string);
  'tls_certificate'?: (_envoy_extensions_transport_sockets_tls_v3_TlsCertificate | null);
  'session_ticket_keys'?: (_envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys | null);
  'validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext | null);
  'generic_secret'?: (_envoy_extensions_transport_sockets_tls_v3_GenericSecret | null);
  'type'?: "tls_certificate"|"session_ticket_keys"|"validation_context"|"generic_secret";
}

export interface Secret__Output {
  'name'?: (string);
  'tls_certificate'?: (_envoy_extensions_transport_sockets_tls_v3_TlsCertificate__Output);
  'session_ticket_keys'?: (_envoy_extensions_transport_sockets_tls_v3_TlsSessionTicketKeys__Output);
  'validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext__Output);
  'generic_secret'?: (_envoy_extensions_transport_sockets_tls_v3_GenericSecret__Output);
}
