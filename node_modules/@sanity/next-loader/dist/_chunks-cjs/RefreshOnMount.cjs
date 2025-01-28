"use strict";
var navigation_js = require("next/navigation.js"), React = require("react");
function RefreshOnMount() {
  const router = navigation_js.useRouter(), [mounted, mount] = React.useReducer(() => !0, !1);
  return React.useEffect(() => {
    mounted || (mount(), router.refresh());
  }, [mounted, router]), null;
}
RefreshOnMount.displayName = "RefreshOnMount";
exports.default = RefreshOnMount;
//# sourceMappingURL=RefreshOnMount.cjs.map
