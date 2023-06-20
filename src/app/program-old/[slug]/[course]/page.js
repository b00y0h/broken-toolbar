/* eslint-disable no-console */
import Breadcrumbs from '@/components/atoms/Breadcrumbs'
import Container from '@/components/atoms/Container'
import RichText from '@/components/atoms/RichText/RichText'
import Blocks from '@/components/molecules/Blocks'
// import getPostTypeStaticPaths from '@/functions/wordpress/postTypes/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import { notFound } from 'next/navigation'

const postType = 'program'

// export async function generateStaticParams() {
//   const { paths } = await getPostTypeStaticPaths(postType)

//   const formattedPaths = paths.map((path) => {
//     const { slug } = path.params
//     const lastSlug = slug[slug.length - 1]
//     const secondLastSlug = slug[slug.length - 2]

//     if (slug.length === 2) {
//       return { slug: lastSlug }
//     } else {
//       return { slug: secondLastSlug, course: lastSlug }
//     }
//   })

//   return formattedPaths
// }

const programChildPage = async ({ params }) => {
  const id = `/program/${params?.slug}/${params?.course}`
  const { props } = await getPostTypeStaticProps({ slug: id }, postType)
  const { post } = props || {}

  // Filter the blocks array for core/heading blocks with level attribute equal to 2
  const jumpLinks = post?.blocks?.filter(
    (block) => block.name === 'core/heading' && block.attributes.level === 2
  )

  if (!post) {
    console.log('🛑 no post.props for child page: ', id)
    notFound()
  }

  return (
    <Container>
      <div className="programContent">
        {/* <RichText tag="h1">{post?.title}</RichText> */}

        {/* Render jump links */}
        {jumpLinks.length > 0 && (
          <>
            <h2>On this page</h2>
            <ul>
              {jumpLinks.map((block, index) => (
                <li key={index}>
                  <a href={`#${block.attributes.anchor}`}>
                    {block.attributes.content}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <Breadcrumbs breadcrumbs={post.seo.breadcrumbs} />

        <RichText tag="h2">{post?.title}</RichText>

        <Blocks blocks={post?.blocks} />
      </div>
    </Container>
  )
}

export default programChildPage