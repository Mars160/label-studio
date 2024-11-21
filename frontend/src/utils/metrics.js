const sendWhenIdle = (payload) => {
  window.requestIdleCallback(() => {
    // Use sendBeacon if available for better reliability during page unload
    if (navigator.sendBeacon) {
      const params = new URLSearchParams({ __ls: JSON.stringify(payload) });
      navigator.sendBeacon(`/__ls?${params}`);
    } else {
      // Fallback handling
      const img = new Image();
      const params = new URLSearchParams({ __ls: JSON.stringify(payload) });
      img.src = `/__ls?${params}`;
    }
  });
};

export const sendMetric = (eventName, metadata = {}) => {
  // Don't send if collect_analytics is falsey
  if (!window.APP_SETTINGS?.collect_analytics) return;

  // Don't send if the page is already unloading
  if (document.hidden) return;

  const payload = {
    e: eventName,
    m: {
      ...metadata,
      url: window.location.href,
    },
  };

  sendWhenIdle(payload);
};

// Make available on the window object
window.__lsm = sendMetric;

// Usage examples:
// __lsm("data_import.view");
// __lsm("template.select", { category: "object_detection", template_id: "od_1" });
// __lsm("doc.click", { url: "/docs/guide/setup" });
