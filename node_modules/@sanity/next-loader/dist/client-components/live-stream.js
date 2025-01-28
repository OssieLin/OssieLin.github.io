"use client";
import { jsx } from "react/jsx-runtime";
import dynamic from "next/dynamic";
const SanityLiveStreamClientComponent = dynamic(() => import("../_chunks-es/SanityLiveStream.js"), { ssr: !1 });
function SanityLiveStreamLazyClientComponent(props) {
  return /* @__PURE__ */ jsx(SanityLiveStreamClientComponent, { ...props });
}
export {
  SanityLiveStreamLazyClientComponent as default
};
//# sourceMappingURL=live-stream.js.map
