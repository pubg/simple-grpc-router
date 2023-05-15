// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto


// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto

export const _envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol = {
  TLS_AUTO: 0,
  TLSv1_0: 1,
  TLSv1_1: 2,
  TLSv1_2: 3,
  TLSv1_3: 4,
} as const;

export type _envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol =
  | 'TLS_AUTO'
  | 0
  | 'TLSv1_0'
  | 1
  | 'TLSv1_1'
  | 2
  | 'TLSv1_2'
  | 3
  | 'TLSv1_3'
  | 4

export type _envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol__Output = typeof _envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol[keyof typeof _envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol]

export interface TlsParameters {
  'tls_minimum_protocol_version'?: (_envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol);
  'tls_maximum_protocol_version'?: (_envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol);
  'cipher_suites'?: (string)[];
  'ecdh_curves'?: (string)[];
  'signature_algorithms'?: (string)[];
}

export interface TlsParameters__Output {
  'tls_minimum_protocol_version'?: (_envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol__Output);
  'tls_maximum_protocol_version'?: (_envoy_extensions_transport_sockets_tls_v3_TlsParameters_TlsProtocol__Output);
  'cipher_suites'?: (string)[];
  'ecdh_curves'?: (string)[];
  'signature_algorithms'?: (string)[];
}
