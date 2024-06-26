import Button from '@/components/atoms/Buttons/Button'
import ProgramCard from '@/components/molecules/ProgramCard'
import Carousel from 'react-multi-carousel'
import styles from './BlockFeaturedPrograms.module.scss'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const BlockFeaturedPrograms = ({ featuredPrograms }) => {
  return (
    <div className={styles.featuredPrograms}>
      {/* <h2>Featured Programs</h2> */}
      <Carousel
        containerClass={styles.carouselContainer}
        responsive={responsive}
        infinite
      >
        {featuredPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            excerpt={program.excerpt}
            link={program.uri}
            image={program.featuredImage?.node}
          />
        ))}
      </Carousel>
      <div className={styles.viewAllCta}>
        <Button
          url="/academics/program-directory"
          text="View All Programs"
          secondary
        />
      </div>
    </div>
  )
}

export default BlockFeaturedPrograms
