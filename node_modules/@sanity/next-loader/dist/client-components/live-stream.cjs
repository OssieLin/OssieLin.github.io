"use client";
"use strict";
var jsxRuntime = require("react/jsx-runtime"), dynamic = require("next/dynamic");
function _interopDefaultCompat(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var dynamic__default = /* @__PURE__ */ _interopDefaultCompat(dynamic);
const SanityLiveStreamClientComponent = dynamic__default.default(() => Promise.resolve().then(function() {
  return require("../_chunks-cjs/SanityLiveStream.cjs");
}), { ssr: !1 });
function SanityLiveStreamLazyClientComponent(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(SanityLiveStreamClientComponent, { ...props });
}
module.exports = SanityLiveStreamLazyClientComponent;
//# sourceMappingURL=live-stream.cjs.map
