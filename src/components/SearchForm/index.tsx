import { useContext, useState } from 'react'
import { SearchFormContainer } from './styles'
import { BlogContext } from '../../contexts/BlogContext'

export function SearchForm() {
  const { posts, fetchPosts } = useContext(BlogContext)
  const [query, setQuery] = useState('')

  function searchPosts() {
    fetchPosts(query)
  }

  return (
    <SearchFormContainer>
      <header>
        <h1>Publicações</h1>
        <span>{posts?.length} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          e.key === 'Enter' && searchPosts()
        }}
        onBlur={searchPosts}
      />
    </SearchFormContainer>
  )
}
