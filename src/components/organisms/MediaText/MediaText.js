'use client'

import Button from '@/components/atoms/Buttons/Button'
import DisplayImage from '@/components/atoms/Image'
import cn from 'classnames'
import React, { useEffect } from 'react'
import * as styles from './MediaText.module.css'

/**
 * Render the MediaText component.
 *
 * @param  {object}  props                   MediaText component props.
 * @param  {string}  props.body              The body text.
 * @param  {Element} props.children          The child elements.
 * @param  {string}  props.className         The className.
 * @param  {object}  props.cta               The cta object with text and url strings.
 * @param  {object}  props.focalPoint        The focal point coordinates for the image fill setting.
 * @param  {string}  props.id                Optional element ID.
 * @param  {object}  props.image             The image object with url and alt text.
 * @param  {boolean} props.imageFill         Whether to crop image to fill.
 * @param  {boolean} props.mediaLeft         Whether to show media on the left of the text.
 * @param  {boolean} props.isStackedOnMobile     Whether to stack media and text on mobile.
 * @param  {object}  props.style             Custom media text styles.
 * @param  {string}  props.title             The title.
 * @param  {string}  props.verticalAlignment Vertical alignment of text.
 * @return {Element}                         The MediaText component.
 */
export default function MediaText({
  body,
  children,
  className,
  cta,
  focalPoint,
  id,
  image,
  imageFill,
  mediaLeft = false,
  isStackedOnMobile,
  style,
  title,
  verticalAlignment
}) {
  useEffect(() => {
    if ((children && title) || (children && body) || (children && cta)) {
      console.warn(
        'The title, body and cta props are ignored when using children.'
      )
    }
  })

  const imageFillStyle = !imageFill
    ? null
    : {
        backgroundImage: `url(${image?.url || ''})`,
        backgroundPosition: `${focalPoint.x} ${focalPoint.y}`
      }

  return (
    <section
      id={id}
      className={cn(
        styles.mediaText,
        mediaLeft ? styles.mediaLeft : null,
        className,
        !isStackedOnMobile ? styles.noStack : null,
        verticalAlignment === 'top' ? styles.alignTop : null,
        verticalAlignment === 'bottom' ? styles.alignBottom : null,
        imageFill && image?.url ? styles.imageFill : null
      )}
      style={style}
    >
      <div className={styles.text}>
        {children || (
          <>
            {title && <h1 className={styles.title}>{title}</h1>}
            {body && <p className={styles.body}>{body}</p>}
            {cta && (
              <Button
                className={styles.button}
                url={cta.url ? cta.url : null}
                text={cta.text ? cta.text : null}
                icon={cta.icon ? cta.icon : null}
                type="primary"
                size="md"
              />
            )}
          </>
        )}
      </div>
      <div className={styles.media} style={imageFillStyle}>
        {image && image.url && (
          <DisplayImage
            className={styles.imageWrap}
            alt={image.alt}
            imageMeta={{ mediaItemUrl: image.url, altText: image.alt }}
            url={image.url}
            nextImageFill={true}
          />
        )}
      </div>
    </section>
  )
}
