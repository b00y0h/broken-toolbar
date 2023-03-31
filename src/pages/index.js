import Container from '@/components/atoms/Container'
import Layout from '@/components/common/Layout'
import getPagePropTypes from '@/functions/getPagePropTypes'
import getPostTypeStaticProps from '@/functions/wordpress/postTypes/getPostTypeStaticProps'
import Page from './[...slug]'


// Define route post type.
const postType = 'page'

/**
 * Render the HomePage component.
 *
 * @param  {object}  props      The component attributes as props.
 * @param  {object}  props.post Post data from WordPress.
 * @return {Element}            The HomePage component.
 */
export default function HomePage({ post }) {
  console.log("🚀 ~ file: index.js:19 ~ HomePage ~ post:", post)
  const { seo, ...postData } = post

  // Display dynamic page data if homepage retrieved from WP.
  if (postData && Object.keys(postData).length > 0) {
    return <Page post={post} />
  }

  // Display static page content as fallback.
  return (
    <Layout seo={{ ...seo }}>
      <Container>
        <article>
          <p>
            To display your WordPress homepage dynamically, set your homepage to
            a static page via the WP dashboard (Settings: Reading Settings).
          </p>
        </article>
      </Container>
    </Layout>
  )
}

/**
 * Get post static props.
 *
 * @return {object} Post props.
 */
export async function getStaticProps() {
  return await getPostTypeStaticProps({ slug: '/' }, postType)
}

HomePage.propTypes = {
  ...getPagePropTypes(postType)
}
