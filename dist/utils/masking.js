/**
 * Masks a PAN number: ABCDE1234F → AB***1234F
 */
export function maskPan(pan) {
    if (pan.length !== 10)
        return "***";
    return `${pan.slice(0, 2)}***${pan.slice(5)}`;
}
/**
 * Masks an Aadhaar number: 123456789012 → ****-****-9012
 */
export function maskAadhaar(aadhaar) {
    if (aadhaar.length !== 12)
        return "****-****-****";
    return `****-****-${aadhaar.slice(8)}`;
}
/**
 * Masks a phone number: 9876543210 → ******3210
 */
export function maskPhone(phone) {
    if (phone.length < 4)
        return "****";
    return `${"*".repeat(phone.length - 4)}${phone.slice(-4)}`;
}
//# sourceMappingURL=masking.js.map