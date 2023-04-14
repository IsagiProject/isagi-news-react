import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './token/slice'
import styleReducer from './style/slice'

const localStoragePersistanceMiddleware = (store) => (next) => (action) => {
  next(action)
  window.localStorage.setItem('__state__', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    style: styleReducer
  },
  middleware: [localStoragePersistanceMiddleware]
})
