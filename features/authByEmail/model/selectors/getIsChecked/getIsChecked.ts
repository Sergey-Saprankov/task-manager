import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema'

export const getIsChecked = (state: StateSchema) => state.login.isChecked
