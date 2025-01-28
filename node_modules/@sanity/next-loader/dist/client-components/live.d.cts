import {ClientPerspective, InitializedClientConfig} from '@sanity/client'

/**
 * @public
 */
declare function SanityLive(props: SanityLiveProps): React.JSX.Element | null

declare namespace SanityLive {
  var displayName: string
}
export default SanityLive

/**
 * @public
 */
export declare interface SanityLiveProps
  extends Pick<
    InitializedClientConfig,
    | 'projectId'
    | 'dataset'
    | 'apiHost'
    | 'apiVersion'
    | 'useProjectHostname'
    | 'token'
    | 'requestTagPrefix'
  > {
  draftModeEnabled: boolean
  draftModePerspective?: ClientPerspective
  refreshOnMount?: boolean
  refreshOnFocus?: boolean
  refreshOnReconnect?: boolean
  tag: string
  /**
   * Handle errors from the Live Events subscription.
   * By default it's reported using `console.error`, you can override this prop to handle it in your own way.
   */
  onError?: (error: unknown) => void
}

export {}
