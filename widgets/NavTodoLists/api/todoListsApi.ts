import { TodosSchema } from './types'

import { rtkApi } from '@/api/rtkApi'

const todoListsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getTodos: build.query<TodosSchema[], void>({
      query: () => ({
        url: '/todo-lists',
        method: 'GET',
      }),
      providesTags: result => ['Todos'],
    }),
  }),
})

export const { useGetTodosQuery } = todoListsApi
