import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const persistedState = window.localStorage.getItem('__state__')
  if (persistedState) return JSON.parse(persistedState).token
  return null
})()

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addUserToken: (state, action) => {
      state = action.payload
      return state
    },
    removeUserToken: (state) => {
      state = null
      return state
    }
  }
})

export default tokenSlice.reducer
export const { addUserToken, removeUserToken } = tokenSlice.actions
