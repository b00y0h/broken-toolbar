/* eslint-disable no-unused-vars */
import Button from '@/components/atoms/Buttons/Button'
import Image from '@/components/atoms/Image'
import TheDate from '@/components/atoms/TheDate'
import Link from 'next/link'
import EventIcon from '../atoms/EventIcon'

const EventsPost = ({
  isFirst = false,
  post,
  className = null,
  ctx,
  showImage = true,
  isFrontPage = false,
  ...props
}) => {
  // if post is null or undefined, return null
  if (!post) return null

  const { title, featuredImage, uri, eventsFields, multiDay } = post

  // TODO: Andrei, i've added a 'multiDay' field to the post object if you want to display dates differently for multi-day events

  const { node: { sourceUrl, altText, mediaDetails } = {} } =
    featuredImage || {}

  // destructure the eventsFields object
  const {
    event: {
      startDate,
      startTime,
      endDate,
      endTime,
      locationName,
      locationAddress,
      featured
    } = {}
  } = eventsFields || {}

  return (
    <article className={className} {...props}>
      {!isFrontPage && sourceUrl && showImage ? (
        <Image url={sourceUrl} alt={altText} imageMeta={{ mediaDetails }} />
      ) : null}
      <div className="eventContentContainer">
        <TheDate date={startDate} />
        <Link href={uri} className="articleTitle">
          <h3>{title}</h3>
        </Link>
        <div className="eventDetails">
          {startTime && !endTime ? (
            <div className="eventTime">
              <EventIcon icon="time" />
              {startTime}
            </div>
          ) : (
            <div className="eventTime">
              <EventIcon icon="time" />
              {startTime} - {endTime}
            </div>
          )}
          {endDate && (
            <div className="eventEndDate">
              <EventIcon icon="calendar" />
              Ends on {endDate}
            </div>
          )}
          {locationAddress && (
            <address>
              <EventIcon icon="location" />
              <div>
                {locationName && (
                  <>
                    <strong>{locationName}</strong>
                    <br />
                  </>
                )}
                <div>{locationAddress}</div>
              </div>
            </address>
          )}
        </div>
        {featured && <p>{featured}</p>}
        <Button
          className="articleLink"
          url={uri}
          type="regularlink"
          text="Read More"
          ariaLabel={`Read more about ${title}`}
        />
      </div>
    </article>
  )
}

export default EventsPost
