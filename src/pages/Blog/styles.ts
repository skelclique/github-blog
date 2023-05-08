import styled from 'styled-components'

export const PostsContainer = styled.div`
  margin: 4.5rem auto;

  main {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  svg {
    color: ${(props) => props.theme.blue};
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  color: ${(props) => props.theme['base-text']};
`
