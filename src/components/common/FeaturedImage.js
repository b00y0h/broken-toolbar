import Image from '@/components/atoms/Image'
import { gql } from '@apollo/client'

const FeaturedImage = ({
  image,
  showCaption,
  width,
  height,
  className,
  priority,
  layout,
  ...props
}) => {
  // grab featuredImage from post.featuredImage, only if it exists
  const { altText, mediaDetails, sourceUrl, caption } = image
  // if featuredImage exists, destructure altText and caption from featuredImage
  if (sourceUrl) {
    // const theImage = getImage(featuredImage.node.gatsbyImage)
    const captionText = caption || '<p>the caption for an image.</p>'
    // TODO: remove this after styling caption for FeaturedImage
    // TODO: ensure that all featured images have alt text then remove alert
    return (
      <figure className="featured-image">
        <Image
          id="featured-img"
          url={sourceUrl}
          alt={altText}
          imageMeta={{ mediaDetails }}
          nextImageFill={true}
          priority={true}
        />
        {/* if showCaption and captionText is not null then show <figcaption> */}
        {showCaption && captionText && (
          <figcaption dangerouslySetInnerHTML={{ __html: captionText }} />
        )}
      </figure>
    )
  } else {
    return null
  }
}

export default FeaturedImage

FeaturedImage.fragments = {
  entry: gql`
    fragment FeaturedImageFragment on NodeWithFeaturedImage {
      featuredImage {
        node {
          id
          altText
          caption
          sourceUrl(size: $imageSize)
          mediaDetails {
            width
            height
          }
        }
      }
    }
  `
}
