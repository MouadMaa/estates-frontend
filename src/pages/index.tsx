import { FC, Fragment } from 'react'
import { GetStaticProps } from 'next'

import { initializeApollo } from '@/apollo/apolloClient'
import { CitiesDocument, TypesDocument } from '@/generated/graphql'
import Hero from '@/components/home/hero/hero.component'
import RecommendedProperties from '@/components/home/recommended-properties/recommended-properties.components'
import Cities from '@/components/home/cities/cities.component'
import Types from '@/components/home/types/types.component'

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

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CitiesDocument,
  })

  await apolloClient.query({
    query: TypesDocument,
  })

  return {
    revalidate: 600,
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
