// Original file: .repos/envoy/api/envoy/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto

import type { ResponseMapper as _envoy_extensions_filters_network_http_connection_manager_v3_ResponseMapper, ResponseMapper__Output as _envoy_extensions_filters_network_http_connection_manager_v3_ResponseMapper__Output } from '../../../../../../envoy/extensions/filters/network/http_connection_manager/v3/ResponseMapper';
import type { SubstitutionFormatString as _envoy_config_core_v3_SubstitutionFormatString, SubstitutionFormatString__Output as _envoy_config_core_v3_SubstitutionFormatString__Output } from '../../../../../../envoy/config/core/v3/SubstitutionFormatString';

export interface LocalReplyConfig {
  'mappers'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ResponseMapper)[];
  'body_format'?: (_envoy_config_core_v3_SubstitutionFormatString | null);
}

export interface LocalReplyConfig__Output {
  'mappers'?: (_envoy_extensions_filters_network_http_connection_manager_v3_ResponseMapper__Output)[];
  'body_format'?: (_envoy_config_core_v3_SubstitutionFormatString__Output);
}
