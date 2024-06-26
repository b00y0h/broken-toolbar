'use client'
import { useEffect, useState } from 'react'

function parseHtml(html) {
  return new Promise((resolve) => {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
    iframe.contentWindow.document.open()
    iframe.contentWindow.document.write(html)
    iframe.contentWindow.document.close()
    iframe.addEventListener('load', () => {
      const scriptTags =
        iframe.contentWindow.document.querySelectorAll('script')
      scriptTags.forEach((scriptTag) => {
        const newScriptTag = document.createElement('script')
        newScriptTag.src = scriptTag.src
        document.body.appendChild(newScriptTag)
      })
      const parsedHtml = iframe.contentWindow.document.documentElement.innerHTML
      document.body.removeChild(iframe)
      resolve(parsedHtml)
    })
  })
}

export default function BlockHtml({ content, renderedHtml }) {
  const theHtml = content || renderedHtml
  const [parsedHtml, setParsedHtml] = useState(null)

  useEffect(() => {
    parseHtml(theHtml).then((parsedHtml) => {
      setParsedHtml(parsedHtml)
    })
  }, [theHtml])

  return (
    <div
      className="block-html"
      dangerouslySetInnerHTML={{ __html: parsedHtml || renderedHtml }}
    />
  )
}
