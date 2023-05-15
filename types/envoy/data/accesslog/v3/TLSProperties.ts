// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';

export interface _envoy_data_accesslog_v3_TLSProperties_CertificateProperties {
  'subject_alt_name'?: (_envoy_data_accesslog_v3_TLSProperties_CertificateProperties_SubjectAltName)[];
  'subject'?: (string);
}

export interface _envoy_data_accesslog_v3_TLSProperties_CertificateProperties__Output {
  'subject_alt_name'?: (_envoy_data_accesslog_v3_TLSProperties_CertificateProperties_SubjectAltName__Output)[];
  'subject'?: (string);
}

export interface _envoy_data_accesslog_v3_TLSProperties_CertificateProperties_SubjectAltName {
  'uri'?: (string);
  'dns'?: (string);
  'san'?: "uri"|"dns";
}

export interface _envoy_data_accesslog_v3_TLSProperties_CertificateProperties_SubjectAltName__Output {
  'uri'?: (string);
  'dns'?: (string);
}

// Original file: .repos/envoy/api/envoy/data/accesslog/v3/accesslog.proto

export const _envoy_data_accesslog_v3_TLSProperties_TLSVersion = {
  VERSION_UNSPECIFIED: 0,
  TLSv1: 1,
  TLSv1_1: 2,
  TLSv1_2: 3,
  TLSv1_3: 4,
} as const;

export type _envoy_data_accesslog_v3_TLSProperties_TLSVersion =
  | 'VERSION_UNSPECIFIED'
  | 0
  | 'TLSv1'
  | 1
  | 'TLSv1_1'
  | 2
  | 'TLSv1_2'
  | 3
  | 'TLSv1_3'
  | 4

export type _envoy_data_accesslog_v3_TLSProperties_TLSVersion__Output = typeof _envoy_data_accesslog_v3_TLSProperties_TLSVersion[keyof typeof _envoy_data_accesslog_v3_TLSProperties_TLSVersion]

export interface TLSProperties {
  'tls_version'?: (_envoy_data_accesslog_v3_TLSProperties_TLSVersion);
  'tls_cipher_suite'?: (_google_protobuf_UInt32Value | null);
  'tls_sni_hostname'?: (string);
  'local_certificate_properties'?: (_envoy_data_accesslog_v3_TLSProperties_CertificateProperties | null);
  'peer_certificate_properties'?: (_envoy_data_accesslog_v3_TLSProperties_CertificateProperties | null);
  'tls_session_id'?: (string);
  'ja3_fingerprint'?: (string);
}

export interface TLSProperties__Output {
  'tls_version'?: (_envoy_data_accesslog_v3_TLSProperties_TLSVersion__Output);
  'tls_cipher_suite'?: (_google_protobuf_UInt32Value__Output);
  'tls_sni_hostname'?: (string);
  'local_certificate_properties'?: (_envoy_data_accesslog_v3_TLSProperties_CertificateProperties__Output);
  'peer_certificate_properties'?: (_envoy_data_accesslog_v3_TLSProperties_CertificateProperties__Output);
  'tls_session_id'?: (string);
  'ja3_fingerprint'?: (string);
}
