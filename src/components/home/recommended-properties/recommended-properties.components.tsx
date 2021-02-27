import { FC } from 'react'

import RecommendCard from '../recommend-card/recommend-card.component'
import { StyledRecommendedProperties } from './recommended-properties.styles'

const RecommendedProperties: FC = () => {
  return (
    <StyledRecommendedProperties>
      <h2>Propriétés recommandées au Maroc</h2>

      <div>
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </div>
    </StyledRecommendedProperties>
  )
}

export default RecommendedProperties
