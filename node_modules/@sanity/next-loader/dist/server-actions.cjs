"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var cache_js = require("next/cache.js"), headers_js = require("next/headers.js"), client = require("@sanity/client");
const perspectiveCookieName = "sanity-preview-perspective";
function sanitizePerspective(_perspective, fallback) {
  const perspective = typeof _perspective == "string" && _perspective.includes(",") ? _perspective.split(",") : _perspective;
  try {
    return client.validateApiPerspective(perspective), perspective === "raw" ? fallback : perspective;
  } catch (err) {
    return console.warn("Invalid perspective:", _perspective, perspective, err), fallback;
  }
}
async function revalidateSyncTags(tags) {
  await cache_js.revalidateTag("sanity:fetch-sync-tags");
  for (const _tag of tags) {
    const tag = `sanity:${_tag}`;
    await cache_js.revalidateTag(tag), console.log(`<SanityLive /> revalidated tag: ${tag}`);
  }
}
async function setPerspectiveCookie(perspective) {
  if (!(await headers_js.draftMode()).isEnabled)
    return;
  const sanitizedPerspective = sanitizePerspective(perspective, "previewDrafts");
  if (perspective !== sanitizedPerspective)
    throw new Error(`Invalid perspective: ${perspective}`);
  (await headers_js.cookies()).set(
    perspectiveCookieName,
    Array.isArray(sanitizedPerspective) ? sanitizedPerspective.join(",") : sanitizedPerspective,
    {
      httpOnly: !0,
      path: "/",
      secure: !0,
      sameSite: "none"
    }
  );
}
exports.revalidateSyncTags = revalidateSyncTags;
exports.setPerspectiveCookie = setPerspectiveCookie;
//# sourceMappingURL=server-actions.cjs.map
