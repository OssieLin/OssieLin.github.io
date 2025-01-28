import {
  ClientPerspective,
  ContentSourceMap,
  InitializedClientConfig,
  QueryParams,
} from '@sanity/client'
import * as React_2 from 'react'

declare function SanityLiveStreamLazyClientComponent(props: SanityLiveStreamProps): React.ReactNode
export default SanityLiveStreamLazyClientComponent

/**
 * @public
 */
export declare interface SanityLiveStreamProps
  extends Pick<InitializedClientConfig, 'projectId' | 'dataset'> {
  query: string
  params?: QueryParams
  perspective?: Exclude<ClientPerspective, 'raw'>
  stega?: boolean
  initial: Promise<React_2.ReactNode>
  children: (result: {
    data: unknown
    sourceMap: ContentSourceMap | null
    tags: string[]
  }) => Promise<React_2.ReactNode>
}

export {}
