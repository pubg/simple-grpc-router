// Original file: .repos/envoy/api/envoy/config/core/v3/grpc_service.proto

import type { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import type { HeaderValue as _envoy_config_core_v3_HeaderValue, HeaderValue__Output as _envoy_config_core_v3_HeaderValue__Output } from '../../../../envoy/config/core/v3/HeaderValue';
import type { RetryPolicy as _envoy_config_core_v3_RetryPolicy, RetryPolicy__Output as _envoy_config_core_v3_RetryPolicy__Output } from '../../../../envoy/config/core/v3/RetryPolicy';
import type { Struct as _google_protobuf_Struct, Struct__Output as _google_protobuf_Struct__Output } from '../../../../google/protobuf/Struct';
import type { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import type { DataSource as _envoy_config_core_v3_DataSource, DataSource__Output as _envoy_config_core_v3_DataSource__Output } from '../../../../envoy/config/core/v3/DataSource';
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../../../../google/protobuf/Empty';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import type { Long } from '@grpc/proto-loader';

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials {
  'access_token'?: (string);
  'google_compute_engine'?: (_google_protobuf_Empty | null);
  'google_refresh_token'?: (string);
  'service_account_jwt_access'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_ServiceAccountJWTAccessCredentials | null);
  'google_iam'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_GoogleIAMCredentials | null);
  'from_plugin'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_MetadataCredentialsFromPlugin | null);
  'sts_service'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_StsService | null);
  'credential_specifier'?: "access_token"|"google_compute_engine"|"google_refresh_token"|"service_account_jwt_access"|"google_iam"|"from_plugin"|"sts_service";
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials__Output {
  'access_token'?: (string);
  'google_compute_engine'?: (_google_protobuf_Empty__Output);
  'google_refresh_token'?: (string);
  'service_account_jwt_access'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_ServiceAccountJWTAccessCredentials__Output);
  'google_iam'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_GoogleIAMCredentials__Output);
  'from_plugin'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_MetadataCredentialsFromPlugin__Output);
  'sts_service'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_StsService__Output);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs {
  'args'?: ({[key: string]: _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs_Value});
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs__Output {
  'args'?: ({[key: string]: _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs_Value__Output});
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelCredentials {
  'ssl_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_SslCredentials | null);
  'google_default'?: (_google_protobuf_Empty | null);
  'local_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_GoogleLocalCredentials | null);
  'credential_specifier'?: "ssl_credentials"|"google_default"|"local_credentials";
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelCredentials__Output {
  'ssl_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_SslCredentials__Output);
  'google_default'?: (_google_protobuf_Empty__Output);
  'local_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_GoogleLocalCredentials__Output);
}

export interface _envoy_config_core_v3_GrpcService_EnvoyGrpc {
  'cluster_name'?: (string);
  'authority'?: (string);
  'retry_policy'?: (_envoy_config_core_v3_RetryPolicy | null);
}

export interface _envoy_config_core_v3_GrpcService_EnvoyGrpc__Output {
  'cluster_name'?: (string);
  'authority'?: (string);
  'retry_policy'?: (_envoy_config_core_v3_RetryPolicy__Output);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc {
  'target_uri'?: (string);
  'channel_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelCredentials | null);
  'call_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials)[];
  'stat_prefix'?: (string);
  'credentials_factory_name'?: (string);
  'config'?: (_google_protobuf_Struct | null);
  'per_stream_buffer_limit_bytes'?: (_google_protobuf_UInt32Value | null);
  'channel_args'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs | null);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc__Output {
  'target_uri'?: (string);
  'channel_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelCredentials__Output);
  'call_credentials'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials__Output)[];
  'stat_prefix'?: (string);
  'credentials_factory_name'?: (string);
  'config'?: (_google_protobuf_Struct__Output);
  'per_stream_buffer_limit_bytes'?: (_google_protobuf_UInt32Value__Output);
  'channel_args'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs__Output);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_GoogleIAMCredentials {
  'authorization_token'?: (string);
  'authority_selector'?: (string);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_GoogleIAMCredentials__Output {
  'authorization_token'?: (string);
  'authority_selector'?: (string);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_GoogleLocalCredentials {
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_GoogleLocalCredentials__Output {
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_MetadataCredentialsFromPlugin {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any | null);
  'config_type'?: "typed_config";
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_MetadataCredentialsFromPlugin__Output {
  'name'?: (string);
  'typed_config'?: (_google_protobuf_Any__Output);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_ServiceAccountJWTAccessCredentials {
  'json_key'?: (string);
  'token_lifetime_seconds'?: (number | string | Long);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_ServiceAccountJWTAccessCredentials__Output {
  'json_key'?: (string);
  'token_lifetime_seconds'?: (Long);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_SslCredentials {
  'root_certs'?: (_envoy_config_core_v3_DataSource | null);
  'private_key'?: (_envoy_config_core_v3_DataSource | null);
  'cert_chain'?: (_envoy_config_core_v3_DataSource | null);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_SslCredentials__Output {
  'root_certs'?: (_envoy_config_core_v3_DataSource__Output);
  'private_key'?: (_envoy_config_core_v3_DataSource__Output);
  'cert_chain'?: (_envoy_config_core_v3_DataSource__Output);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_StsService {
  'token_exchange_service_uri'?: (string);
  'resource'?: (string);
  'audience'?: (string);
  'scope'?: (string);
  'requested_token_type'?: (string);
  'subject_token_path'?: (string);
  'subject_token_type'?: (string);
  'actor_token_path'?: (string);
  'actor_token_type'?: (string);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_CallCredentials_StsService__Output {
  'token_exchange_service_uri'?: (string);
  'resource'?: (string);
  'audience'?: (string);
  'scope'?: (string);
  'requested_token_type'?: (string);
  'subject_token_path'?: (string);
  'subject_token_type'?: (string);
  'actor_token_path'?: (string);
  'actor_token_type'?: (string);
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs_Value {
  'string_value'?: (string);
  'int_value'?: (number | string | Long);
  'value_specifier'?: "string_value"|"int_value";
}

export interface _envoy_config_core_v3_GrpcService_GoogleGrpc_ChannelArgs_Value__Output {
  'string_value'?: (string);
  'int_value'?: (Long);
}

export interface GrpcService {
  'envoy_grpc'?: (_envoy_config_core_v3_GrpcService_EnvoyGrpc | null);
  'google_grpc'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc | null);
  'timeout'?: (_google_protobuf_Duration | null);
  'initial_metadata'?: (_envoy_config_core_v3_HeaderValue)[];
  'target_specifier'?: "envoy_grpc"|"google_grpc";
}

export interface GrpcService__Output {
  'envoy_grpc'?: (_envoy_config_core_v3_GrpcService_EnvoyGrpc__Output);
  'google_grpc'?: (_envoy_config_core_v3_GrpcService_GoogleGrpc__Output);
  'timeout'?: (_google_protobuf_Duration__Output);
  'initial_metadata'?: (_envoy_config_core_v3_HeaderValue__Output)[];
}
