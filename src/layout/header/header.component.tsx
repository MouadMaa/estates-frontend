import React, { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { StyledHeader } from './header.styles'

const Header: FC = () => {
	const [ showHeaderBG, setHeaderShowBG ] = useState(false)
	const [ showSearch, setShowSearch ] = useState(false)
	const [ showDropdown, setShowDropdown ] = useState(false)

	const dropdownButtonRef = useRef()

	useOnClickOutside(dropdownButtonRef, () => setShowDropdown(false))

	useEffect(() => {
		window.addEventListener('scroll', onScrollShowBG)
		return () => window.removeEventListener('scroll', onScrollShowBG)
	}, [])

	const onScrollShowBG = () => {
		setHeaderShowBG(window.scrollY >= 1)
		setShowSearch(window.scrollY >= 160)
	}

	const toggleDropdown = () => setShowDropdown(!showDropdown)

	return (
		<StyledHeader showHeaderBG={showHeaderBG} showSearch={showSearch} showDropdown={showDropdown}>
			<Link href='/'>
				<a>Estates</a>
			</Link>

			<div>
				<span>Commencez votre recherche</span>
				<button>
					<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle cx='11.767' cy='11.767' r='8.989' strokeLinecap='round' strokeLinejoin='round' />
						<path d='M18.018 18.485L21.542 22' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
				</button>
			</div>

			<nav>
				<Link href='/'>
					<a>Devenez hôte</a>
				</Link>

				<div ref={dropdownButtonRef}>
					<button onClick={toggleDropdown}>
						<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
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
