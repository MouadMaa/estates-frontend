import { FC, useRef, useState } from 'react'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { MenuSvg } from './menu.svg'
import { StyledMenu } from './menu.styles'

const Menu: FC = () => {
  const [showMenu, setShowDropdown] = useState(false)

  const menuRef = useRef()
  useOnClickOutside(menuRef, () => setShowDropdown(false))

  const toggleMenu = () => setShowDropdown(!showMenu)

  return (
    <StyledMenu ref={menuRef} showMenu={showMenu}>
      <button onClick={toggleMenu}>
        <MenuSvg />
      </button>

      <div>
        <button>Connexion</button>
        <div />
        <button>Devenez hôte</button>
        <button>Contact</button>
        <button>Aide</button>
      </div>
    </StyledMenu>
  )
}

export default Menu
