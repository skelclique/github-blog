import styled from 'styled-components'

export const PostContainer = styled.section`
  width: 416px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;

  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
    transition: border-color 0.1s;
  }

  header {
    display: flex;
    margin-bottom: 1.25rem;
    gap: 1rem;

    h1 {
      font-size: 1.25rem;
      flex: 1;
    }

    span {
      font-size: 0.875rem;
      line-height: 2.3;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
