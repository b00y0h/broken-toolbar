import getMenuByLocation from '@/functions/wordpress/menus/getMenuByLocation'
import formatArchiveSeoData from '@/functions/wordpress/seo/formatArchiveSeoData'
import formatDefaultSeoData from '@/functions/wordpress/seo/formatDefaultSeoData'
import archiveQuerySeo from '@/lib/wordpress/_config/archiveQuerySeo'
import { postTypes } from '@/lib/wordpress/_config/postTypes'
import { initializeWpApollo } from '@/lib/wordpress/connector'

/**
 * Retrieve post archive.
 *
 * @param  {string}  postType WP post type.
 * @param  {string}  orderBy  Order by: field.
 * @param  {string}  order    Order by: direction.
 * @param  {string}  cursor   Start/end cursor for pagination.
 * @param  {boolean} getNext  Whether to retrieve next set of posts (true) or previous set (false).
 * @param  {number}  perPage  Number of posts per page.
 * @return {object}           Object containing Apollo client instance and post archive data or error object.
 */
export default async function getPostTypeArchive(
  postType,
  orderBy = 'DATE',
  order = 'DESC',
  cursor = null,
  getNext = true,
  perPage = 10
) {
  // Retrieve post type query.
  const query = archiveQuerySeo?.[postType]?.query ?? null

  // Get/create Apollo instance.
  const apolloClient = initializeWpApollo()

  // Set up return object.
  const response = {
    apolloClient,
    posts: null,
    pagination: null,
    error: false,
    errorMessage: null
  }

  // If no query is set for given post type, return error message.
  if (!query) {
    return {
      apolloClient,
      error: true,
      errorMessage: `Post type \`${postType}\` archives are not supported.`
    }
  }

  // Determine query variables.
  const variables = {
    first: getNext ? perPage : null, // Only used for retrieving next set.
    last: getNext ? null : perPage, // Only used for retrieving previous set.
    after: getNext ? cursor : null, // Only used for retrieving next set.
    before: getNext ? null : cursor, // Only used for retrieving previous set.
    orderBy,
    order
  }

  const mainNavMenuItems = await getMenuByLocation('MAIN_NAV')
  const utilityNavMenuItems = await getMenuByLocation('UTILITY_NAV')
  const footerNavMenuItems = await getMenuByLocation('FOOTER_NAV')
  const resourceNavMenuItems = await getMenuByLocation('RESOURCE_NAV')

  // Execute query.
  await apolloClient
    .query({ query, variables })
    .then((archive) => {
      const { siteSeo, ...archiveData } = archive.data

      // Retrieve menus.
      response.menus = {
        mainNav: mainNavMenuItems,
        utilityNav: utilityNavMenuItems,
        footerNav: footerNavMenuItems,
        resourceNav: resourceNavMenuItems
      }

      // Retrieve default SEO data.
      response.defaultSeo = formatDefaultSeoData({ siteSeo })

      const pluralType = postTypes[postType]?.pluralName ?? postType
      const data = archiveData?.[pluralType] ?? null

      // Set error props if data not found.
      if (!data?.edges || !data?.pageInfo) {
        response.error = true
        response.errorMessage = `An error occurred while trying to retrieve data for ${pluralType} archive.`

        return null
      }

      // Flatten posts array to include inner node post data.
      response.posts = data.edges.map((post) => post.node)

      // Attempt to use posts page for blog, default to custom SEO.
      response.post = {
        seo: formatArchiveSeoData(
          postType,
          response.defaultSeo,
          archiveQuerySeo?.[postType],
          data?.archiveSeo
        )
      }

      // Extract pagination data.
      response.pagination = data.pageInfo
    })
    .catch((error) => {
      response.error = true
      response.errorMessage = error.message
    })

  return response
}
