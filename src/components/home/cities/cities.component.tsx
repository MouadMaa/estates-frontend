import { FC, Fragment } from 'react'

import { TextLink } from '@/components/ui'
import CityCard from '../city-card/city-card.component'
import { StyledCities } from './cities.styles'
import { useCitiesQuery } from '@/generated/graphql'

const Cities: FC = () => {
  const { cities } = useCitiesQuery().data!

  if (!cities) return <Fragment />

  return (
    <StyledCities>
      <h2>Propriétés au Maroc par ville</h2>
      <div>{cities.map((city) => city && <CityCard key={city.id} city={city} />)}</div>
      <TextLink href='/' text='Découvrez plus de villes' />
    </StyledCities>
  )
}

export default Cities
