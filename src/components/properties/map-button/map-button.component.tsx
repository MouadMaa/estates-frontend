import { FC } from 'react'

import { StyledMapButton } from './map-button.styles'
import { MapSvg } from './map-button.svg'

interface MapButtonProps {
  mapIsOpen: boolean
  onClick: () => void
}

const MapButton: FC<MapButtonProps> = (props) => {
  const { mapIsOpen, onClick } = props

  return (
    <StyledMapButton onClick={onClick}>
      <MapSvg />
      <span>{mapIsOpen ? 'Close' : 'Open'} Map</span>
    </StyledMapButton>
  )
}

export default MapButton
