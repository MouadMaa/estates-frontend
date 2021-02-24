import { FC, useRef } from 'react'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import SearchForm from '@/components/shared/search-form/search-form.component'
import { StyledSearch } from './search.styles'

interface SearchProps {
  showSearchForm: boolean
  setShowSearchForm: (value: boolean) => void
}

const Search: FC<SearchProps> = (props) => {
  const { showSearchForm, setShowSearchForm } = props

  const searchRef = useRef()
  useOnClickOutside(searchRef, () => setShowSearchForm(false))

  return (
    showSearchForm && (
      <StyledSearch ref={searchRef}>
        <SearchForm />
      </StyledSearch>
    )
  )
}

export default Search
