import type { PhotoType, SyncStatus } from "../constants/enums.js";
export interface GpsCoordinates {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude: number | null;
    timestamp: string;
}
export interface Photo {
    id: string;
    caseId: string;
    type: PhotoType;
    localUri: string;
    remoteUrl: string | null;
    gps: GpsCoordinates;
    reverseGeocodedAddress: string | null;
    sha256Hash: string;
    fileSizeBytes: number;
    width: number;
    height: number;
    syncStatus: SyncStatus;
    capturedAt: string;
    uploadedAt: string | null;
}
export interface Video {
    id: string;
    caseId: string;
    localUri: string;
    remoteUrl: string | null;
    gps: GpsCoordinates;
    durationSeconds: number;
    fileSizeBytes: number;
    sha256Hash: string;
    thumbnailUri: string | null;
    syncStatus: SyncStatus;
    capturedAt: string;
    uploadedAt: string | null;
}
export interface Signature {
    id: string;
    caseId: string;
    localUri: string;
    remoteUrl: string | null;
    signerName: string;
    sha256Hash: string;
    syncStatus: SyncStatus;
    capturedAt: string;
    uploadedAt: string | null;
}
export interface GoogleMapsLocation {
    latitude: number;
    longitude: number;
    shareUrl: string;
    satelliteScreenshotUrl: string | null;
}
//# sourceMappingURL=media.d.ts.map