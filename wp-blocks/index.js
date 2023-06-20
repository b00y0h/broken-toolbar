/* eslint-disable import/no-anonymous-default-export */
import CoreBlock from './CoreBlock'
import CoreButton from './CoreButton'
import CoreButtons from './CoreButtons'
import CoreColumn from './CoreColumn'
import CoreColumns from './CoreColumns'
import CoreEmbed from './CoreEmbed'
import CoreFreeform from './CoreFreeform'
import CoreGroup from './CoreGroup'
import CoreHeading from './CoreHeading'
import CoreImage from './CoreImage'
import CoreList from './CoreList'
import CoreMediaText from './CoreMediaText'
import CoreParagraph from './CoreParagraph'
import CorePullquote from './CorePullquote'
import CoreQuote from './CoreQuote'
import CoreSpacer from './CoreSpacer'
import CoreVerse from './CoreVerse'
import AcfAthleteCard from './acf/AcfAthleteCard'
import AcfEventsListing from './acf/AcfEventsListing'
import AcfFacultyCard from './acf/AcfFacultyCard'
import AcfFaqListing from './acf/AcfFaqListing'
import AcfFeaturedDept from './acf/AcfFeaturedDept'
import AcfHomeHero from './acf/AcfHomeHero'
import AcfHomeTab from './acf/AcfHomeTab'
import AcfNewsListing from './acf/AcfNewsListing'
import AcfTestimonialBlock from './acf/AcfTestimonialBlock'
import EabProgramDirectory from './custom/EabProgramDirectory'

/**
 * This object acts as the registry of blocks in your React Gutenberg Bridge.
 * Any block that is added here may be used when rendering contentBlocks from
 * WPGraphQL Content Blocks.
 *
 * @see https://faustjs.org/docs/gutenberg/getting-started
 */
export default {
  CoreBlock,
  CoreButton,
  CoreButtons,
  CoreColumn,
  CoreColumns,
  CoreEmbed,
  CoreFreeform,
  CoreGroup,
  CoreHeading,
  CoreImage,
  CoreList,
  CoreMediaText,
  CoreParagraph,
  CorePullquote,
  CoreQuote,
  CoreSpacer,
  CoreVerse,
  AcfAthleteCard,
  AcfEventsListing,
  AcfFacultyCard,
  AcfFaqListing,
  AcfFeaturedDept,
  AcfHomeHero,
  AcfHomeTab,
  AcfNewsListing,
  AcfTestimonialBlock,
  EabProgramDirectory
}