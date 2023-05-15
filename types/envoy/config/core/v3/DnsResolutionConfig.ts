// Original file: .repos/envoy/api/envoy/config/core/v3/resolver.proto

import type { Address as _envoy_config_core_v3_Address, Address__Output as _envoy_config_core_v3_Address__Output } from '../../../../envoy/config/core/v3/Address';
import type { DnsResolverOptions as _envoy_config_core_v3_DnsResolverOptions, DnsResolverOptions__Output as _envoy_config_core_v3_DnsResolverOptions__Output } from '../../../../envoy/config/core/v3/DnsResolverOptions';

export interface DnsResolutionConfig {
  'resolvers'?: (_envoy_config_core_v3_Address)[];
  'dns_resolver_options'?: (_envoy_config_core_v3_DnsResolverOptions | null);
}

export interface DnsResolutionConfig__Output {
  'resolvers'?: (_envoy_config_core_v3_Address__Output)[];
  'dns_resolver_options'?: (_envoy_config_core_v3_DnsResolverOptions__Output);
}
