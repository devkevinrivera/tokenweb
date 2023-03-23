import React from 'react';
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
import BannerReutilizable from '../components/BannerReutilizable';
import ListBlocks from '../components/ListBlocks';
import { DESARROLLO_WEB_MEDIDA, VENTAJAS_DISEÑO_ECOMMERCE, VENTAJAS_DISEÑO_WEB } from '../constants/landingweb';
import CardProject from '../components/CardProject';
import TematicSlides from '../components/TematicSlides';
import OfficeWork from '../components/OfficeWork';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-R8SYVSLXY9',
    dataLayer: {
        userId: '001',
        userProject: 'TokenDiseñoMedida',
        page: 'Diseño a medida'
  },
};
TagManager.initialize(tagManagerArgs);

const Web = () => {
    const showMenu = useSelector(state => state.app.showMenu);
    const listaVentajas = DESARROLLO_WEB_MEDIDA;

    const projects = {
        main: {
            background: '/justlasercut.eu_backoffice.png',
            title: 'APP JUSTLASERCUT',
            text: '',
            webUri: 'https://www.frutossecosdavid.es/tienda/'
        },
        secondary: [
            {
                background: '/relojes.png',
                title: 'TimeShop',
                text: '',
                webUri: 'https://www.timeshop24.es/relojes/venta.html'
            },{
                background: '/disfraces.png',
                title: 'disfrazitos',
                text: '',
                webUri: 'https://disfrazitos.es/carnaval/'
            }, {
                background: '/interzoo.png',
                title: 'Interzoo',
                text: '',
                webUri: 'https://www.interzoo.es/'
            }
        ]
    };

    const items = [{
        theme: 'eight',
        url: 'node.png',
        titulo: 'NodeJS'
    },{
        theme: 'two',
        url: 'react.png',
        titulo: 'ReactJS' //falta
    },{
        theme: 'thre',
        url: 'mongodb.svg',
        titulo: 'MongoDB'
    },{
        theme: 'four',
        url: 'html.png',
        titulo: 'HTML'
    },{
        theme: 'five',
        url: '004-formacion.png',
        titulo: 'SASS'
    },{
        theme: 'six',
        url: 'swift.png',
        titulo: 'Swift'
    },{
        theme: 'eight',
        url: 'phpicon.png',
        titulo: 'PHP'
    },{
        theme: 'eight',
        url: 'ymas.png',
        titulo: 'Y MAS'
    },];
    
    return (
        <section className='container-tokenweb'>
            <Head>
                <title>TOKEN: Servicios de mantenimiento web profesional para mantener tu sitio en óptimas condiciones</title>
                <meta name="description" content="¿Tu sitio web necesita mantenimiento constante para asegurar su rendimiento y seguridad? Ofrezco servicios de mantenimiento web profesional para mantener tu sitio actualizado, seguro y en óptimas condiciones." />
                <meta name="keywords" content="mantenimiento web,actualización de sitio web,optimización web,corrección de errores web,monitorización de sitio web,análisis de rendimiento web,solución de problemas de sitio web" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {
                showMenu && (
                <MenuToken />
                )
            }
            <TokenHeader />
            <BannerReutilizable
                title="Desarrollo web a medida: La solución perfecta para hacer crecer tu negocio en línea"
                subtitle="Trabajamos contigo para crear un sitio web que cumpla con tus objetivos de negocio y te diferencie de la competencia"
                ctaLink="#contacto-simple"
                ctaText="Comienza hoy"
                background="https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-de-gradiente-oscuro-26038-1920x1080-PX-1024x576.jpg"
            />
            <ListBlocks
                options={listaVentajas}
                image="/android.svg"
                reverse={false}
            />
            <CardProject projects={projects} category={"NUESTROS ÚLTIMAS APLICACIONES"} />
            <OfficeWork />
            <TematicSlides items={items} />
            <ContactSimple />
            <TokenFooter />
        </section>
    );
};

export default Web;