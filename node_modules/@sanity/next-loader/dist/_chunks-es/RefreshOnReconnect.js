import { useRouter } from "next/navigation.js";
import { useEffect } from "react";
function RefreshOnReconnect() {
  const router = useRouter();
  return useEffect(() => {
    const controller = new AbortController(), { signal } = controller;
    return window.addEventListener("online", () => router.refresh(), { passive: !0, signal }), () => controller.abort();
  }, [router]), null;
}
RefreshOnReconnect.displayName = "RefreshOnReconnect";
export {
  RefreshOnReconnect as default
};
//# sourceMappingURL=RefreshOnReconnect.js.map
