import { FC, Fragment } from 'react'

import { useTypesQuery } from '@/generated/graphql'
import { TextLink } from '@/components/ui'
import TypeCard from '../type-card/type-card.component'
import { StyledTypes } from './types.styles'

const Types: FC = () => {
  const { types } = useTypesQuery().data!

  if (!types) return <Fragment />

  return (
    <StyledTypes>
      <h2>Types de propriétés</h2>
      <div>{types.map((type) => type && <TypeCard key={type.id} type={type} />)}</div>
      <TextLink href='/' text='Découvrez plus des types' />
    </StyledTypes>
  )
}

export default Types
