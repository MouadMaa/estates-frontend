import { FC } from 'react'
import Image from 'next/image'
import 'twin.macro'

import { TypeFragment } from '@/generated/graphql'
import { StyledTypeCard } from './type-card.styles'

interface TypeCardProps {
  type: TypeFragment
}

const TypeCard: FC<TypeCardProps> = (props) => {
  const {
    type: { name, image },
  } = props

  return (
    <StyledTypeCard className='group'>
      <figure>
        <Image
          src={image?.url || ''}
          alt={name}
          layout='fill'
          objectFit='cover'
          tw='group-hover:scale-105'
        />
        <div />
      </figure>
      <div>
        <span>{name}</span>
      </div>
    </StyledTypeCard>
  )
}

export default TypeCard
