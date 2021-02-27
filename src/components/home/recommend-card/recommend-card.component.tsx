import { FC } from 'react'
import 'twin.macro'

import { StyledRecommendedCard } from './recommend-card.styles'

const RecommendCard: FC = () => {
  return (
    <StyledRecommendedCard className='group'>
      <figure tw='group-hover:scale-105 group-hover:-translate-y-1'>
        <span>200 000 DHS</span>
        <img tw='group-hover:shadow-lg' src='/images/hero.jpg' alt='villa' />
      </figure>
      <div tw='group-hover:translate-y-6 group-hover:scale-95 group-hover:opacity-90'>
        <div tw='group-hover:shadow-xl'>
          <h4>Modern home in city center</h4>
          <div>
            Villa &bull; 6 Pièces &bull; 3 Chambres &bull; 2 Lits &bull; 150 M<sup>2</sup>
          </div>
        </div>
      </div>
    </StyledRecommendedCard>
  )
}

export default RecommendCard
