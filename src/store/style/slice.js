import { createSlice } from '@reduxjs/toolkit'

const initialState = (() => {
  const persistedState = window.localStorage.getItem('__state__')
  if (!persistedState || !JSON.parse(persistedState).style) {
    return { dark: true }
  }
  return JSON.parse(persistedState).style
})()

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    switchStyleDarkMode: (state, action) => {
      state.dark = !state.dark
      return state
    }
  }
})

export default styleSlice.reducer
export const { switchStyleDarkMode } = styleSlice.actions
