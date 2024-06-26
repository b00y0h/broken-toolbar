import Preloader from '@/components/atoms/Preloader'
// import BlockDepartmentSelect from '@/components/blocks/custom/BlockDepartmentSelect'
import ProgramDirectory from '@/components/program/ProgramDirectory'
import { gql, useQuery } from '@apollo/client'

const EabProgramDirectory = () => {
  const { loading, error, data } = useQuery(EabProgramDirectory.query)

  if (loading) return <Preloader />
  if (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <ProgramDirectory programs={data?.programs.nodes} />
    </>
  )
}

export default EabProgramDirectory

// query to get the faq data
EabProgramDirectory.query = gql`
  query getAllDepartments {
    programs(
      first: 150
      where: {
        concentrationEnabled: false
        notListed: false
        orderby: { field: TITLE, order: ASC }
      }
    ) {
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
              degreeTypeOrder
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
          nodes {
            slug
            ... on Program {
              ancestors {
                nodes {
                  id
                  slug
                }
              }
              concentrationEnabled
              id
              title
              degreeTypes {
                nodes {
                  degreeTypeOrder
                  name
                }
              }
              modalities
              uri
            }
          }
        }
      }
    }
  }
`

EabProgramDirectory.displayName = 'EabProgramDirectory'
