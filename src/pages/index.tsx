import Login from '@/components/Login'
import Dashboard from './dashboard'
import { useSession } from 'next-auth/react'
import styles from './Home.module.scss'

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      <main className={styles.main}>
        {session && <Dashboard />}

        {!session && <Login />}
      </main>
    </>
  )
}
