// Original file: .repos/udpa/udpa/annotations/status.proto

import type { PackageVersionStatus as _udpa_annotations_PackageVersionStatus, PackageVersionStatus__Output as _udpa_annotations_PackageVersionStatus__Output } from '../../udpa/annotations/PackageVersionStatus';

export interface StatusAnnotation {
  'work_in_progress'?: (boolean);
  'package_version_status'?: (_udpa_annotations_PackageVersionStatus);
}

export interface StatusAnnotation__Output {
  'work_in_progress'?: (boolean);
  'package_version_status'?: (_udpa_annotations_PackageVersionStatus__Output);
}
