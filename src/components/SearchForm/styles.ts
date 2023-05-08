import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h1 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    border: 0;
    background: ${(props) => props.theme['base-input']};

    padding: 0.75rem 1rem;

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    color: ${(props) => props.theme['base-text']};

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
