import React, { FC, ReactElement, ReactNode } from 'react'

import { Header } from '@/widgets/Header/Header'

interface BaseLayoutProps {
  children: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export const getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
