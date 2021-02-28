import { FC } from 'react'
import Image from 'next/image'
import 'twin.macro'

import { CityFragment } from '@/generated/graphql'
import { StyledCityCard } from './city-card.styles'

interface CityCardProps {
  city: CityFragment
}

const CityCard: FC<CityCardProps> = (props) => {
  const {
    city: { name, image },
  } = props

  return (
    <StyledCityCard className='group'>
      <Image
        src={image?.url as string}
        alt={name}
        layout='fill'
        objectFit='cover'
        tw='group-hover:scale-150 group-hover:rotate-3'
      />
      <div tw='group-hover:opacity-70' />
      <h3 tw='group-hover:scale-100'>{name}</h3>
    </StyledCityCard>
  )
}

export default CityCard
