import { FC, Fragment } from 'react'
import 'twin.macro'

import Hero from '@/components/home/hero/hero.component'
import Cities from '@/components/home/cities/cities.component'

const Home: FC = () => {
  return (
    <Fragment>
      <Hero />
      <Cities />
      <section tw='h-screen bg-gray-100' />
      <section tw='h-screen bg-gray-200' />
      <section tw='h-screen bg-gray-100' />
    </Fragment>
  )
}

export default Home
