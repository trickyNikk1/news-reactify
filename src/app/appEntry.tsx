import { BaseLayout } from '@/app/layouts/BaseLayout'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { store } from './appStore'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import '@/shared/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
