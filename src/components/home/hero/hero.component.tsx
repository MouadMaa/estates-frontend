import { FC } from 'react'
import Image from 'next/image'

import SearchForm from '@/components/shared/search-form/search-form.component'
import { StyledHero } from './hero.styles'

const Hero: FC = () => {
	return (
		<StyledHero>
			<Image src='/images/hero.jpg' alt='image hero' layout='fill' />
			<SearchForm />
			<div />
		</StyledHero>
	)
}

export default Hero
