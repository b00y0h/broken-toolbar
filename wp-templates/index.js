import ArchiveProgram from './archive-program'
import frontPage from './front-page'
import page from './page'
import singular from './single'
import SingleEvent from './single-event'
import SingleFaculty from './single-faculty'
import SingleNews from './single-news'
import SingleProgram from './single-program'
import TaxonomyDepartment from './taxonomy-department'

const templates = {
  'front-page': frontPage,
  page,
  singular,
  'single-program': SingleProgram,
  'archive-program': ArchiveProgram,
  'single-faculty': SingleFaculty,
  'single-event': SingleEvent,
  'single-news': SingleNews,
  'taxonomy-department': TaxonomyDepartment
}

export default templates
