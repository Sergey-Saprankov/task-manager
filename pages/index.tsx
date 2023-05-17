import React from 'react'

import { useDisclosure } from '@chakra-ui/hooks'
import { Modal } from '@chakra-ui/modal'
import { useRouter } from 'next/router'

import { useAuthMeQuery } from '@/app/providers/authProvider'
import cls from '@/app/styles/Home.module.scss'
import { useAddTodoListMutation } from '@/features/addTodoList/api/addTodoApi'
import { getLayout } from '@/layout/BaseLayout/BaseLayout'
import { Button, ButtonThemeColor, ButtonThemeSize } from '@/shared/ui/Button/Button'
import { Loader } from '@/shared/ui/Loader/Loader'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [addTodoList] = useAddTodoListMutation()
  const router = useRouter()
  const { data: authData, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <Loader />
  }
  if (authData && authData.resultCode) {
    router.replace('/login')
  }

  return (
    <div className={cls.Home}>
      <Button onClick={onOpen} color={ButtonThemeColor.SECONDARY} size={ButtonThemeSize.LARGE}>
        Add Todo list
      </Button>
    </div>
  )
}

Home.getLayout = getLayout

export default Home
