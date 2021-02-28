import { FC } from 'react'

import PropertyCard from '../property-card/property-card.component'
import { StyledAllProperties } from './all-properties.styles'

const AllProperties: FC = () => {
  return (
    <StyledAllProperties>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </StyledAllProperties>
  )
}

export default AllProperties
