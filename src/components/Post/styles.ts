import styled from 'styled-components'

export const PostContainer = styled.section`
  width: 416px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    h1 {
      font-size: 1.25rem;
      flex: 1;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    text-overflow: ellipsis;
  }
`
