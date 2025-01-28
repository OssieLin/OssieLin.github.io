import { jsx, Fragment } from "react/jsx-runtime";
import { stegaEncodeSourceMap } from "@sanity/client/stega";
import * as React from "react";
import { useCallback, useSyncExternalStore, useState, useEffect } from "react";
import { useEffectEvent } from "use-effect-event";
import { comlinkListeners, comlink } from "./context.js";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var fastDeepEqual, hasRequiredFastDeepEqual;
function requireFastDeepEqual() {
  return hasRequiredFastDeepEqual || (hasRequiredFastDeepEqual = 1, fastDeepEqual = function equal(a, b) {
    if (a === b) return !0;
    if (a && b && typeof a == "object" && typeof b == "object") {
      if (a.constructor !== b.constructor) return !1;
      var length, i, keys;
      if (Array.isArray(a)) {
        if (length = a.length, length != b.length) return !1;
        for (i = length; i-- !== 0; )
          if (!equal(a[i], b[i])) return !1;
        return !0;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
      if (keys = Object.keys(a), length = keys.length, length !== Object.keys(b).length) return !1;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1;
      for (i = length; i-- !== 0; ) {
        var key = keys[i];
        if (!equal(a[key], b[key])) return !1;
      }
      return !0;
    }
    return a !== a && b !== b;
  }), fastDeepEqual;
}
var fastDeepEqualExports = requireFastDeepEqual(), isEqual = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqualExports);
const use = "use" in React ? (
  // @ts-expect-error this is fine
  React.use
) : () => {
  throw new TypeError("SanityLiveStream requires a React version with React.use()");
}, LISTEN_HEARTBEAT_INTERVAL = 1e3;
function SanityLiveStream(props) {
  const { query, dataset, params = {}, perspective, projectId, stega } = props, subscribe = useCallback((listener) => (comlinkListeners.add(listener), () => comlinkListeners.delete(listener)), []), comlink$1 = useSyncExternalStore(
    subscribe,
    () => comlink,
    () => null
  ), [children, setChildren] = useState(void 0), handleQueryHeartbeat = useEffectEvent((comlink2) => {
    comlink2.post("loader/query-listen", {
      projectId,
      dataset,
      perspective,
      query,
      params,
      heartbeat: LISTEN_HEARTBEAT_INTERVAL
    });
  }), handleQueryChange = useEffectEvent(
    (event) => {
      if (isEqual(
        {
          projectId,
          dataset,
          query,
          params
        },
        {
          projectId: event.projectId,
          dataset: event.dataset,
          query: event.query,
          params: event.params
        }
      )) {
        const { result, resultSourceMap, tags } = event, data = stega ? stegaEncodeSourceMap(result, resultSourceMap, { enabled: !0, studioUrl: "/" }) : result;
        console.groupCollapsed("rendering with server action"), props.children({
          data,
          sourceMap: resultSourceMap,
          tags: tags || []
        }).then(
          (children2) => {
            console.log("setChildren(children)"), setChildren(children2);
          },
          (reason) => {
            console.error("rendering with server action: render children error", reason);
          }
        ).finally(() => console.groupEnd());
      }
    }
  );
  return useEffect(() => {
    if (!comlink$1) return;
    const unsubscribe = comlink$1.on("loader/query-change", handleQueryChange), interval = setInterval(() => handleQueryHeartbeat(comlink$1), LISTEN_HEARTBEAT_INTERVAL);
    return () => {
      clearInterval(interval), unsubscribe();
    };
  }, [comlink$1, handleQueryChange, handleQueryHeartbeat]), !comlink$1 || children === void 0 ? use(props.initial) : /* @__PURE__ */ jsx(Fragment, { children });
}
SanityLiveStream.displayName = "SanityLiveStream";
export {
  SanityLiveStream as default
};
//# sourceMappingURL=SanityLiveStream.js.map
