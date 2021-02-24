import React, { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
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
  const [showDropdown, setShowDropdown] = useState(false)

  const dropdownButtonRef = useRef()

  useOnClickOutside(dropdownButtonRef, () => setShowDropdown(false))

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onScroll = () => {
    setHeaderShowBG(window.scrollY >= 1)
    setShowSearchButton(window.scrollY >= 160)
    if (window.scrollY < 160) setShowSearchForm(false)
  }

  const toggleDropdown = () => setShowDropdown(!showDropdown)

  return (
    <StyledHeader
      showHeaderBG={showHeaderBG}
      showSearchButton={showSearchButton && !showSearchForm}
      showDropdown={showDropdown}
    >
      <Link href='/'>
        <a>Estates</a>
      </Link>

      <button className='group' onClick={() => setShowSearchForm(true)}>
        <span>Commencez votre recherche</span>
        <div>
          <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle
              cx='11.767'
              cy='11.767'
              r='8.989'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path d='M18.018 18.485L21.542 22' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </div>
      </button>

      <nav>
        <Link href='/'>
          <a>Devenez hôte</a>
        </Link>

        <div ref={dropdownButtonRef}>
          <button onClick={toggleDropdown}>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path d='M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z' />
            </svg>
          </button>

          <div>
            <button>Connexion</button>
            <div />
            <button>Devenez hôte</button>
            <button>Contact</button>
            <button>Aide</button>
          </div>
        </div>
      </nav>
    </StyledHeader>
  )
}

export default Header
