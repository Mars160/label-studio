const logEvent = (eventName: string, metadata: Record<string, unknown> = {}) => {
  // Don't send if collect_analytics is falsey
  if (!(window as any).APP_SETTINGS?.collect_analytics) return;

  const payload = {
    ...metadata,
    event: eventName,
    url: window.location.href,
  };

  // Use requestIdleCallback to send the event after the main thread is free
  window.requestIdleCallback(() => {
    const params = new URLSearchParams({ __: JSON.stringify(payload) });
    const url = `/__lsa/?${params}`;
    // Use sendBeacon if available for better reliability during page unload
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url);
      } else {
        // Fallback handling
        const img = new Image();
        img.src = url;
      }
    } catch {
      // Ignore errors here
    }
  });
};

(window as any).__lsa = logEvent;
// Formality to ensure there is a single entry point for analytics
// that can be included in the bundle.
// Ensure this is imported first in the main entry file of the application.
export const registerAnalytics = () => {
  // Already registered, do nothing
}

// Usage examples:
// __lsa("data_import.view");
// __lsa("template.select", { template_type: "object_detection", template_id: "od_1" });
// __lsa("doc.click", { href: "https://labelstud.io/docs/guide/setup" });
