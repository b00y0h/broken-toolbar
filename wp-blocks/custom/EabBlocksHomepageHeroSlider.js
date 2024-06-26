import Hero from '@/components/organisms/HomeHero'
import { gql } from '@apollo/client'

const EabBlocksHomepageHeroSlider = (props) => {
  const { attributes } = props
  const {
    ctaOneLink,
    ctaOneText,
    ctaOneIcon,
    ctaTwoLink,
    ctaTwoText,
    ctaTwoIcon,
    ctaThreeLink,
    ctaThreeText,
    ctaThreeIcon,
    heroExtraContent,
    heroTitle
  } = attributes

  // put the three ctas into an array
  const ctas = []

  const ctaTexts = [ctaOneText, ctaTwoText, ctaThreeText]
  const ctaLinks = [ctaOneLink, ctaTwoLink, ctaThreeLink]
  const ctaIcons = [ctaOneIcon, ctaTwoIcon, ctaThreeIcon]

  for (let i = 0; i < 3; i++) {
    const ctaText = ctaTexts[i]
    const ctaLink = ctaLinks[i]
    const ctaIcon = ctaIcons[i]

    if (ctaText && ctaLink) {
      // parse the JSON string to access the url property
      let url = ''
      try {
        const parsedLink = JSON.parse(ctaLink)
        url = parsedLink.url
      } catch (error) {
        console.error('Error parsing JSON for ctaLink:', error)
      }

      ctas.push({ title: ctaText, url: url, icon: ctaIcon })
    }
  }

  const mediaArray = props?.children
  const mediaItems = []

  // Iterate over each object in the mediaArray
  // mediaArray.forEach((item) => {
  for (const item of mediaArray) {
    // Check if mediaId and mediaUrl are available
    if (item.attributes.mediaId && item.attributes.mediaUrl) {
      // Extract relevant information
      const imageId = item.attributes.mediaId.toString()
      const altText = item.attributes.mediaAlt || ''
      const mediaUrl = item.attributes.mediaUrl
      const type =
        item.attributes.mediaUrl.split('.').pop() === 'mp4' ? 'video' : 'image'

      // Create the new object with the extracted information
      const mediaItem = {
        imageId,
        type,
        mediaItem: {
          altText,
          mediaUrl
        }
      }

      // Push the new object to the mediaItems array
      mediaItems.push(mediaItem)
    }
  }

  return (
    <Hero
      mediaItems={mediaItems}
      content={heroTitle}
      description={heroExtraContent}
      ctas={ctas}
    />
  )
}
export default EabBlocksHomepageHeroSlider

// EabBlocksHomepageHeroSlider.fragments = {
//   entry: gql`
//     fragment EabBlocksHomepageHeroSliderFragment on EabBlocksHomepageHeroSlider {
//       attributes {
//         backgroundColor
//         className
//         ctaOneLink
//         ctaOneText
//         ctaOneIcon
//         ctaThreeLink
//         ctaThreeText
//         ctaThreeIcon
//         ctaTwoLink
//         ctaTwoText
//         ctaTwoIcon
//         heroExtraContent
//         heroTitle
//       }
//     }
//   `,
//   key: 'EabBlocksHomepageHeroSliderFragment'
// }

EabBlocksHomepageHeroSlider.displayName = 'EabBlocksHomepageHeroSlider'
