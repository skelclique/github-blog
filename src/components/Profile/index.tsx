import { useEffect, useState } from 'react'

import {
  ContentContainer,
  InfoContainer,
  LoadingContainer,
  ProfileContainer,
  StatsContainer,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faSpinner,
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { api } from '../../lib/axios'

interface UserProfile {
  avatarUrl: string
  name: string
  bio: string
  url: string
  login: string
  company: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<UserProfile | null>(null)

  async function fetchUserProfile() {
    const { data } = await api.get(`/users/skelclique`)

    setUser({
      avatarUrl: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      login: data.login,
      name: data.name,
      url: data.html_url,
    })
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  if (!user) {
    return <Loading />
  }

  const { avatarUrl, bio, company, followers, login, name, url } = user

  return (
    <ProfileContainer>
      <ContentContainer>
        <img src={avatarUrl} alt={`Avatar de ${login}`} />
        <InfoContainer>
          <header>
            <h1>{name}</h1>
            <a href={url} target="_blank" rel="noreferrer">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <p>{bio}</p>
          <StatsContainer>
            <div>
              <FontAwesomeIcon icon={faGithub} fontSize="1.125rem" />
              <span>{login}</span>
            </div>
            {company && (
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{company}</span>
              </div>
            )}
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{followers} seguidores</span>
            </div>
          </StatsContainer>
        </InfoContainer>
      </ContentContainer>
    </ProfileContainer>
  )
}

function Loading() {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faSpinner} spin size="xl" />
    </LoadingContainer>
  )
}
