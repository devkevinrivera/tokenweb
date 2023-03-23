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
import { VENTAJAS_DISEÑO_WEB } from '../constants/landingweb';
import CardProject from '../components/CardProject';
import TematicSlides from '../components/TematicSlides';
import OfficeWork from '../components/OfficeWork';

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'G-R8SYVSLXY9',
    dataLayer: {
        event: 'pageview',
        pagePath: 'https://www.tokenstudio.eu/web',
        pageTitle: 'diseñoweb',
    },
};
TagManager.initialize(tagManagerArgs);

const Web = () => {
    const showMenu = useSelector(state => state.app.showMenu);
    const listaVentajas = VENTAJAS_DISEÑO_WEB;

    const projects = {
        main: {
            background: 'http://localhost:3000/archicercle.png',
            title: 'Archicercle',
            text: '',
            webUri: 'https://archicercle.com/'
        },
        secondary: [
            {
                background: 'http://localhost:3000/justlasercuteu.png',
                title: 'JustlaserCut',
                text: '',
                webUri: 'https://justlasercut.com/'
            },{
                background: 'http://localhost:3000/cosastudio.png',
                title: 'CosasStudio',
                text: '',
                webUri: 'https://cosastudio.com/'
            }, {
                background: 'http://localhost:3000/interzoo.png',
                title: 'Interzoo',
                text: '',
                webUri: 'https://www.interzoo.es/'
            }
        ]
    };

    const items = [{
        theme: 'eight',
        url: 'responsive.png',
        titulo: 'ADAPTABLE A DISPOSITIVOS MÓVILES'
    },{
        theme: 'two',
        url: 'admin.png',
        titulo: '100% AUTOGESTIONALBE'
    },{
        theme: 'thre',
        url: 'chrome.png',
        titulo: 'OPTIMIZADA PARA GOOGLE'
    },{
        theme: 'four',
        url: 'speed.png',
        titulo: 'TE ENTREGAMOS LA WEB EN 2 SEMANAS'
    },{
        theme: 'five',
        url: 'legal.png',
        titulo: 'ADAPTADA A NORMATIVA LEGAL'
    },{
        theme: 'six',
        url: 'disenador-grafico.png',
        titulo: 'DISEÑO GRAFÍCO ORIGINAL'
    },{
        theme: 'eight',
        url: 'web-analytics.png',
        titulo: 'ALTA EN GOOGLE ANALYTICS'
    },{
        theme: 'eight',
        url: 'adwords.png',
        titulo: 'ESTRATEGIA DE ADWORDS'
    },];
    
    return (
        <section className='container-tokenweb'>
            <Head>
                <title>TOKEN: Transforma tu presencia en línea con nuestro servicio de diseño de páginas web responsivas y personalizadas</title>
                <meta name="description" content="Desde páginas web corporativas hasta tiendas en línea, nuestro equipo de expertos en diseño y desarrollo trabaja contigo para crear una presencia en línea efectiva." />
                <meta name="keywords" content="Diseño de páginas web a medida,Experiencia de usuario,Diseño responsivo,Integración de sistemas y herramientas,Diseño de interfaces de usuario atractivas,Diseño de landing pages efectivas,Diseño de blogs personalizados,Mantenimiento y soporte técnico para sitios web,Diseño de sitios web corporativos y comerciales" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {
                showMenu && (
                <MenuToken />
                )
            }
            <TokenHeader />
            <BannerReutilizable
                title="Consigue una presencia online impresionante con nuestro diseño web profesional"
                subtitle="Mejora la imagen de tu negocio y atrae a más clientes con nuestro diseño web personalizado y de alta calidad"
                ctaLink="#contacto-simple"
                ctaText="Comienza hoy"
                background="https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            />
            <ListBlocks
                options={listaVentajas}
                image="/reporte-anual.png"
                reverse={false}
            />
            <CardProject projects={projects} category={"NUESTROS ÚLTIMOS DISEÑOS DE PÁGINAS WEB"} />
            <OfficeWork />
            <TematicSlides items={items}/>
            <ContactSimple />
            <TokenFooter />
        </section>
    );
};

export default Web;