// Original file: .repos/xds/xds/type/matcher/v3/matcher.proto

import type { Matcher as _xds_type_matcher_v3_Matcher, Matcher__Output as _xds_type_matcher_v3_Matcher__Output } from '../../../../xds/type/matcher/v3/Matcher';
import type { TypedExtensionConfig as _xds_core_v3_TypedExtensionConfig, TypedExtensionConfig__Output as _xds_core_v3_TypedExtensionConfig__Output } from '../../../../xds/core/v3/TypedExtensionConfig';
import type { StringMatcher as _xds_type_matcher_v3_StringMatcher, StringMatcher__Output as _xds_type_matcher_v3_StringMatcher__Output } from '../../../../xds/type/matcher/v3/StringMatcher';

export interface _xds_type_matcher_v3_Matcher_MatcherList_FieldMatcher {
  'predicate'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate | null);
  'on_match'?: (_xds_type_matcher_v3_Matcher_OnMatch | null);
}

export interface _xds_type_matcher_v3_Matcher_MatcherList_FieldMatcher__Output {
  'predicate'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate__Output);
  'on_match'?: (_xds_type_matcher_v3_Matcher_OnMatch__Output);
}

export interface _xds_type_matcher_v3_Matcher_MatcherTree_MatchMap {
  'map'?: ({[key: string]: _xds_type_matcher_v3_Matcher_OnMatch});
}

export interface _xds_type_matcher_v3_Matcher_MatcherTree_MatchMap__Output {
  'map'?: ({[key: string]: _xds_type_matcher_v3_Matcher_OnMatch__Output});
}

export interface _xds_type_matcher_v3_Matcher_MatcherList {
  'matchers'?: (_xds_type_matcher_v3_Matcher_MatcherList_FieldMatcher)[];
}

export interface _xds_type_matcher_v3_Matcher_MatcherList__Output {
  'matchers'?: (_xds_type_matcher_v3_Matcher_MatcherList_FieldMatcher__Output)[];
}

export interface _xds_type_matcher_v3_Matcher_MatcherTree {
  'input'?: (_xds_core_v3_TypedExtensionConfig | null);
  'exact_match_map'?: (_xds_type_matcher_v3_Matcher_MatcherTree_MatchMap | null);
  'prefix_match_map'?: (_xds_type_matcher_v3_Matcher_MatcherTree_MatchMap | null);
  'custom_match'?: (_xds_core_v3_TypedExtensionConfig | null);
  'tree_type'?: "exact_match_map"|"prefix_match_map"|"custom_match";
}

export interface _xds_type_matcher_v3_Matcher_MatcherTree__Output {
  'input'?: (_xds_core_v3_TypedExtensionConfig__Output);
  'exact_match_map'?: (_xds_type_matcher_v3_Matcher_MatcherTree_MatchMap__Output);
  'prefix_match_map'?: (_xds_type_matcher_v3_Matcher_MatcherTree_MatchMap__Output);
  'custom_match'?: (_xds_core_v3_TypedExtensionConfig__Output);
}

export interface _xds_type_matcher_v3_Matcher_OnMatch {
  'matcher'?: (_xds_type_matcher_v3_Matcher | null);
  'action'?: (_xds_core_v3_TypedExtensionConfig | null);
  'on_match'?: "matcher"|"action";
}

export interface _xds_type_matcher_v3_Matcher_OnMatch__Output {
  'matcher'?: (_xds_type_matcher_v3_Matcher__Output);
  'action'?: (_xds_core_v3_TypedExtensionConfig__Output);
}

export interface _xds_type_matcher_v3_Matcher_MatcherList_Predicate {
  'single_predicate'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate_SinglePredicate | null);
  'or_matcher'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate_PredicateList | null);
  'and_matcher'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate_PredicateList | null);
  'not_matcher'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate | null);
  'match_type'?: "single_predicate"|"or_matcher"|"and_matcher"|"not_matcher";
}

export interface _xds_type_matcher_v3_Matcher_MatcherList_Predicate__Output {
  'single_predicate'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate_SinglePredicate__Output);
  'or_matcher'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate_PredicateList__Output);
  'and_matcher'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate_PredicateList__Output);
  'not_matcher'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate__Output);
}

export interface _xds_type_matcher_v3_Matcher_MatcherList_Predicate_PredicateList {
  'predicate'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate)[];
}

export interface _xds_type_matcher_v3_Matcher_MatcherList_Predicate_PredicateList__Output {
  'predicate'?: (_xds_type_matcher_v3_Matcher_MatcherList_Predicate__Output)[];
}

export interface _xds_type_matcher_v3_Matcher_MatcherList_Predicate_SinglePredicate {
  'input'?: (_xds_core_v3_TypedExtensionConfig | null);
  'value_match'?: (_xds_type_matcher_v3_StringMatcher | null);
  'custom_match'?: (_xds_core_v3_TypedExtensionConfig | null);
  'matcher'?: "value_match"|"custom_match";
}

export interface _xds_type_matcher_v3_Matcher_MatcherList_Predicate_SinglePredicate__Output {
  'input'?: (_xds_core_v3_TypedExtensionConfig__Output);
  'value_match'?: (_xds_type_matcher_v3_StringMatcher__Output);
  'custom_match'?: (_xds_core_v3_TypedExtensionConfig__Output);
}

export interface Matcher {
  'matcher_list'?: (_xds_type_matcher_v3_Matcher_MatcherList | null);
  'matcher_tree'?: (_xds_type_matcher_v3_Matcher_MatcherTree | null);
  'on_no_match'?: (_xds_type_matcher_v3_Matcher_OnMatch | null);
  'matcher_type'?: "matcher_list"|"matcher_tree";
}

export interface Matcher__Output {
  'matcher_list'?: (_xds_type_matcher_v3_Matcher_MatcherList__Output);
  'matcher_tree'?: (_xds_type_matcher_v3_Matcher_MatcherTree__Output);
  'on_no_match'?: (_xds_type_matcher_v3_Matcher_OnMatch__Output);
}
