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
import MenuToken from '../components/MenuToken'
import { useSelector } from 'react-redux'
import ServicesList from '../components/ServicesList'

const productos = () => {
    const showMenu = useSelector(state => state.app.showMenu);

    return (
        <section className='container-tokenweb'>
            <Head>
                <title>Productos y servicios</title>
                <meta name="description" content="Transforma tu presencia en línea con nuestro servicio de diseño web personalizado y profesional. Ofrecemos diseños atractivos y funcionales para ayudar a tu marca a destacar en la web. Contáctanos ahora." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                showMenu && (
                <MenuToken />
                )
            }
            <TokenHeader />
            <ServicesList />
            <TokenFooter />
        </section>
    );
};

export default productos;