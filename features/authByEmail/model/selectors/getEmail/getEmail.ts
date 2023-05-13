import { StateSchema } from '@/providers/storeProvider/config/StateSchema'

export const getEmail = (state: StateSchema) => state.login.email
