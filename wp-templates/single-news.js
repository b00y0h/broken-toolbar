import { SEO } from '@/components'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import FeaturedImage from '@/components/common/FeaturedImage'
import Layout from '@/components/common/Layout'
import PageHero from '@/components/organisms/PageHero'
import { seoPostFields } from '@/fragments'
import getFragmentDataFromBlocks from '@/functions/wordpress/blocks/getFragmentDataFromBlocks'
import { gql } from '@apollo/client'
import { WordPressBlocksViewer } from '@faustwp/blocks'
import { flatListToHierarchical } from '@faustwp/core'
import blocks from '../wp-blocks'

export default function SingleNews(props) {
  const { title, editorBlocks, seo, featuredImage, uri, date, newsCategories } =
    props.data.nodeByUri
  const blocks = flatListToHierarchical(editorBlocks)

  return (
    <>
      <SEO seo={seo} />
      <Layout className="thelayoutclass">
        <div className=" news-article">
          <article className="inner-wrap">
            <PageHero
              sourceUrl={featuredImage?.node?.sourceUrl}
              alt={featuredImage?.node?.altText}
              imageMeta={featuredImage?.node?.mediaDetails}
              text={title}
              pageType="news"
              newsCategories={newsCategories}
            />
            <div className="page-content">
              <Breadcrumbs breadcrumbs={seo.breadcrumbs} />
              <div className="news-date">
                {new Date(date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
              <WordPressBlocksViewer blocks={blocks} />
            </div>
          </article>
        </div>
      </Layout>
    </>
  )
}

SingleNews.variables = ({ uri }, ctx) => {
  return {
    uri
  }
}

/**
 * Compose the GraphQL query for our page's data.
 */
SingleNews.query = gql`
  ${FeaturedImage.fragments.entry}
  ${getFragmentDataFromBlocks(blocks).entries}
  query GetNewsSingular($uri: String!, $imageSize: MediaItemSizeEnum = LARGE) {
    nodeByUri(uri: $uri) {
      __typename

      ... on NodeWithTitle {
        title
      }

      ... on Article{
        date
        newsCategories{
          nodes{
            name
          }
        }
        ${seoPostFields}
      }

      ... on NodeWithFeaturedImage {
        ...FeaturedImageFragment
      }
      ... on NodeWithEditorBlocks {
        # Get contentBlocks with flat=true and the nodeId and parentId
        # so we can reconstruct them later using flatListToHierarchical()
        editorBlocks {
          cssClassNames
          isDynamic
          name
          id: clientId
          parentId: parentClientId
          renderedHtml

          # Get all block fragment keys and call them in the query
          ${getFragmentDataFromBlocks(blocks).keys}
        }
      }
    }
  }
`
