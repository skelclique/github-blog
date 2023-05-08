import styled from 'styled-components'

export const IssueContainer = styled.div``

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -6rem;

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: ${(props) => props.theme.blue};
        transition: border-color 0.1s;
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
  }
`

export const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }

    svg {
      font-size: 1rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const ContentContainer = styled.div`
  padding: 2.5rem 2rem;
  color: ${(props) => props.theme['base-text']};

  p:not(:first-child),
  h1:not(:first-child),
  h2:not(:first-child),
  h3:not(:first-child),
  pre:not(:first-child) {
    margin: 2rem 0 0;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  pre {
    padding: 1rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 2px;

    .hljs-keyword {
      color: #80abd6;
    }

    .hljs-number,
    .hljs-string,
    .hljs-literal {
      color: #6ad445;
    }

    .hljs-comment {
      color: #4f6173;
    }
  }

  img {
    max-width: 100%;
  }
`
