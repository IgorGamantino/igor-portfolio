import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent, type Analytics } from "firebase/analytics";

// Firebase web config is public by design; access is controlled by Firebase security rules.
const firebaseConfig = {
  apiKey: "AIzaSyCADHIHT8r9vZC9FTy3iFkmXGLm1NUFWKE",
  authDomain: "portifolio-20a84.firebaseapp.com",
  projectId: "portifolio-20a84",
  storageBucket: "portifolio-20a84.firebasestorage.app",
  messagingSenderId: "442033158470",
  appId: "1:442033158470:web:a81ccfc40afd9c07d98d47",
  measurementId: "G-NQ5G5WHZQC",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

let analyticsPromise: Promise<Analytics | null> | null = null;

// Analytics only works in the browser, so it must be initialized on the client.
export function initAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  analyticsPromise ??= isSupported().then((ok) => (ok ? getAnalytics(app) : null));
  return analyticsPromise;
}

export function trackEvent(name: string, params?: Record<string, string | number>) {
  initAnalytics().then((analytics) => {
    if (analytics) logEvent(analytics, name, params);
  });
}

export function trackClick(buttonName: string, section: string, linkUrl?: string) {
  trackEvent("button_click", {
    button_name: buttonName,
    section,
    ...(linkUrl && { link_url: linkUrl }),
  });
}
