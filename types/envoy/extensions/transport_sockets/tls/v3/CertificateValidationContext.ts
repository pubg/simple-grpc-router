// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto

import type { DataSource as _envoy_config_core_v3_DataSource, DataSource__Output as _envoy_config_core_v3_DataSource__Output } from '../../../../../envoy/config/core/v3/DataSource';
import type { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../../google/protobuf/BoolValue';
import type { StringMatcher as _envoy_type_matcher_v3_StringMatcher, StringMatcher__Output as _envoy_type_matcher_v3_StringMatcher__Output } from '../../../../../envoy/type/matcher/v3/StringMatcher';
import type { WatchedDirectory as _envoy_config_core_v3_WatchedDirectory, WatchedDirectory__Output as _envoy_config_core_v3_WatchedDirectory__Output } from '../../../../../envoy/config/core/v3/WatchedDirectory';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { CertificateProviderPluginInstance as _envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance, CertificateProviderPluginInstance__Output as _envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/CertificateProviderPluginInstance';
import type { SubjectAltNameMatcher as _envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher, SubjectAltNameMatcher__Output as _envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/SubjectAltNameMatcher';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../../google/protobuf/UInt32Value';

// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/common.proto

export const _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext_TrustChainVerification = {
  VERIFY_TRUST_CHAIN: 0,
  ACCEPT_UNTRUSTED: 1,
} as const;

export type _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext_TrustChainVerification =
  | 'VERIFY_TRUST_CHAIN'
  | 0
  | 'ACCEPT_UNTRUSTED'
  | 1

export type _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext_TrustChainVerification__Output = typeof _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext_TrustChainVerification[keyof typeof _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext_TrustChainVerification]

export interface CertificateValidationContext {
  'trusted_ca'?: (_envoy_config_core_v3_DataSource | null);
  'verify_certificate_hash'?: (string)[];
  'verify_certificate_spki'?: (string)[];
  'require_signed_certificate_timestamp'?: (_google_protobuf_BoolValue | null);
  'crl'?: (_envoy_config_core_v3_DataSource | null);
  'allow_expired_certificate'?: (boolean);
  'match_subject_alt_names'?: (_envoy_type_matcher_v3_StringMatcher)[];
  'trust_chain_verification'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext_TrustChainVerification);
  'watched_directory'?: (_envoy_config_core_v3_WatchedDirectory | null);
  'custom_validator_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'ca_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance | null);
  'only_verify_leaf_cert_crl'?: (boolean);
  'match_typed_subject_alt_names'?: (_envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher)[];
  'max_verify_depth'?: (_google_protobuf_UInt32Value | null);
}

export interface CertificateValidationContext__Output {
  'trusted_ca'?: (_envoy_config_core_v3_DataSource__Output);
  'verify_certificate_hash'?: (string)[];
  'verify_certificate_spki'?: (string)[];
  'require_signed_certificate_timestamp'?: (_google_protobuf_BoolValue__Output);
  'crl'?: (_envoy_config_core_v3_DataSource__Output);
  'allow_expired_certificate'?: (boolean);
  'match_subject_alt_names'?: (_envoy_type_matcher_v3_StringMatcher__Output)[];
  'trust_chain_verification'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext_TrustChainVerification__Output);
  'watched_directory'?: (_envoy_config_core_v3_WatchedDirectory__Output);
  'custom_validator_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'ca_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance__Output);
  'only_verify_leaf_cert_crl'?: (boolean);
  'match_typed_subject_alt_names'?: (_envoy_extensions_transport_sockets_tls_v3_SubjectAltNameMatcher__Output)[];
  'max_verify_depth'?: (_google_protobuf_UInt32Value__Output);
}
