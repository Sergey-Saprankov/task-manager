import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthSchema } from '../types/AuthSchema'

const initialState: AuthSchema = {
  email: 'free@samuraijs.com',
  password: 'free',
  errorEmail: null,
  errorPassword: null,
  isChecked: true,
}

const authSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setChecked: (state, action: PayloadAction<boolean>) => {
      state.isChecked = action.payload
    },
    setErrorPassword: (state, action: PayloadAction<string | null>) => {
      state.errorPassword = action.payload
    },
    setErrorEmail: (state, action: PayloadAction<string | null>) => {
      state.errorEmail = action.payload
    },
  },
})

export const { reducer: authReducer } = authSlice
export const { setPassword, setEmail, setErrorPassword, setErrorEmail, setChecked } =
  authSlice.actions
