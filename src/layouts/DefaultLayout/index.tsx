import { Outlet } from 'react-router-dom'
import { ContentContainer, Cover } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Cover />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  )
}
