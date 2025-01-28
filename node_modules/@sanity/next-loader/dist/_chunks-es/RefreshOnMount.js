import { useRouter } from "next/navigation.js";
import { useReducer, useEffect } from "react";
function RefreshOnMount() {
  const router = useRouter(), [mounted, mount] = useReducer(() => !0, !1);
  return useEffect(() => {
    mounted || (mount(), router.refresh());
  }, [mounted, router]), null;
}
RefreshOnMount.displayName = "RefreshOnMount";
export {
  RefreshOnMount as default
};
//# sourceMappingURL=RefreshOnMount.js.map
