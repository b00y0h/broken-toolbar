'use client'

import { useWordPressContext } from '@/components/common/WordPressProvider'
import parseQuerystring from '@/functions/parseQuerystring'
import cn from 'classnames'
import React, { useRef, useState } from 'react'
import * as styles from './AlgoliaSearch.module.scss'
import SearchPlaceholder from './components/SearchPlaceholder'
import Search from './components/Search'

// /**
//  * This always throws an error: Component definition is missing display name.
//  * Error also appears when using the NextJS example.
//  *
//  * @see https://nextjs.org/docs/advanced-features/dynamic-import#with-custom-loading-component
//  */
// const Search = dynamic(() => import('./components/Search'), {
//   loading: () => <SearchPlaceholder /> // eslint-disable-line
// })

/**
 * Render the AlgoliaSearch component.
 *
 * @param  {object}  props                The component attributes as props.
 * @param  {string}  props.className      The component class.
 * @param  {boolean} props.useHistory     Whether to display the history.
 * @param  {boolean} props.usePlaceholder Whether to display the placeholder.
 * @return {Element}                      The AlgoliaSearch component.
 */
export default function AlgoliaSearch({
  useHistory,
  usePlaceholder,
  className
}) {
  const path = ''
  const query = path.includes('q=') ? parseQuerystring(path, 'q') : '' // Parse the querystring.
  const [loadAlgolia, setLoadAlgolia] = useState(0)
  const searchRef = useRef()
  // const { algolia } = useWordPressContext()
  const algolia = {
    indexName: 'wp_searchable_posts'
  }

  /**
   * Set a min-height value on the search wrapper
   * to avoid DOM movement during dynamic render.
   *
   * @return {object} A minimum height value.
   */
  function setMinHeight() {
    const minHeight =
      searchRef?.current && usePlaceholder
        ? searchRef.current.offsetHeight
        : '0'
    return { minHeight: `${minHeight}px` }
  }

  /**
   * Toggle the state of the Algolia `Search`
   * and `SearchPlaceholder` components.
   *
   * @param {boolean} value Show/hide Algolia search input.
   */
  function toggleAlgolia(value) {
    setLoadAlgolia(value)
  }

  return (
    <>
      {!!algolia?.indexName && (
        <div
          className={cn(styles.algoliaSearch, className)}
          ref={searchRef}
          style={setMinHeight()}
        >
          {!!loadAlgolia || !usePlaceholder ? (
            <Search
              indexName={algolia?.indexName}
              useHistory={useHistory}
              query={query}
            />
          ) : (
            <SearchPlaceholder query={query} toggleAlgolia={toggleAlgolia} />
          )}
        </div>
      )}
    </>
  )
}
