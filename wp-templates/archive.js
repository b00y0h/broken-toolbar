import { SEO } from '@/components'
import { PostsList } from '@/components/archive/PostsList'
import RichText from '@/components/atoms/RichText'
import Layout from '@/components/common/Layout'
import { BlogInfoFragment } from '@/fragments/GeneralSettings'
import { gql } from '@apollo/client'

export default function Archive(props) {
  const { label, description, contentNodes } = props.data.nodeByUri

  const { description: siteDescription } = props?.data?.generalSettings ?? {}

  const archiveTitle = `Wilmington College ${label}`

  return (
    <>
      <SEO seo={{ title: archiveTitle, description: siteDescription }} />
      <Layout className="thelayoutclass">
        <article className="inner-wrap">
          <RichText tag="h1">{label}</RichText>
          {description && <RichText>{description}</RichText>}
          <PostsList posts={contentNodes.nodes} />
        </article>
      </Layout>
    </>
  )
}

Archive.variables = ({ uri }) => {
  return { uri }
}

Archive.query = gql`
  ${BlogInfoFragment}
  query Archive($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      uri
      ... on ContentType {
        label
        __typename
        uri
        description
        contentNodes {
          nodes {
            id
            uri
            ... on NodeWithExcerpt {
              excerpt
            }
            ... on NodeWithContentEditor {
              content
            }
            ... on NodeWithTitle {
              title
            }
            ... on StudentOrg {
              orgFields {
                quickFacts
              }
            }
          }
        }
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
  }
`
