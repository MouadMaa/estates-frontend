import { FC } from 'react'
import Image from 'next/image'

import { StyledHero } from './hero.styles'

const Hero: FC = () => {
	const handleSubmit = (event: React.FormEvent) => event.preventDefault()

	return (
		<StyledHero>
			<Image src='/images/hero.jpg' alt='image hero' layout='fill' />
			<div />

			<form onSubmit={handleSubmit}>
				<button>Opertions</button>
				<button>Ville</button>
				<button>Type</button>
				<button>
					<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<circle cx='11.767' cy='11.767' r='8.989' strokeLinecap='round' strokeLinejoin='round' />
						<path d='M18.018 18.485L21.542 22' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
					<span>Rechercher</span>
				</button>
			</form>
		</StyledHero>
	)
}

export default Hero
