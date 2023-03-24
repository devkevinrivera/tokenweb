import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import React, { useEffect } from 'react';
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
import MenuToken from '../components/MenuToken'
import { useSelector } from 'react-redux'
import TagManager from 'react-gtm-module'
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const showMenu = useSelector(state => state.app.showMenu);
  
  useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'G-R8SYVSLXY9',
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <section className='container-tokenweb'>
      <Head>
        <title>TOKEN: Estudio de diseño web y desarrollo de software</title>
        <meta name="description" content="En nuestra agencia de diseño de software, creamos soluciones personalizadas y eficientes para llevar tu negocio al siguiente nivel. Nuestro equipo de expertos se enfoca en ofrecer productos de calidad, con una gran atención al detalle y una experiencia de usuario excepcional." />
        <meta name="keywords" content="Diseño web personalizado,Diseño web responsivo,Experiencia de usuario,Diseño de interfaz de usuario,Diseño de páginas web corporativas,Diseño de páginas web de comercio electrónico,Optimización para motores de búsqueda (SEO),Optimización para motores de búsqueda (SEO)"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Isotopo.ico" />
      </Head>
      {
        showMenu && (
          <MenuToken />
        )
      }
      <TokenHeader />
      <HomeBanner />
      <TokenServices />
      <BannerTech />
      <TokenInfo />
      <AboutWe />
      <Customers />
      <ContactSimple />
      <TokenFooter />
    </section>
  )
}
