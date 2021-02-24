import { FC } from 'react'

import { StyledSearchButton } from './search-button.styles'
import { SearchButtonSvg } from './search-button.svg'

interface SearchButtonProps {
  show: boolean
  setShowSearchForm: (value: boolean) => void
}

const SearchButton: FC<SearchButtonProps> = (props) => {
  const { show, setShowSearchForm } = props

  return (
    <StyledSearchButton className='group' show={show} onClick={() => setShowSearchForm(true)}>
      <span>Commencez votre recherche</span>
      <div>
        <SearchButtonSvg />
      </div>
    </StyledSearchButton>
  )
}

export default SearchButton
