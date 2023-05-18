import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AddTodoSchema } from '../types/addTodoSchema'

const initialState: AddTodoSchema = {
  title: '',
  titleError: null,
  addTodoSuccess: false,
}

const addTodo = createSlice({
  name: 'addTodo',
  initialState: initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setErrorTitle: (state, action: PayloadAction<string | null>) => {
      state.titleError = action.payload
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.addTodoSuccess = action.payload
    },
  },
})

export const { reducer: addTodoReducer } = addTodo
export const { setTitle, setErrorTitle, setSuccess } = addTodo.actions
