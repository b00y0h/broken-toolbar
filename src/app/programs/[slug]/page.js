import Breadcrumbs from '@/components/atoms/Breadcrumbs/Breadcrumbs'
import Container from '@/components/atoms/Container'
import Blocks from '@/components/molecules/Blocks'
import getPostTypeStaticPaths from '@/functions/wordpress/postTypes/getPostTypeStaticPaths'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import { notFound } from 'next/navigation'

const postType = 'program'

export async function generateStaticParams() {
  const { paths } = await getPostTypeStaticPaths(postType)

  const formattedPaths = paths.map((path) => {
    const { slug } = path.params
    const lastSlug = slug[slug.length - 1]
    const secondLastSlug = slug[slug.length - 2]

    if (slug.length === 2) {
      return { slug: lastSlug }
    } else {
      return { slug: secondLastSlug, course: lastSlug }
    }
  })

  return formattedPaths
}

export default async function Page({ params }) {
  const id = `/programs/${params?.slug}`
  const { props } = await getPostTypeStaticProps({ slug: id }, postType)
  const { post } = props || {}

  // Filter the blocks array for core/heading blocks with level attribute equal to 2
  const jumpLinks = post?.blocks?.filter(
    (block) => block.name === 'core/heading' && block.attributes.level === 2
  )

  if (!post) {
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
        <Blocks
          blocks={post?.blocks}
          departments={post?.departments?.nodes}
          programOrgRelationship={post?.programOrgRelationship?.programorg}
        />
      </div>
    </Container>
  )
}
