import { FC } from 'react'
import 'twin.macro'

import { TextLink } from '@/components/ui'
import CityCard from '../city-card/city-card.component'
import { StyledCities } from './cities.styles'

const Cities: FC = () => {
  return (
    <StyledCities>
      <h2>Villes immobilières au Maroc</h2>

      <div>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </div>

      <TextLink href='/' text='Découvrir plus des villes' />
    </StyledCities>
  )
}

export default Cities
