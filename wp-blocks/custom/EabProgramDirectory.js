import Preloader from '@/components/atoms/Preloader'
import BlockDepartmentSelect from '@/components/blocks/custom/BlockDepartmentSelect'
import { gql, useQuery } from '@apollo/client'

const EabProgramDirectory = () => {
  const { loading, error, data } = useQuery(EabProgramDirectory.query)

  if (loading) return <Preloader />
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return <p>Error: {error.message}</p>
  }

  return <BlockDepartmentSelect programDepartments={data?.departments.nodes} />
}

export default EabProgramDirectory

// query to get the faq data
EabProgramDirectory.query = gql`
  query getAllDepartments {
    departments(where: { order: ASC }) {
      nodes {
        databaseId
        slug
        uri
        name
        description
        departmentFields {
          deptImage {
            altText
            caption
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
        programs(where: { orderby: { field: TITLE, order: ASC } }) {
          nodes {
            slug
            uri
            title
            excerpt
            concentrationEnabled
            degreeTitle
            degreeTypes {
              edges {
                node {
                  name
                }
              }
            }
            modalities
            link
            ancestors {
              nodes {
                id
                slug
              }
            }
            children {
              edges {
                node {
                  slug
                }
              }
            }
            programFields {
              program {
                location
                degreeTitle
                degree
                fieldGroupName
              }
            }
          }
        }
      }
    }
  }
`

EabProgramDirectory.displayName = 'EabProgramDirectory'
