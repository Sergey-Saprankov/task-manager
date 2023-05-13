import { StateSchema } from '@/providers/storeProvider/config/StateSchema'

export const getErrorEmail = (state: StateSchema) => state.login.errorEmail
