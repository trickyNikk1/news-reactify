import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './appReducer'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { newsApi } from '@/entities/news/api/newsApi'
import { categoriesApi } from '@/entities/category/api/categoriesApi'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware, categoriesApi.middleware),
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
