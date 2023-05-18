import { rtkApi } from '@/api/rtkApi'
import { AddTodoSchema } from '@/features/addTodoList'
import { AuthSchema } from '@/features/authByEmail'

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  login: AuthSchema
  addTodo: AddTodoSchema
}
