'use client'

import Image from '@/components/atoms/Image'
import Link from '@/components/common/Link'
import React, { useState } from 'react'

const AthleteCard = ({ title, image, description, link }) => {
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <>
      <Link href={link}>
        <div onMouseEnter={toggleDescription} onMouseLeave={toggleDescription}>
          <h3>{title}</h3>
          {image && (
            <Image
              url={image.mediaItemUrl}
              alt={image.altText}
              imageMeta={{ mediaDetails: image.mediaDetails }}
            />
          )}
          {showDescription && <p>{description}</p>}
        </div>
      </Link>
    </>
  )
}

export default AthleteCard
