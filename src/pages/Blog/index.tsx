import { useContext } from 'react'

import { Post } from './components/Post'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'

import { LoadingContainer, NotFoundContainer, PostsContainer } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { BlogContext } from '../../contexts/BlogContext'

export function Blog() {
  const { posts } = useContext(BlogContext)

  return (
    <div>
      <Profile />
      <PostsContainer>
        <SearchForm />
        <main>
          {!posts ? (
            <LoadingContainer>
              <FontAwesomeIcon icon={faSpinner} spin size="xl" />
            </LoadingContainer>
          ) : null}
          {posts?.length ? (
            posts.map((item) => {
              return (
                <Post
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  body={item.body}
                  createdAt={item.createdAt}
                  author={item.author}
                  commentsAmount={item.commentsAmount}
                  url={item.url}
                />
              )
            })
          ) : (
            <NotFoundContainer>Nenhum resultado encontrado!</NotFoundContainer>
          )}
        </main>
      </PostsContainer>
    </div>
  )
}
