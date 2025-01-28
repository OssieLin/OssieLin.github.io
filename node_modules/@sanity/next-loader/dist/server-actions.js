"use server";
import { sanitizePerspective, perspectiveCookieName } from "./_chunks-es/utils.js";
import { revalidateTag } from "next/cache.js";
import { draftMode, cookies } from "next/headers.js";
async function revalidateSyncTags(tags) {
  await revalidateTag("sanity:fetch-sync-tags");
  for (const _tag of tags) {
    const tag = `sanity:${_tag}`;
    await revalidateTag(tag), console.log(`<SanityLive /> revalidated tag: ${tag}`);
  }
}
async function setPerspectiveCookie(perspective) {
  if (!(await draftMode()).isEnabled)
    return;
  const sanitizedPerspective = sanitizePerspective(perspective, "previewDrafts");
  if (perspective !== sanitizedPerspective)
    throw new Error(`Invalid perspective: ${perspective}`);
  (await cookies()).set(
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
export {
  revalidateSyncTags,
  setPerspectiveCookie
};
//# sourceMappingURL=server-actions.js.map
