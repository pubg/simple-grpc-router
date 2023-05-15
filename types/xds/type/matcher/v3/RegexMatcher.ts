// Original file: .repos/xds/xds/type/matcher/v3/regex.proto


export interface _xds_type_matcher_v3_RegexMatcher_GoogleRE2 {
}

export interface _xds_type_matcher_v3_RegexMatcher_GoogleRE2__Output {
}

export interface RegexMatcher {
  'google_re2'?: (_xds_type_matcher_v3_RegexMatcher_GoogleRE2 | null);
  'regex'?: (string);
  'engine_type'?: "google_re2";
}

export interface RegexMatcher__Output {
  'google_re2'?: (_xds_type_matcher_v3_RegexMatcher_GoogleRE2__Output);
  'regex'?: (string);
}
