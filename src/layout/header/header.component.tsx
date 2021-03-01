import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'

import Menu from '../menu/menu.component'
import SearchButton from './search-button/search-button.component'
import { StyledHeader } from './header.styles'
import { useRouter } from 'next/dist/client/router'

interface HeaderProps {
  showSearchButton: boolean
  showSearchForm: boolean
  setShowSearchButton: (value: boolean) => void
  setShowSearchForm: (value: boolean) => void
}

const Header: FC<HeaderProps> = (props) => {
  const { showSearchButton, setShowSearchButton, showSearchForm, setShowSearchForm } = props

  const router = useRouter()

  const [showHeaderBG, setHeaderShowBG] = useState(false)

  useEffect(() => {
    if (router.pathname === '/') {
      window.addEventListener('scroll', onScroll)
      setHeaderShowBG(false)
    } else {
      setHeaderShowBG(true)
    }
    return () => {
      if (router.pathname === '/') window.removeEventListener('scroll', onScroll)
    }
  }, [router])

  const onScroll = () => {
    setHeaderShowBG(window.scrollY >= 1)
    setShowSearchButton(window.scrollY >= 160)
    if (window.scrollY < 160) setShowSearchForm(false)
  }

  return (
    <StyledHeader showHeaderBG={showHeaderBG}>
      <Link href='/'>
        <a>Estates</a>
      </Link>

      <SearchButton
        show={showSearchButton && !showSearchForm}
        setShowSearchForm={setShowSearchForm}
      />

      <nav>
        <Link href='/properties'>
          <a>Devenez hôte</a>
        </Link>

        <Menu />
      </nav>
    </StyledHeader>
  )
}

export default Header
