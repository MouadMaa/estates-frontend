import { FC, Fragment, useState } from 'react'
import Head from 'next/head'

import GlobalStyles from '@/styles/GlobalStyles'
import Header from './header/header.component'
import Search from './search/search.component'
import { StyledMain } from './layout.styles'

const Layout: FC = (props) => {
  const { children } = props

  const [showSearchButton, setShowSearchButton] = useState(false)
  const [showSearchForm, setShowSearchForm] = useState(false)

  return (
    <Fragment>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap'
          rel='stylesheet'
        />
        <title>Estates</title>
      </Head>
      <GlobalStyles />
      <Header
        showSearchButton={showSearchButton}
        setShowSearchButton={setShowSearchButton}
        showSearchForm={showSearchForm}
        setShowSearchForm={setShowSearchForm}
      />
      <Search showSearchForm={showSearchForm} setShowSearchForm={setShowSearchForm} />
      <StyledMain>{children}</StyledMain>
    </Fragment>
  )
}

export default Layout
