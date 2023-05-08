import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Post {
  id: number
  title: string
  body: string
  createdAt: string
  author: string
  url: string
  commentsAmount: number
}

interface User {
  avatarUrl: string
  name: string
  bio: string
  url: string
  login: string
  company: string
  followers: number
}

interface BlogContextType {
  posts: Post[] | null
  user: User | null
  fetchPosts: (query?: string) => Promise<void>
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [user, setUser] = useState<User | null>(
    JSON.parse(String(localStorage.getItem('@github-blog:user-state-1.0.0'))),
  )

  async function fetchUserProfile() {
    const { data } = await api.get(`/users/skelclique`)

    const user = {
      avatarUrl: data.avatar_url,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      login: data.login,
      name: data.name,
      url: data.html_url,
    }

    setUser(user)

    localStorage.setItem('@github-blog:user-state-1.0.0', JSON.stringify(user))
  }

  async function fetchPosts(query?: string) {
    const data = await api
      .get(`/search/issues?q=${query || ''}repo:skelclique/github-blog`)
      .then((response) => response.data)

    const filteredPosts = data.items.map((item: any) => {
      return {
        id: item.number,
        title: item.title,
        body: item.body,
        createdAt: item.created_at,
        author: item.user.login,
        url: item.html_url,
        commentsAmount: item.comments,
      }
    })

    setPosts(filteredPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    if (!user) {
      fetchUserProfile()
    }
  }, [user])

  return (
    <BlogContext.Provider value={{ posts, user, fetchPosts }}>
      {children}
    </BlogContext.Provider>
  )
}
