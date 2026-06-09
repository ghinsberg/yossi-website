/**
 * UTM capture + persistence for attribution tracking.
 *
 * Use case: someone arrives from a LinkedIn post via
 *   yossighinsberg.com/?utm_source=linkedin&utm_medium=social&utm_campaign=announcement-2026-06-09
 * navigates around the site, lands on /book-yossi, and submits the form.
 * The form should know the original UTM source so the email subject can be
 * tagged [LinkedIn] and the email body can show the campaign attribution.
 *
 * sessionStorage keeps the UTM across page navigations within one tab/session.
 * Returns plain objects — no React, no framework deps.
 */

export interface UTMData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  referrer: string;
  landing_path: string;
}

const STORAGE_KEY = "yghinsberg_utm_v1";

const empty = (): UTMData => ({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  referrer: "",
  landing_path: "",
});

/**
 * Read UTM params from the current URL + the referrer, store to sessionStorage
 * if any value was captured. Safe to call multiple times — only writes when
 * the new capture has stronger signal than what's already stored.
 *
 * Returns the freshly captured UTM (which may be all blanks if there are no
 * params in the URL — caller can check if utm_source is set to know if it
 * was a real UTM landing).
 */
export function captureUTM(): UTMData {
  if (typeof window === "undefined") return empty();

  const params = new URLSearchParams(window.location.search);
  const captured: UTMData = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    referrer: typeof document !== "undefined" ? document.referrer || "" : "",
    landing_path: window.location.pathname || "",
  };

  // Only persist if there's a real signal — don't overwrite a prior LinkedIn
  // UTM with an empty capture from a later page navigation.
  if (captured.utm_source) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
    } catch {
      // sessionStorage can throw in private mode / Safari ITP — fail silent
    }
  }

  return captured;
}

/**
 * Return the UTM data currently stored in sessionStorage, or all-blanks if
 * none exists. Safe to call at any time (SSR-safe — returns blanks server-side).
 */
export function getStoredUTM(): UTMData {
  if (typeof window === "undefined") return empty();
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw);
    return { ...empty(), ...parsed };
  } catch {
    return empty();
  }
}

/**
 * Capture-then-get: call on form mount to ensure the latest UTM (if the user
 * just landed) is captured AND the stored value (if they navigated from an
 * earlier UTM landing) is returned. Caller gets the best available attribution.
 */
export function captureAndGetUTM(): UTMData {
  const fresh = captureUTM();
  // If the fresh capture had a source, it just got stored — return it
  if (fresh.utm_source) return fresh;
  // Otherwise fall back to whatever was stored on a prior page
  return getStoredUTM();
}

/**
 * Clear the stored UTM. Call after successful form submission so a second
 * inquiry from the same tab doesn't inherit a stale attribution.
 */
export function clearUTM(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
