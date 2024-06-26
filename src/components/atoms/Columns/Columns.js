import Blocks from '@/components/molecules/Blocks'
import getBlockStyles from '@/functions/wordpress/blocks/getBlockStyles'
import cn from 'classnames'
import React from 'react'
import * as styles from './Columns.module.scss'

/**
 * Render the Columns component.
 *
 * @param  {object}  props                   Container component props.
 * @param  {string}  props.id                Optional ID/Anchor.
 * @param  {string}  props.className         Optional className.
 * @param  {string}  props.columnCount       Total number of columns.
 * @param  {object}  props.children          React children.
 * @param  {object}  props.style             Custom columns styles.
 * @param  {string}  props.verticalAlignment Vertical alignment of columns.
 * @param  {boolean} props.isStackedOnMobile Checks if the columns are stacked.
 * @return {Element}                         The Columns component.
 */

export default function Columns({
  id,
  className,
  columnCount,
  style,
  // verticalAlignment,
  isStackedOnMobile,
  columns,
  pageContext,
  backgroundColor,
  ...props
}) {
  const columnStyles = getBlockStyles({ style })

  return (
    <section
      id={id || null}
      className={cn(
        styles.columns,
        isStackedOnMobile && styles.columnStacked,
        columnCount && styles[`columns-${columnCount}`],
        className,
        // verticalAlignment === 'center' ? styles.alignCenter : null,
        // verticalAlignment === 'bottom' ? styles.alignBottom : null,
        // backgroundColor === 'white' ? styles.bgWhite : null,
        backgroundColor
        // columnStyles?.background || columnStyles?.backgroundColor
        //   ? styles.hasBackground
        //   : null
      )}
      style={columnStyles}
    >
      {props?.children}
      {/* {columns.map(({ attributes, innerBlocks }, index) => {
        const columnStyle = getBlockStyles({
          style: attributes?.style,
          width: attributes?.width,
          backgroundColor: attributes?.backgroundColor
        })

        return (
          <div
            key={`column-${index}`}
            id={attributes?.anchor || null}
            className={`${styles.column} ${attributes?.className || ''} ${
              attributes?.backgroundColor || ''
            }`}
            style={columnStyle}
          >
            {!!innerBlocks?.length && (
              <Blocks
                blocks={innerBlocks}
                where="blockColumns"
                pageContext={pageContext}
                {...props}
              />
            )}
          </div>
        )
      })} */}
    </section>
  )
}
