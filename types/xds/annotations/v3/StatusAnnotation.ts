// Original file: .repos/xds/xds/annotations/v3/status.proto

import type { PackageVersionStatus as _xds_annotations_v3_PackageVersionStatus, PackageVersionStatus__Output as _xds_annotations_v3_PackageVersionStatus__Output } from '../../../xds/annotations/v3/PackageVersionStatus';

export interface StatusAnnotation {
  'work_in_progress'?: (boolean);
  'package_version_status'?: (_xds_annotations_v3_PackageVersionStatus);
}

export interface StatusAnnotation__Output {
  'work_in_progress'?: (boolean);
  'package_version_status'?: (_xds_annotations_v3_PackageVersionStatus__Output);
}
