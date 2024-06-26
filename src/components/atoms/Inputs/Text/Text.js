import React from 'react'
import { Field } from 'formik'
import InputError from '@/components/atoms/Inputs/InputError'
import * as styles from './Text.module.css'
import cn from 'classnames'

/**
 * Render the Text component.
 *
 * @param  {object}  props             The component attributes as props.
 * @param  {string}  props.className   Text wrapper className.
 * @param  {string}  props.description Text description.
 * @param  {string}  props.id          Text input id.
 * @param  {string}  props.label       Text input label.
 * @param  {boolean} props.isRequired  If input is required.
 * @param  {string}  props.type        Text input type.
 * @return {Element}                   The Text component.
 */
export default function Text({
  className,
  description,
  id,
  isRequired = false,
  label,
  type
}) {
  return (
    <div className={cn(styles.text, className)}>
      {label && (
        <label htmlFor={id} required={isRequired}>
          {label}
        </label>
      )}
      <Field
        aria-required={isRequired}
        id={id}
        name={id}
        required={isRequired}
        type={type}
      />
      {description && <p>{description}</p>}
      <InputError name={id} />
    </div>
  )
}
