"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var React = require("react"), context = require("./_chunks-cjs/context.cjs");
function useDraftModeEnvironment() {
  const subscribe = React.useCallback((listener) => (context.environmentListeners.add(listener), () => context.environmentListeners.delete(listener)), []);
  return React.useSyncExternalStore(
    subscribe,
    () => context.environment,
    () => "checking"
  );
}
function useDraftModePerspective() {
  const subscribe = React.useCallback((listener) => (context.perspectiveListeners.add(listener), () => context.perspectiveListeners.delete(listener)), []);
  return React.useSyncExternalStore(
    subscribe,
    () => context.perspective,
    () => "checking"
  );
}
function useIsPresentationTool() {
  const environment = useDraftModeEnvironment();
  return environment === "checking" ? null : environment === "presentation-iframe" || environment === "presentation-window";
}
function useIsLivePreview() {
  const environment = useDraftModeEnvironment();
  return environment === "checking" ? null : environment === "presentation-iframe" || environment === "presentation-window" || environment === "live";
}
exports.useDraftModeEnvironment = useDraftModeEnvironment;
exports.useDraftModePerspective = useDraftModePerspective;
exports.useIsLivePreview = useIsLivePreview;
exports.useIsPresentationTool = useIsPresentationTool;
//# sourceMappingURL=hooks.cjs.map
