import { SEO } from '@/components'
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import Container from '@/components/atoms/Container'
import Preloader from '@/components/atoms/Preloader'
// import ProgramTabs, {
//   ProgramTabsFragment
// } from '@/components/atoms/ProgramTabs/ProgramTabs'
import FeaturedImage from '@/components/common/FeaturedImage'
import Layout from '@/components/common/Layout'
import WordPressProvider from '@/components/common/WordPressProvider'
import PageHero from '@/components/organisms/PageHero/PageHero'
import { seoPostFields } from '@/fragments'
import getFragmentDataFromBlocks from '@/functions/wordpress/blocks/getFragmentDataFromBlocks'
import { gql } from '@apollo/client'
import { WordPressBlocksViewer } from '@faustwp/blocks'
import { flatListToHierarchical } from '@faustwp/core'
import blocks from '../wp-blocks'
import { RelatedProgramsFragment } from '../wp-blocks/acf/AcfRelatedPrograms'
import { StudentOrgFragment } from '../wp-blocks/acf/AcfStudentOrgs'

export default function SingleProgram(props) {
  // Loading state for previews
  if (props.loading) {
    return <Preloader />
  }
  const {
    editorBlocks,
    title,
    featuredImage,
    seo,
    children: childPages,
    parent,
    uri,
    departments,
    programOrgRelationship,
    currentProgramId
  } = props.data.program

  const blocks = flatListToHierarchical(editorBlocks)

  const programPageState = {
    departments: departments?.nodes,
    currentProgramId,
    studentOrganizations: programOrgRelationship?.programorg
  }
  return (
    <>
      <SEO seo={seo} />
      <Layout className="thelayoutclass">
        <article className="inner-wrap">
          <PageHero
            sourceUrl={featuredImage?.node?.sourceUrl}
            alt={featuredImage?.node?.altText}
            imageMeta={featuredImage?.node?.mediaDetails}
            text={title}
          />{' '}
          {/* <ProgramTabs childPages={childPages} uri={uri} parent={parent} /> */}
          <Container>
            <article className="innerWrap programContent">
              <Breadcrumbs breadcrumbs={seo.breadcrumbs} />
              <WordPressProvider value={programPageState}>
                <WordPressBlocksViewer blocks={blocks} />
              </WordPressProvider>
            </article>
          </Container>
        </article>
      </Layout>
    </>
  )
}

SingleProgram.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview
  }
}

SingleProgram.query = gql`
  ${FeaturedImage.fragments.entry}
  ${getFragmentDataFromBlocks(blocks).entries}
  ${RelatedProgramsFragment}
  ${StudentOrgFragment}
  query GetProgramData($databaseId: ID!, $imageSize: MediaItemSizeEnum = LARGE, $asPreview: Boolean = false) {
    program(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
       ... on NodeWithTitle {
        title
      }
      ...RelatedProgramsFragment
      ...StudentOrgFragment
      # ...ProgramTabsFragment
       ... on Program {
                 ${seoPostFields}

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
