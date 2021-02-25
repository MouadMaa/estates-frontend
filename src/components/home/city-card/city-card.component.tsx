import { FC } from 'react'
import 'twin.macro'

import { StyledCityCard } from './city-card.styles'

const CityCard: FC = () => {
  return (
    <StyledCityCard className='group'>
      <img src='/images/hero.jpg' alt='larache' tw='group-hover:scale-150 group-hover:rotate-3' />
      <div tw='group-hover:opacity-70'></div>
      <h3 tw='group-hover:scale-100'>Larache</h3>
    </StyledCityCard>
  )
}

export default CityCard
