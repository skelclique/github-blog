import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 864px;
  height: 212px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  background: ${(props) => props.theme['base-profile']};

  margin-top: -6rem;
`

export const ContentContainer = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 1.3;
    }

    a {
      display: flex;
      height: min-content;
      padding: 0.25rem;
      border-radius: 4px;
      gap: 0.5rem;
      line-height: 1;
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-size: 0.75rem;
      font-weight: bold;

      &:hover {
        color: #338aff;
        transition: color 0.2s;
      }
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const StatsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    span {
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const LoadingContainer = styled(ProfileContainer)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.blue};
  }
`
