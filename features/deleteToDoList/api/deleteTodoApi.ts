import { rtkApi } from '@/api/rtkApi'

const deleteTodoApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    deleteTodoList: build.mutation({
      query: (todolistId: string) => ({
        method: 'POST',
        url: `/todo-lists/${todolistId}`,
        body: { todolistId },
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const { useDeleteTodoListMutation } = deleteTodoApi
