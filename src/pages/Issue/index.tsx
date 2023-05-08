import { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  ContentContainer,
  HeaderContainer,
  IssueContainer,
  StatsContainer,
} from './styles'

import { BlogContext } from '../../contexts/BlogContext'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Issue() {
  const { posts } = useContext(BlogContext)
  const { id } = useParams()

  const post = posts.find((post) => post.id === Number(id))

  console.log(post)

  return (
    <IssueContainer>
      {post ? (
        <>
          <HeaderContainer>
            <nav>
              <NavLink to="/">
                <FontAwesomeIcon icon={faChevronLeft} />
                VOLTAR
              </NavLink>
              <a href={post.url} target="_blank" rel="noreferrer">
                VER NO GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </nav>
            <h1>{post.title}</h1>
            <StatsContainer>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span>{post.author}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendarDay} />
                <span
                  title={format(
                    new Date(post.createdAt),
                    'dd/LL/yyyy hh:mm:ss',
                    {
                      locale: ptBR,
                    },
                  )}
                >
                  {formatDistanceToNow(new Date(post.createdAt), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />
                <span>{post.commentsAmount} comentários</span>
              </div>
            </StatsContainer>
          </HeaderContainer>
          <ContentContainer>
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {post.body}
            </ReactMarkdown>
          </ContentContainer>
        </>
      ) : (
        <></>
      )}
    </IssueContainer>
  )
}
