export * from "./enums.js";
// ── App Constants ──
export const APP_NAME = "CoVerify";
export const PACKAGE_ID = "com.coanfiss.coverify";
// ── Validation Limits ──
export const MAX_PHOTO_SIZE_MB = 10;
export const MAX_VIDEO_DURATION_SECONDS = 60;
export const MAX_PHOTOS_PER_CASE = 20;
export const MAX_VIDEO_SIZE_MB = 50;
export const SIGNATURE_MAX_WIDTH = 600;
export const SIGNATURE_MAX_HEIGHT = 300;
// ── Auth ──
export const ACCESS_TOKEN_EXPIRY_MINUTES = 15;
export const REFRESH_TOKEN_EXPIRY_DAYS = 7;
export const MAX_LOGIN_ATTEMPTS = 5;
export const LOGIN_LOCKOUT_MINUTES = 15;
// ── Sync ──
export const SYNC_RETRY_DELAYS_MS = [1000, 2000, 4000, 8000, 300000];
export const BACKGROUND_SYNC_INTERVAL_MINUTES = 15;
// ── PII Masking ──
export const PAN_MASK_REGEX = /^([A-Z]{2})[A-Z]{3}([0-9]{4}[A-Z])$/;
export const AADHAAR_MASK_REGEX = /^(\d{4})\d{4}(\d{4})$/;
//# sourceMappingURL=index.js.map