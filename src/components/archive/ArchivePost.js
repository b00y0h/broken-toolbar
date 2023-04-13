import React from 'react'
import { PostEntryTitle } from '../post/PostEntryTitle'
import { PostEntryContent } from '../post/PostEntryContent'
import { PostEntryMeta } from '../post/PostEntryMeta'
import { FeaturedImage } from '../common/FeaturedImage'

const ArchivePost = ({
  isFirst = false,
  post,
  className = null,
  ctx,
  ...props
}) => {
  return (
    <article className={className} {...props}>
      {/* could use thumbnail image instead. might reserve FeaturedImage to only be for full post */}
      <FeaturedImage post={post} />
      <PostEntryTitle post={post} location="archive" />
      <PostEntryContent post={post} location="archive" />
      <PostEntryMeta post={post} />
    </article>
  )
}

export default ArchivePost
