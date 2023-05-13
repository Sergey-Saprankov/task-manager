import { configureStore, createStore, ReducersMapObject } from '@reduxjs/toolkit'

import { rtkApi } from '@/api/rtkApi'
import { StateSchema } from '@/app/providers/storeProvider/config/StateSchema'
import { authReducer } from '@/features/authByEmail'

export const makeStore = () => {
  const rootStore: ReducersMapObject<StateSchema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
    login: authReducer,
  }

  return configureStore({
    reducer: rootStore,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rtkApi.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
