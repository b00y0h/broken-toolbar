import React from 'react'
import Image from '@/components/atoms/Image'
import RichText from '@/components/atoms/RichText'
import styles from './HomeHero.module.scss'
import MainCta from '@/components/atoms/Buttons/MainCta'

function Hero({ imageMeta, content, ctas }) {
  return (
    <div className={styles.homeHero}>
      {/* <pre>FILE: HomeHero.tsx</pre> */}
      <div className={styles.heroIntroContent}>
        <div className={styles.introCopy}>
          <RichText tag="span">{content}</RichText>
        </div>
        <ul className={styles.ctasRow}>
          {ctas.map((cta, index) => (
            <li key={index}>
              <MainCta
                key={index}
                text={cta.title}
                icon={cta.icon}
                url={cta.url}
              />
            </li>
          ))}
        </ul>
      </div>
      {imageMeta && (
        <Image
          className={styles.heroImage}
          alt={imageMeta.altText}
          priority={true}
          imageMeta={imageMeta}
        />
      )}
    </div>
  )
}

export default Hero