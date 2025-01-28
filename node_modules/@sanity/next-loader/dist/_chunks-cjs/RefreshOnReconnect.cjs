"use strict";
var navigation_js = require("next/navigation.js"), React = require("react");
function RefreshOnReconnect() {
  const router = navigation_js.useRouter();
  return React.useEffect(() => {
    const controller = new AbortController(), { signal } = controller;
    return window.addEventListener("online", () => router.refresh(), { passive: !0, signal }), () => controller.abort();
  }, [router]), null;
}
RefreshOnReconnect.displayName = "RefreshOnReconnect";
exports.default = RefreshOnReconnect;
//# sourceMappingURL=RefreshOnReconnect.cjs.map
