import type {ClientPerspective, SyncTag} from '@sanity/client'

export declare function revalidateSyncTags(tags: SyncTag[]): Promise<void>

export declare function setPerspectiveCookie(perspective: ClientPerspective): Promise<void>

export {}
