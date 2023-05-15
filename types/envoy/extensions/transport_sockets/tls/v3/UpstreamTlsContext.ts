// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/tls.proto

import type { CommonTlsContext as _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext, CommonTlsContext__Output as _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/CommonTlsContext';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../../google/protobuf/UInt32Value';

export interface UpstreamTlsContext {
  'common_tls_context'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext | null);
  'sni'?: (string);
  'allow_renegotiation'?: (boolean);
  'max_session_keys'?: (_google_protobuf_UInt32Value | null);
}

export interface UpstreamTlsContext__Output {
  'common_tls_context'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext__Output);
  'sni'?: (string);
  'allow_renegotiation'?: (boolean);
  'max_session_keys'?: (_google_protobuf_UInt32Value__Output);
}
