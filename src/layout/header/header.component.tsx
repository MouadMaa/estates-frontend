import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'

import Menu from '../menu/menu.component'
import SearchButton from './search-button/search-button.component'
import { StyledHeader } from './header.styles'

interface HeaderProps {
  showSearchButton: boolean
  showSearchForm: boolean
  setShowSearchButton: (value: boolean) => void
  setShowSearchForm: (value: boolean) => void
}

const Header: FC<HeaderProps> = (props) => {
  const { showSearchButton, setShowSearchButton, showSearchForm, setShowSearchForm } = props

  const [showHeaderBG, setHeaderShowBG] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <Link href='/'>
          <a>Devenez hôte</a>
        </Link>

        <Menu />
      </nav>
    </StyledHeader>
  )
}

export default Header
