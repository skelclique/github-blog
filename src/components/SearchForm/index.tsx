import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
