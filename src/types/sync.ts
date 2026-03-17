import type { SyncStatus } from "../constants/enums.js";

export interface SyncQueueItem {
  id: string;
  caseId: string;
  entityType: "photo" | "video" | "signature" | "form" | "case";
  entityId: string;
  status: SyncStatus;
  retryCount: number;
  lastError: string | null;
  createdAt: string;
  lastAttemptAt: string | null;
}

export interface SyncState {
  queueDepth: number;
  currentlyUploading: string | null;
  uploadProgress: number; // 0-100
  lastSyncedAt: string | null;
  isOnline: boolean;
}

export interface SyncPullResponse {
  cases: unknown[];
  lastPulledAt: string;
  hasMore: boolean;
}

export interface SyncPushPayload {
  caseId: string;
  formData: unknown;
  lastModifiedAt: string;
}
