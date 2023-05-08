import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'
import { BlogContextProvider } from './contexts/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogContextProvider>
        <Router />
      </BlogContextProvider>
    </ThemeProvider>
  )
}
