import { FC } from 'react'
import tw from 'twin.macro'

import AllProperties from '@/components/properties/all-properties/all-properties.component'

const Properties: FC = () => {
  return (
    <StyledProperties>
      <AllProperties />
    </StyledProperties>
  )
}

export default Properties

const StyledProperties = tw.section`grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 py-14`
