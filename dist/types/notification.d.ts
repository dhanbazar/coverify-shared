export declare const NotificationCategory: {
    readonly NEW_CASE: "new_case";
    readonly SLA_WARNING: "sla_warning";
    readonly SLA_BREACH: "sla_breach";
    readonly CASE_UPDATE: "case_update";
    readonly SYNC_COMPLETE: "sync_complete";
};
export type NotificationCategory = (typeof NotificationCategory)[keyof typeof NotificationCategory];
export interface PushNotificationPayload {
    category: NotificationCategory;
    title: string;
    body: string;
    data: {
        caseId: string;
        [key: string]: string;
    };
}
//# sourceMappingURL=notification.d.ts.map