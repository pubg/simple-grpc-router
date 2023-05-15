// Original file: .repos/envoy/api/envoy/extensions/transport_sockets/tls/v3/tls.proto

import type { TlsParameters as _envoy_extensions_transport_sockets_tls_v3_TlsParameters, TlsParameters__Output as _envoy_extensions_transport_sockets_tls_v3_TlsParameters__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/TlsParameters';
import type { TlsCertificate as _envoy_extensions_transport_sockets_tls_v3_TlsCertificate, TlsCertificate__Output as _envoy_extensions_transport_sockets_tls_v3_TlsCertificate__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/TlsCertificate';
import type { CertificateValidationContext as _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext, CertificateValidationContext__Output as _envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/CertificateValidationContext';
import type { SdsSecretConfig as _envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig, SdsSecretConfig__Output as _envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/SdsSecretConfig';
import type { TypedExtensionConfig as _envoy_config_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _envoy_config_core_v3_TypedExtensionConfig__Output } from '../../../../../envoy/config/core/v3/TypedExtensionConfig';
import type { CertificateProviderPluginInstance as _envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance, CertificateProviderPluginInstance__Output as _envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/CertificateProviderPluginInstance';
import type { TlsKeyLog as _envoy_extensions_transport_sockets_tls_v3_TlsKeyLog, TlsKeyLog__Output as _envoy_extensions_transport_sockets_tls_v3_TlsKeyLog__Output } from '../../../../../envoy/extensions/transport_sockets/tls/v3/TlsKeyLog';

export interface _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider {
  'name'?: (string);
  'typed_config'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'config'?: "typed_config";
}

export interface _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider__Output {
  'name'?: (string);
  'typed_config'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
}

export interface _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance {
  'instance_name'?: (string);
  'certificate_name'?: (string);
}

export interface _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance__Output {
  'instance_name'?: (string);
  'certificate_name'?: (string);
}

export interface _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CombinedCertificateValidationContext {
  'default_validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext | null);
  'validation_context_sds_secret_config'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig | null);
  'validation_context_certificate_provider'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider | null);
  'validation_context_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance | null);
}

export interface _envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CombinedCertificateValidationContext__Output {
  'default_validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext__Output);
  'validation_context_sds_secret_config'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig__Output);
  'validation_context_certificate_provider'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider__Output);
  'validation_context_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance__Output);
}

export interface CommonTlsContext {
  'tls_params'?: (_envoy_extensions_transport_sockets_tls_v3_TlsParameters | null);
  'tls_certificates'?: (_envoy_extensions_transport_sockets_tls_v3_TlsCertificate)[];
  'validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext | null);
  'alpn_protocols'?: (string)[];
  'tls_certificate_sds_secret_configs'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig)[];
  'validation_context_sds_secret_config'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig | null);
  'combined_validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CombinedCertificateValidationContext | null);
  'tls_certificate_certificate_provider'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider | null);
  'validation_context_certificate_provider'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider | null);
  'tls_certificate_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance | null);
  'validation_context_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance | null);
  'custom_handshaker'?: (_envoy_config_core_v3_TypedExtensionConfig | null);
  'tls_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance | null);
  'key_log'?: (_envoy_extensions_transport_sockets_tls_v3_TlsKeyLog | null);
  'validation_context_type'?: "validation_context"|"validation_context_sds_secret_config"|"combined_validation_context"|"validation_context_certificate_provider"|"validation_context_certificate_provider_instance";
}

export interface CommonTlsContext__Output {
  'tls_params'?: (_envoy_extensions_transport_sockets_tls_v3_TlsParameters__Output);
  'tls_certificates'?: (_envoy_extensions_transport_sockets_tls_v3_TlsCertificate__Output)[];
  'validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateValidationContext__Output);
  'alpn_protocols'?: (string)[];
  'tls_certificate_sds_secret_configs'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig__Output)[];
  'validation_context_sds_secret_config'?: (_envoy_extensions_transport_sockets_tls_v3_SdsSecretConfig__Output);
  'combined_validation_context'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CombinedCertificateValidationContext__Output);
  'tls_certificate_certificate_provider'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider__Output);
  'validation_context_certificate_provider'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProvider__Output);
  'tls_certificate_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance__Output);
  'validation_context_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CommonTlsContext_CertificateProviderInstance__Output);
  'custom_handshaker'?: (_envoy_config_core_v3_TypedExtensionConfig__Output);
  'tls_certificate_provider_instance'?: (_envoy_extensions_transport_sockets_tls_v3_CertificateProviderPluginInstance__Output);
  'key_log'?: (_envoy_extensions_transport_sockets_tls_v3_TlsKeyLog__Output);
}
