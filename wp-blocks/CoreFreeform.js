/**
 * Default Block
 *
 * The core Default block from Gutenberg.
 *
 * @param  {object}  props                    The component properties.
 * @param  {string}  props.content     HTML that comes from the WordPress editor.
 * @return {Element}                          The  component.
 */

import { gql } from '@apollo/client'

export default function CoreFreeform(props) {
  // could be that content comes from attributes.content or renderedHtml
  const content = props.renderedHtml || props.attributes.content

  // filter out links that are internal to the site but keep image paths
  const filteredContent =
    content &&
    content.replace(
      /(href=["'])(?!(?:https?:\/\/(?:www\.)?wilmington\.edu\/wp-content))(?:https?:\/\/(?:www\.)?wilmington\.edu)(?=[^"']*(?:["']|$))/g,
      '$1'
    )

  return (
    <>
      {/* if there is dynamicContent render set dangerously html */}
      {filteredContent && (
        <div
          className="wp-default-block"
          dangerouslySetInnerHTML={{ __html: filteredContent }}
        />
      )}
    </>
  )
}

CoreFreeform.fragments = {
  entry: gql`
    fragment CoreFreeformFragment on CoreFreeform {
      attributes {
        content
      }
    }
  `,
  key: `CoreFreeformFragment`
}

CoreFreeform.displayName = 'CoreFreeform'
