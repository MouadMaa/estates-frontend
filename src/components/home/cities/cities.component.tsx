import { FC } from 'react'
import 'twin.macro'

import { TextLink } from '@/components/ui'
import CityCard from '../city-card/city-card.component'
import { StyledCities } from './cities.styles'
import { useCitiesQuery } from '@/generated/graphql'

const Cities: FC = () => {
  const { cities } = useCitiesQuery().data!

  console.log(cities)

  return (
    <StyledCities>
      <h2>Propriétés au Maroc par ville</h2>

      <div>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </div>

      <TextLink href='/' text='Découvrez plus de villes' />
    </StyledCities>
  )
}

export default Cities
