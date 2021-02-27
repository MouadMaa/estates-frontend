import { FC, Fragment } from 'react'

import Hero from '@/components/home/hero/hero.component'
import Cities from '@/components/home/cities/cities.component'
import Types from '@/components/home/types/types.component'
import RecommendedProperties from '@/components/home/recommended-properties/recommended-properties.components'

const Home: FC = () => {
  return (
    <Fragment>
      <Hero />
      <RecommendedProperties />
      <Cities />
      <Types />
    </Fragment>
  )
}

export default Home
