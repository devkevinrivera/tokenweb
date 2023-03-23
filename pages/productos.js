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
                <title>TOKEN: Servicios de Diseño Web Personalizados para Hacer Crecer Tu Negocio en Línea</title>
                <meta name="description" content="Ofrecemos soluciones personalizadas de diseño y desarrollo web, diseño de aplicaciones móviles y desarrollo de software empresarial. Trabajamos mano a mano contigo para crear soluciones que satisfagan tus necesidades empresariales específicas y te ayuden a alcanzar tus objetivos." />
                <meta name="keywords" content="Desarrollo de software a medida,Soluciones de software personalizadas,Integración de sistemas y herramientas,Desarrollo de aplicaciones móviles,Automatización de procesos empresariales,Mantenimiento y soporte técnico de software,Diseño y desarrollo de bases de datos,Diseño y desarrollo de bases de datos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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