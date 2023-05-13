import { StateSchema } from '@/providers/storeProvider/config/StateSchema'

export const getErrorPassword = (state: StateSchema) => state.login.errorPassword
