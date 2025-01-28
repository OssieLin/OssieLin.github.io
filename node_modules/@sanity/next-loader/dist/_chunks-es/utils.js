import { validateApiPerspective } from "@sanity/client";
const perspectiveCookieName = "sanity-preview-perspective";
function sanitizePerspective(_perspective, fallback) {
  const perspective = typeof _perspective == "string" && _perspective.includes(",") ? _perspective.split(",") : _perspective;
  try {
    return validateApiPerspective(perspective), perspective === "raw" ? fallback : perspective;
  } catch (err) {
    return console.warn("Invalid perspective:", _perspective, perspective, err), fallback;
  }
}
export {
  perspectiveCookieName,
  sanitizePerspective
};
//# sourceMappingURL=utils.js.map
