import { LoginApiRequest, LoginApiResponse } from './types'

import { rtkApi } from '@/api/rtkApi'

const loginApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<LoginApiResponse, LoginApiRequest>({
      query: (model: LoginApiRequest) => ({
        url: 'auth/login',
        method: 'POST',
        body: model,
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApi
