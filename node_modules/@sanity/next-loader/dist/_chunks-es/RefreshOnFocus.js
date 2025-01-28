import { useRouter } from "next/navigation.js";
import { useEffect } from "react";
const focusThrottleInterval = 5e3;
function RefreshOnFocus() {
  const router = useRouter();
  return useEffect(() => {
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
export {
  RefreshOnFocus as default
};
//# sourceMappingURL=RefreshOnFocus.js.map
