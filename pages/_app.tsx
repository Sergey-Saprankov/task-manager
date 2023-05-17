import '../app/styles/globals.scss'
import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { AuthProvider } from '@/app/providers/authProvider'
import { StoreProvider } from '@/app/providers/storeProvider'
import { Header } from '@/widgets/Header/Header'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps, ...rest }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return <StoreProvider>{getLayout(<Component {...pageProps} />)}</StoreProvider>
}
