import { rtkApi } from '@/api/rtkApi'

const addTodoApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    addTodoList: build.mutation({
      query: (title: string) => ({
        method: 'POST',
        url: '/todo-lists',
        body: { title },
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const { useAddTodoListMutation } = addTodoApi
