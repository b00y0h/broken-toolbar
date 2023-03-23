import * as React from "react"
import Link from "@/components/common/Link"
import Image from '@/components/atoms/Image';
import ParsedContent from "@/functions/parsedContent"
import * as styles from "./ProgramCard.module.scss"

const ProgramCard = ({ title, excerpt, link, image }) => {
  return (
    <div className={styles.programCard}>
      <Link href={link}>
        {image && <Image url={image.mediaItemUrl} alt={image.altText} imageMeta={ {mediaDetails: image.mediaDetails} }/>}
        <h3>{title}</h3>
        <ParsedContent content={excerpt} />
      </Link>
    </div>
  )
}

export default ProgramCard
