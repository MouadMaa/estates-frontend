import { FC, useEffect, useRef, useState } from 'react'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import SearchForm from '@/components/shared/search-form/search-form.component'
import { StyledSearch } from './search.styles'
import { useRouter } from 'next/router'

interface SearchProps {
  showSearchForm: boolean
  setShowSearchForm: (value: boolean) => void
}

const Search: FC<SearchProps> = (props) => {
  const { showSearchForm, setShowSearchForm } = props

  const router = useRouter()

  const [removePadding, setRemovePadding] = useState(false)

  const searchRef = useRef(null)
  useOnClickOutside(searchRef, () => setShowSearchForm(false))

  useEffect(() => {
    setRemovePadding(router.pathname !== '/')
  }, [router])

  useEffect(() => {
    if (router.pathname !== '/') window.addEventListener('scroll', onScroll)
    return () => {
      if (router.pathname !== '/') window.removeEventListener('scroll', onScroll)
    }
  }, [router])

  const onScroll = () => setRemovePadding(window.scrollY < 1)

  return showSearchForm ? (
    <StyledSearch ref={searchRef} removePadding={removePadding}>
      <SearchForm />
    </StyledSearch>
  ) : null
}

export default Search
