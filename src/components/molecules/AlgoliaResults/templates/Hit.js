import Link from '@/components/common/Link'
import React from 'react'
import * as styles from '../AlgoliaResults.module.scss'

/**
 * Render the Hit component.
 *
 * @param  {object}  props     The component attributes as props.
 * @param  {object}  props.hit The hit data.
 * @return {Element}           The Hit component.
 */
export default function Hit({ hit }) {
  return (
    <div className={styles.hit}>
      <h3>{hit.post_title}</h3>
      <p className={styles.date}>{hit.post_date_formatted}</p>
      <Link href={hit.permalink}>Learn More {hit.permalink}</Link>
    </div>
  )
}
