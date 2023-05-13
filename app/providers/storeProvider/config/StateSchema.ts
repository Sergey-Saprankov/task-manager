import { rtkApi } from '@/api/rtkApi'
import { AuthSchema } from '@/features/authByEmail'

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  login: AuthSchema
}
