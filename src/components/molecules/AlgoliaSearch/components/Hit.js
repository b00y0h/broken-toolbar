import Image from 'next/image'
import React from 'react'
import ReactHtmlParser from 'react-html-parser' // Import the library
import { Highlight } from 'react-instantsearch-dom'
import searchClick from '../functions/searchClick'

import {
  MdArticle,
  MdAutoStories,
  MdCampaign,
  MdEvent,
  MdFindInPage,
  MdOutlineContactPage,
  MdSchool
} from 'react-icons/md'

/**
 * Render the Hit component.
 *
 * @see https://www.algolia.com/doc/api-reference/widgets/hits/react/
 * @param  {object}  props     The component attributes as props.
 * @param  {object}  props.hit Renders each hit from the results.
 * @return {Element}           The Hit component.
 */
export default function Hit({ hit }) {
  const sanitizedTitle = ReactHtmlParser(hit.post_title)
  // strip off "https://www.wilmington.edu" from the beginning of the permalink
  const strippedPermalink = hit.permalink.replace(
    /^https:\/\/www.wilmington.edu/,
    ''
  )

  const { post_title, post_type, permalink } = hit

  const PostIcon = () => {
    let Icon
    switch (post_type) {
      case 'program':
        Icon = MdSchool
        break
      case 'page':
        Icon = MdArticle
        break
      case 'news':
        Icon = MdCampaign
        break
      case 'event':
        Icon = MdEvent
        break
      case 'faculty':
        Icon = MdOutlineContactPage
        break
      default:
        Icon = MdFindInPage
    }

    return (
      <figure>
        <Icon />
      </figure>
    )
  }

  return (
    <button
      type="button"
      data-url={permalink}
      data-title={post_title}
      onClick={(e) => searchClick(e)}
    >
      <PostIcon />
      <div className="hitResultContent">
        <Highlight
          attribute="post_title"
          hit={{
            ...hit,
            _highlightResult: {
              ...hit._highlightResult,
              post_title: {
                value: sanitizedTitle.join(''),
                matchLevel: 'full'
              }
            }
          }}
        />
        <small className="resultLink"> {strippedPermalink}</small>
      </div>
    </button>
  )
}
