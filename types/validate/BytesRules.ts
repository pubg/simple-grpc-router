// Original file: .repos/protoc-gen-validate/validate/validate.proto

import type { Long } from '@grpc/proto-loader';

export interface BytesRules {
  'const'?: (Buffer | Uint8Array | string);
  'min_len'?: (number | string | Long);
  'max_len'?: (number | string | Long);
  'pattern'?: (string);
  'prefix'?: (Buffer | Uint8Array | string);
  'suffix'?: (Buffer | Uint8Array | string);
  'contains'?: (Buffer | Uint8Array | string);
  'in'?: (Buffer | Uint8Array | string)[];
  'not_in'?: (Buffer | Uint8Array | string)[];
  'ip'?: (boolean);
  'ipv4'?: (boolean);
  'ipv6'?: (boolean);
  'len'?: (number | string | Long);
  'ignore_empty'?: (boolean);
  'well_known'?: "ip"|"ipv4"|"ipv6";
}

export interface BytesRules__Output {
  'const'?: (Buffer);
  'min_len'?: (Long);
  'max_len'?: (Long);
  'pattern'?: (string);
  'prefix'?: (Buffer);
  'suffix'?: (Buffer);
  'contains'?: (Buffer);
  'in'?: (Buffer)[];
  'not_in'?: (Buffer)[];
  'ip'?: (boolean);
  'ipv4'?: (boolean);
  'ipv6'?: (boolean);
  'len'?: (Long);
  'ignore_empty'?: (boolean);
}
