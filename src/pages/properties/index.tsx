import { FC, Fragment, useEffect, useState } from 'react'
import tw from 'twin.macro'

import { useWindowSize } from '@/hooks/useWindowSize'
import AllProperties from '@/components/properties/all-properties/all-properties.component'
import MapContent from '@/components/properties/map-content/map-content.component'
import MapButton from '@/components/properties/map-button/map-button.component'

const Properties: FC = () => {
  const [show, setShow] = useState('both')

  const { width } = useWindowSize()

  useEffect(() => {
    if (!width) setShow('both')
    else if (width > 1024) setShow('both')
    else setShow('properties')
  }, [width])

  const handleShow = () => setShow(show === 'map' ? 'properties' : 'map')

  let htmlContent = null
  if (show === 'both') {
    htmlContent = (
      <Fragment>
        <AllProperties />
        <MapContent />
      </Fragment>
    )
  } else if (show === 'properties') {
    htmlContent = <AllProperties />
  } else if (show === 'map') {
    htmlContent = <MapContent />
  }

  return (
    <StyledProperties>
      {htmlContent}
      <MapButton onClick={handleShow} mapIsOpen={show === 'map'} />
    </StyledProperties>
  )
}

export default Properties

const StyledProperties = tw.section`grid grid-cols-1 lg:grid-cols-9 gap-8 px-4 sm:px-8 py-14`
