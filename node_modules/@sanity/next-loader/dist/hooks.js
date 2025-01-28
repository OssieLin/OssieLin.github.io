"use client";
import { useCallback, useSyncExternalStore } from "react";
import { environmentListeners, environment, perspectiveListeners, perspective } from "./_chunks-es/context.js";
function useDraftModeEnvironment() {
  const subscribe = useCallback((listener) => (environmentListeners.add(listener), () => environmentListeners.delete(listener)), []);
  return useSyncExternalStore(
    subscribe,
    () => environment,
    () => "checking"
  );
}
function useDraftModePerspective() {
  const subscribe = useCallback((listener) => (perspectiveListeners.add(listener), () => perspectiveListeners.delete(listener)), []);
  return useSyncExternalStore(
    subscribe,
    () => perspective,
    () => "checking"
  );
}
function useIsPresentationTool() {
  const environment2 = useDraftModeEnvironment();
  return environment2 === "checking" ? null : environment2 === "presentation-iframe" || environment2 === "presentation-window";
}
function useIsLivePreview() {
  const environment2 = useDraftModeEnvironment();
  return environment2 === "checking" ? null : environment2 === "presentation-iframe" || environment2 === "presentation-window" || environment2 === "live";
}
export {
  useDraftModeEnvironment,
  useDraftModePerspective,
  useIsLivePreview,
  useIsPresentationTool
};
//# sourceMappingURL=hooks.js.map
