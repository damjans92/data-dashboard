import React from 'react'
import SideMenu from '../SideMenu'
import styles from './Layout.module.scss'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Footer from '../Footer'
import { useMediaQuery } from '@mui/material'

const Layout = (props: any) => {
  const { data: session } = useSession()
  const mobileCheck = useMediaQuery('(min-width: 600px)')

  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name='description' content='Data Dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={styles.layout}
        style={{
          padding: session
            ? mobileCheck
              ? '0 24px 130px 80px'
              : '0 24px 80px 80px'
            : 0,
        }}
      >
        {session && <SideMenu />}
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
