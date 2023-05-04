import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'
import { BlogContainer, Cover, PostsContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Cover />
      <Profile />
      <PostsContainer>
        <SearchForm />
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </PostsContainer>
    </BlogContainer>
  )
}
