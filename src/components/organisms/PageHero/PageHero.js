import Image from '@/components/atoms/Image/Image'
import RichText from '@/components/atoms/RichText/RichText'
import { className } from 'classnames/bind'

/**
 * @param {string} tagText - Text to be displayed in the tag
 * @param {string} className - Optional class name to be added to the tag
 * @param {string} sourceUrl - Optional image source URL
 * @param {string} altText - Optional image alt text
 * @param {object} mediaDetails - Optional image meta data
 */

// interface PageHeroProps {
//   text: string
//   className?: string
//   sourceUrl?: string
//   altText?: string
//   mediaDetails?: any
// }

export default function PageHero({
  text,
  sourceUrl,
  altText,
  mediaDetails,
  pageType,
  newsCategory
}) {
  return (
    <>
      <header className={sourceUrl ? 'hero-w-image' : 'no-img-hero'}>
        <div className="page-hero">
          <Image
            url={sourceUrl}
            alt={altText}
            imageMeta={{ mediaDetails }}
            width="900"
            height="300"
          />
        </div>

        <div className="page-head">
          <RichText tag="h1">{text}</RichText>
          {pageType === 'news' && newsCategory ? (
            <div className="news-category">
              <span>{newsCategory}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </header>
    </>
  )
}
