import { FC } from 'react'

import { TextLink } from '@/components/ui'
import TypeCard from '../type-card/type-card.component'
import { StyledTypes } from './types.styles'

const Types: FC = () => {
  return (
    <StyledTypes>
      <h2>Types de propriétés</h2>

      <div>
        <TypeCard />
        <TypeCard />
        <TypeCard />
      </div>

      <TextLink href='/' text='Découvrez plus des types' />
    </StyledTypes>
  )
}

export default Types
