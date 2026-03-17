export const NotificationCategory = {
  NEW_CASE: "new_case",
  SLA_WARNING: "sla_warning",
  SLA_BREACH: "sla_breach",
  CASE_UPDATE: "case_update",
  SYNC_COMPLETE: "sync_complete",
} as const;
export type NotificationCategory =
  (typeof NotificationCategory)[keyof typeof NotificationCategory];

export interface PushNotificationPayload {
  category: NotificationCategory;
  title: string;
  body: string;
  data: {
    caseId: string;
    [key: string]: string;
  };
}
