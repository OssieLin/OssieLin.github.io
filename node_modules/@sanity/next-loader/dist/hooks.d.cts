import {ClientPerspective} from '@sanity/client'

export {ClientPerspective}

/**
 *
 * @public
 */
export declare type DraftEnvironment =
  | 'checking'
  | 'presentation-iframe'
  | 'presentation-window'
  | 'live'
  | 'static'
  | 'unknown'

/**
 * The Sanity Client perspective used when fetching data in Draft Mode, in the `sanityFetch` calls
 * used by React Server Components on the page. Note that some of them might set the `perspective` to a different value.
 * This value is what's used by default.
 * @public
 */
export declare type DraftPerspective = 'checking' | 'unknown' | ClientPerspective

/**
 * Reports the current draft mode environment.
 * Use it to determine how to adapt the UI based on wether:
 * - Your app is previewed in a iframe, inside Presentation Tool in a Sanity Studio.
 * - Your app is previewed in a new window, spawned from Presentation Tool in a Sanity Studio.
 * - Your app is live previewing drafts in a standalone context.
 * - Your app is previewing drafts, but not live.
 * - Your app is not previewing anything (that could be detected).
 * @public
 */
export declare function useDraftModeEnvironment(): DraftEnvironment

/**
 * Reports the Sanity Client perspective used to fetch data in `sanityFetch` used on the page.
 * If the hook is used outside Draft Mode it will resolve to `'unknown'`.
 * If the hook is used but the `<SanityLive />` component is not present then it'll stay in `'checking'` and console warn after a timeout that it seems like you're missing the component.
 * @public
 */
export declare function useDraftModePerspective(): DraftPerspective

/**
 * Detects if the application is considered to be in a "Live Preview" mode.
 * Live Preview means that the application is either:
 * - being previewed inside Sanity Presentation Tool
 * - being previewed in Draft Mode, with a `browserToken` given to `defineLive`, also known as "Standalone Live Preview'"
 * When in Live Preview mode, you typically want UI to update as new content comes in, without any manual intervention.
 * This is very different from Live Production mode, where you usually want to delay updates that might cause layout shifts,
 * to avoid interrupting the user that is consuming your content.
 * This hook lets you adapt to this difference, making sure production doesn't cause layout shifts that worsen the UX,
 * while in Live Preview mode layout shift is less of an issue and it's better for the editorial experience to auto refresh in real time.
 *
 * The hook returns `null` initially, to signal it doesn't yet know if it's live previewing or not.
 * Then `true` if it is, and `false` otherwise.
 * @public
 */
export declare function useIsLivePreview(): boolean | null

/**
 * Detects if the application is being previewed inside Sanity Presentation Tool.
 * Presentation Tool can open the application in an iframe, or in a new window.
 * When in this context there are some UI you usually don't want to show,
 * for example a Draft Mode toggle, or a "Viewing draft content" indicators, these are unnecessary and add clutter to
 * the editorial experience.
 * The hook returns `null` initially, when it's not yet sure if the application is running inside Presentation Tool,
 * then `true` if it is, and `false` otherwise.
 * @public
 */
export declare function useIsPresentationTool(): boolean | null

export {}
