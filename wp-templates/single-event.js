import { SEO } from '@/components'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import Container from '@/components/atoms/Container'
import FeaturedImage from '@/components/common/FeaturedImage'
import Layout from '@/components/common/Layout'
import PageHero from '@/components/organisms/PageHero/PageHero'
import { seoPostFields } from '@/fragments'
import getFragmentDataFromBlocks from '@/functions/wordpress/blocks/getFragmentDataFromBlocks'
import { gql } from '@apollo/client'
import { WordPressBlocksViewer } from '@faustwp/blocks'
import { flatListToHierarchical } from '@faustwp/core'
import Head from 'next/head'
import RichText from '../src/components/atoms/RichText/RichText'
import blocks from '../wp-blocks'

export default function SingleEvent(props) {
  const { editorBlocks, seo, featuredImage, eventsFields, terms, title } =
    props.data.nodeByUri

  const blocks = flatListToHierarchical(editorBlocks)

  const { event } = eventsFields

  return (
    <>
      <SEO seo={seo} />
      <Head>
        {/* add json-ld for this event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: title,
              startDate: event.startDate,
              endDate: event.endDate,
              eventAttendanceMode:
                'https://schema.org/OnlineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              location: {
                '@type': 'Place',
                name: event.locationName,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: event.locationName,
                  addressRegion: 'OH',
                  postalCode: '45177',
                  streetAddress: event.locationAddress
                }
              },
              image: featuredImage?.node?.sourceUrl,
              description: seo.metaDesc
            })
          }}
        />
      </Head>
      <Layout className="thelayoutclass">
        <div className="events-article">
          <article className="inner-wrap">
            <PageHero
              sourceUrl={featuredImage?.node?.sourceUrl}
              alt={featuredImage?.node?.altText}
              imageMeta={featuredImage?.node?.mediaDetails}
              text={title}
              pageType="news"
              newsCategories={event.newsCategories}
            />
            <div className="page-content">
              <Breadcrumbs breadcrumbs={seo.breadcrumbs} />
              <section className="eventDetails">
                <div className="eventStartDate">
                  <div>The start-date: {event.startDate}</div>
                  <div>The start-time: {event.startTime}</div>
                </div>
                <div className="eventEndDate">
                  <div>The end-date: {event.endDate}</div>
                  <div>The end-time: {event.endTime}</div>
                </div>
                <div className="eventLocations">
                  <div>The location name: {event.locationName}</div>
                  <div>The location address: {event.locationAddress}</div>
                </div>
              </section>
              <WordPressBlocksViewer blocks={blocks} />
            </div>
          </article>
        </div>
      </Layout>
    </>
  )
}

SingleEvent.variables = ({ uri }, ctx) => {
  return {
    uri,
    asPreview: ctx?.asPreview
  }
}

/**
 * Compose the GraphQL query for our page's data.
 */
SingleEvent.query = gql`
  ${FeaturedImage.fragments.entry}
  ${getFragmentDataFromBlocks(blocks).entries}
  query GetEventData($uri: String!, $imageSize: MediaItemSizeEnum = LARGE) {
    nodeByUri(uri: $uri) {
       ... on NodeWithTitle {
        title
      }
       ... on Event {
        ${seoPostFields}
        uri
        eventsFields {
          event {
            endDate
            endTime
            locationAddress
            locationName
            startDate
            startTime
          }
        }
  }
   ...FeaturedImageFragment
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
