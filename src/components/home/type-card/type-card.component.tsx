import { FC } from 'react'
import Image from 'next/image'
import 'twin.macro'

import { StyledTypeCard } from './type-card.styles'

const TypeCard: FC = () => {
  return (
    <StyledTypeCard className='group'>
      <figure>
        <Image
          src='/images/hero.jpg'
          alt='maison'
          layout='fill'
          objectFit='cover'
          tw='group-hover:scale-105'
        />
        <div />
      </figure>
      <div>
        <span>Maison</span>
      </div>
    </StyledTypeCard>
  )
}

export default TypeCard
