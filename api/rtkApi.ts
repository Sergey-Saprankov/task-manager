import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { baseUrl } from '@/shared/const/baseUrl'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl, credentials: 'include' }),
  endpoints: () => ({}),
})
