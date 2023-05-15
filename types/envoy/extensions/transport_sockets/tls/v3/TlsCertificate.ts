// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto

import type { DataSource as _envoy_config_core_v3_DataSource, DataSource__Output as _envoy_config_core_v3_DataSource__Output } from '../../../../../envoy/config/core/v3/DataSource';
import type { PrivateKeyProvider as _envoy_extensions_transport_sockets_tls_v3_PrivateKeyProvider, PrivateKeyProvider__Output as _envoy_extensions_transport_sockets_tls_v3_PrivateKeyProvider__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/PrivateKeyProvider';
import type { WatchedDirectory as _envoy_config_core_v3_WatchedDirectory, WatchedDirectory__Output as _envoy_config_core_v3_WatchedDirectory__Output } from '../../../../../envoy/config/core/v3/WatchedDirectory';

export interface TlsCertificate {
  'certificate_chain'?: (_envoy_config_core_v3_DataSource | null);
  'private_key'?: (_envoy_config_core_v3_DataSource | null);
  'password'?: (_envoy_config_core_v3_DataSource | null);
  'ocsp_staple'?: (_envoy_config_core_v3_DataSource | null);
  'signed_certificate_timestamp'?: (_envoy_config_core_v3_DataSource)[];
  'private_key_provider'?: (_envoy_extensions_transport_sockets_tls_v3_PrivateKeyProvider | null);
  'watched_directory'?: (_envoy_config_core_v3_WatchedDirectory | null);
  'pkcs12'?: (_envoy_config_core_v3_DataSource | null);
}

export interface TlsCertificate__Output {
  'certificate_chain'?: (_envoy_config_core_v3_DataSource__Output);
  'private_key'?: (_envoy_config_core_v3_DataSource__Output);
  'password'?: (_envoy_config_core_v3_DataSource__Output);
  'ocsp_staple'?: (_envoy_config_core_v3_DataSource__Output);
  'signed_certificate_timestamp'?: (_envoy_config_core_v3_DataSource__Output)[];
  'private_key_provider'?: (_envoy_extensions_transport_sockets_tls_v3_PrivateKeyProvider__Output);
  'watched_directory'?: (_envoy_config_core_v3_WatchedDirectory__Output);
  'pkcs12'?: (_envoy_config_core_v3_DataSource__Output);
}
