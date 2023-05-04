import styled from 'styled-components'

export const BlogContainer = styled.div``

export const Cover = styled.header`
  background: url(/src/assets/header-cover.svg) center center / cover no-repeat;
  height: 100%;
  min-height: 296px;
`

export const PostsContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto;

  main {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
