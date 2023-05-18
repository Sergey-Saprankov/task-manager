import React from 'react'

import { useRouter } from 'next/router'

import { useAuthMeQuery } from '@/app/providers/authProvider'
import cls from '@/app/styles/Home.module.scss'
import { getLayout } from '@/layout/BaseLayout/BaseLayout'
import { Button, ButtonThemeColor, ButtonThemeSize } from '@/shared/ui/Button/Button'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Text, TextColorTheme, TextFontTheme } from '@/shared/ui/Text/Text'

const Home = () => {
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
      <Text tag={'h2'} color={TextColorTheme.GREY} font={TextFontTheme.MEDIUM}>
        Create a new To do list to get started.
      </Text>
      <Button color={ButtonThemeColor.SECONDARY} size={ButtonThemeSize.LARGE}>
        Add Todo list
      </Button>
    </div>
  )
}

Home.getLayout = getLayout

export default Home
