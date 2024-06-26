import PropTypes from 'prop-types'
import React from 'react'
import * as styles from './Container.module.scss'
import cn from 'classnames'

/**
 * Render the Container component.
 *
 * @param  {object}  props            Container component props.
 * @param  {object}  props.children   Container children.
 * @param  {boolean} props.paddingTop Should container render top padding.
 * @param  {boolean} props.paddingBtm Should container render bottom padding.
 * @return {Element}                  The Container component.
 */
export default function Container({
  children,
  paddingTop = true,
  paddingBtm = true
}) {
  return (
    <div
      className={cn(
        styles.containerW,
        paddingTop && styles.paddingTop,
        paddingBtm && styles.paddingBtm
      )}
    >
      {children && children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  paddingTop: PropTypes.bool,
  paddingBtm: PropTypes.bool
}
