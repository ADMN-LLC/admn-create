import type { AssetMetadata } from '@meshsdk/core';

// Reference: https://www.copyright.gov/eco/help-case-definitions.html
export enum CaseStatus {
  Open,     // Cases currently in process in the Copyright Office.
  Working,  // Cases that you have started but not submitted for payment (not in your Cart).
  InCart,   // Cases in your Cart awaiting payment (not yet submitted to the Copyright Office).
  Closed,   // Cases that have been completed by the Copyright Office.
  Discarded // Cases that have been discarded.
}

export declare type CopyrightMetadata = AssetMetadata & {
  application_id: string;
  case_id: string;
  receipt_date: Date;
  status: CaseStatus;
  title: string;
};
