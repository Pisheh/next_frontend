import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface user {
  isLoggedIn: boolean
  user: any
}

const initialState: user = {
  isLoggedIn: false,
  user: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Object>) => {
      state.user = action.payload
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    }
  }
})

export const { setUser, setIsLoggedIn } = userSlice.actions
export default userSlice.reducer
