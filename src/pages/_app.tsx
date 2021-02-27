import { FC } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import Layout from '@/layout/layout.component'
import TwinGlobalStyles from '@/styles/TwinGlobalStyles'
import { useApollo } from '../apollo/apolloClient'

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <TwinGlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
