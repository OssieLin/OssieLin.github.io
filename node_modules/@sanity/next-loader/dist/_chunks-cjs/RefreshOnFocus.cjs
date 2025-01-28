"use strict";
var navigation_js = require("next/navigation.js"), React = require("react");
const focusThrottleInterval = 5e3;
function RefreshOnFocus() {
  const router = navigation_js.useRouter();
  return React.useEffect(() => {
    const controller = new AbortController();
    let nextFocusRevalidatedAt = 0;
    const callback = () => {
      const now = Date.now();
      now > nextFocusRevalidatedAt && document.visibilityState !== "hidden" && (router.refresh(), nextFocusRevalidatedAt = now + focusThrottleInterval);
    }, { signal } = controller;
    return document.addEventListener("visibilitychange", callback, { passive: !0, signal }), window.addEventListener("focus", callback, { passive: !0, signal }), () => controller.abort();
  }, [router]), null;
}
RefreshOnFocus.displayName = "RefreshOnFocus";
exports.default = RefreshOnFocus;
//# sourceMappingURL=RefreshOnFocus.cjs.map
