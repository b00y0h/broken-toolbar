/* eslint-disable no-unused-vars */
import ImageGallery from '@/components/molecules/ImageGallery'
import PropTypes from 'prop-types'

/**
 * Image Gallery block
 *
 * The core Image Gallery block from Gutenberg.
 *
 * @param  {object}  props           The component props.
 * @param  {string}  props.anchor    The anchor/id of the block.
 * @param  {string}  props.caption   The image caption.
 * @param  {string}  props.className The image class.
 * @param  {number}  props.columns   The amount of columns.
 * @param  {Array}   props.images    The array of images.
 * @return {Element}                 The ImageGallery component.
 */
export default function BlockImageGallery({
  anchor,
  caption,
  columns,
  className,
  images,
  innerBlocks
}) {
  return (
    <ImageGallery
      anchor={anchor}
      caption={caption}
      columns={columns}
      className={className}
      innerBlocks={innerBlocks}
    />
  )
}

BlockImageGallery.propTypes = {
  anchor: PropTypes.string,
  caption: PropTypes.string,
  columns: PropTypes.number,
  className: PropTypes.string,
  sizeSlug: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      caption: PropTypes.string,
      fullUrl: PropTypes.string,
      id: PropTypes.string,
      link: PropTypes.string,
      url: PropTypes.string
    })
  )
}
