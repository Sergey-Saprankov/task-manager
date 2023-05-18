import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema'

export const getTitle = (state: StateSchema) => state.addTodo.title
