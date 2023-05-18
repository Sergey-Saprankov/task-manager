import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema'

export const getErrorTitle = (state: StateSchema) => state.addTodo.titleError
