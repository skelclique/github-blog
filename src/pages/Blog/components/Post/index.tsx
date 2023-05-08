import { useNavigate } from 'react-router-dom'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import rmv from 'remove-markdown'

import { PostContainer } from './styles'
import * as Blog from '../../../../contexts/BlogContext'

export function Post({ id, title, body, createdAt }: Blog.Post) {
  const navigate = useNavigate()

  function navigateToIssue() {
    navigate(`/issue/${id}`)
  }

  return (
    <PostContainer onClick={navigateToIssue}>
      <header>
        <h1>{title}</h1>
        <span
          title={format(new Date(createdAt), 'dd/LL/yyyy HH:mm:ss', {
            locale: ptBR,
          })}
        >
          {formatDistanceToNow(new Date(createdAt), {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </header>
      <p>
        {rmv(body).length > 181
          ? `${rmv(body).substring(0, 181)}...`
          : rmv(body)}
      </p>
    </PostContainer>
  )
}
