import { AuthMeResponseType, ResponseData } from './types'

import { rtkApi } from '@/api/rtkApi'

const authMeApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    authMe: build.query<AuthMeResponseType, void>({
      query: () => ({
        url: `/auth/me`,
        method: 'GET',
        // body: {},
        headers: {
          'API-KEY': 'c53710fa-3381-4f82-a43d-14117775329a',
        },
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useAuthMeQuery,

  util: { getRunningQueriesThunk },
} = authMeApi

export const { authMe } = authMeApi.endpoints
