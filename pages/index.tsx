import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

import styles from '../app/styles/Home.module.scss'

import { useAuthMeQuery } from '@/app/providers/authProvider'
import { getLayout } from '@/layout/BaseLayout/BaseLayout'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const router = useRouter()
  const { data } = useAuthMeQuery()

  if (data && data.resultCode) {
    router.push('/login')
  }

  return <>home</>
}

Home.getLayout = getLayout

export default Home
