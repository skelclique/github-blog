import { PostContainer } from './styles'

export function Post() {
  const text = `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.`
  const limit = 181
  return (
    <PostContainer>
      <header>
        <h1>JavaScript data types and data structures</h1>
        <span>Há 1 dia</span>
      </header>
      <p>{text.length > limit ? `${text.substring(0, limit)}...` : text}</p>
    </PostContainer>
  )
}
