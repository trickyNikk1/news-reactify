import { configureStore } from '@reduxjs/toolkit'
import { useStore } from 'react-redux'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import newsReducer from './slices/newsSlice'
import { newsApi } from './services/newsApi'
// ...

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()
