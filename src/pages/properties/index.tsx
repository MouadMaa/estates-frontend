import { FC } from 'react'
import tw from 'twin.macro'

import AllProperties from '@/components/properties/all-properties/all-properties.component'
import Map from '@/components/properties/map/map.component'

const Properties: FC = () => {
  return (
    <StyledProperties>
      <AllProperties />
      <Map />
    </StyledProperties>
  )
}

export default Properties

const StyledProperties = tw.section`grid grid-cols-1 lg:grid-cols-9 gap-8 px-4 sm:px-8 py-14`
