import { StateSchema } from '@/providers/storeProvider/config/StateSchema'

export const getPassword = (state: StateSchema) => state.login.password
