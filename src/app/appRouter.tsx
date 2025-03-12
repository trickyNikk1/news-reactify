import { createBrowserRouter } from 'react-router'
import { BaseLayout } from './layouts/BaseLayout'
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage'
import { Main } from '@/pages/main'
import { NewsPage } from '@/pages/news'

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorMessage title="Error" message="Something went wrong..." />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'news/:id',
        element: <NewsPage />,
      },
    ],
  },
])
