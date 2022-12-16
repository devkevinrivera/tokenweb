import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import TokenHeader from '../components/TokenHeader'
import HomeBanner from '../components/HomeBanner'
import TokenServices from '../components/TokenServices'
import AboutWe from '../components/AboutWe'
import BannerTech from '../components/BannerTech'
import TokenInfo from '../components/TokenInfo'
import Customers from '../components/Customers'
import ContactSimple from '../components/ContactSimple'
import TokenFooter from '../components/TokenFooter'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TO_KEN: Estudio de diseño web y Marketing digital</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TokenHeader />
      <HomeBanner />
      <TokenServices />
      <BannerTech />
      <TokenInfo />
      <AboutWe />
      <Customers />
      <ContactSimple />
      <TokenFooter />
    </>
  )
}
