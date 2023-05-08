import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './pages/Blog'
import { Issue } from './pages/Issue'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/issue/:id',
        element: <Issue />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
