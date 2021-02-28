import { FC } from 'react'
import 'twin.macro'

import { StyledPropertyCard } from './property-card.styles'
import { AddressSvg, ArrowSvg } from './property-card.svg'

const PropertyCard: FC = () => {
  return (
    <StyledPropertyCard className='group'>
      <figure>
        <img
          src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt='villa'
        />
        <button tw='group-hover:opacity-100'>
          <ArrowSvg />
        </button>
        <button tw='group-hover:opacity-100'>
          <ArrowSvg />
        </button>
      </figure>
      <div>
        <div>
          <p>200 000 DHS / MOIS</p>
          <div>
            <div>
              <AddressSvg />
              <span>Tanger centre ville, Morocco</span>
            </div>
          </div>
        </div>
        <div>
          <h2>Moderne villa dans le centre ville</h2>
          <div>
            Villa &bull; 6 Pièces &bull; 3 Chambres &bull; 2 Lits &bull; 150 M<sup>2</sup>
          </div>
        </div>
      </div>
    </StyledPropertyCard>
  )
}

export default PropertyCard
