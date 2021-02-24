import { FC } from 'react'

import { SearchFormSvg } from './search-form.svg'
import { StyledSearchForm } from './search-form.styles'

const SearchForm: FC = () => {
  const handleSubmit = (event: React.FormEvent) => event.preventDefault()

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <button>Opertions</button>
      <button>Ville</button>
      <button>Type</button>
      <button>Prix</button>
      <button>
        <SearchFormSvg />
        <span>Rechercher</span>
      </button>
    </StyledSearchForm>
  )
}

export default SearchForm
