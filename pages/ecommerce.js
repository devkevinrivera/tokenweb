import React, { useEffect } from 'react';
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
import { VENTAJAS_DISEÑO_ECOMMERCE, VENTAJAS_DISEÑO_WEB } from '../constants/landingweb';
import CardProject from '../components/CardProject';
import TematicSlides from '../components/TematicSlides';
import OfficeWork from '../components/OfficeWork';
import TagManager from 'react-gtm-module'

const Web = () => {
    const showMenu = useSelector(state => state.app.showMenu);
    const listaVentajas = VENTAJAS_DISEÑO_ECOMMERCE;

    useEffect(() => {
        const tagManagerArgs = {
            gtmId: 'G-R8SYVSLXY9',
        };
        TagManager.initialize(tagManagerArgs);
    }, []);
    
    const projects = {
        main: {
            background: '/frutos-secos.png',
            title: 'Frutos secos David',
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
        url: '001-diseno-de-respuesta.png',
        titulo: 'Web responsive'
    },{
        theme: 'two',
        url: '002-web-analytics.png',
        titulo: 'Autoadministrable'
    },{
        theme: 'thre',
        url: '001-requisitos.png',
        titulo: 'Adaptada a la normativa legal'
    },{
        theme: 'four',
        url: '002-posicionamiento-en-buscadores.png',
        titulo: 'Optimizada para SEO'
    },{
        theme: 'five',
        url: '004-formacion.png',
        titulo: 'Formación'
    },{
        theme: 'six',
        url: '005-soporte-tecnico.png',
        titulo: 'Soporte'
    },{
        theme: 'eight',
        url: '006-servidor-dedicado.png',
        titulo: 'Hosting profesional'
    },{
        theme: 'eight',
        url: '007-revision-del-cliente.png',
        titulo: 'Clientes satisfechos'
    },];
    
    return (
        <section className='container-tokenweb'>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-R8SYVSLXY9"></script>
                <title>TOKEN: Aumenta tus ventas en línea con nuestro servicio de diseño de tiendas online</title>
                <meta name="description" content="Ofrecemos diseño de tiendas online a medida, optimizadas para una experiencia de usuario fluida y una gestión sencilla de productos. Aumenta tus ventas en línea con una tienda personalizada y adaptada a tus necesidades." />
                <meta name="keywords" content="Diseño de tiendas online a medida,Gestión de productos,Integración de sistemas y herramientas,Diseño de pasarelas de pago seguras,Diseño de catálogos de productos,Diseño de carritos de compra personalizados,Diseño de páginas de seguimiento de pedidos,Mantenimiento y soporte técnico para tiendas online" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
            </Head>
            {
                showMenu && (
                <MenuToken />
                )
            }
            <TokenHeader />
            <BannerReutilizable
                title="¿NECESITAS UNA TIENDA ONLINE?"
                subtitle="Potencia tus ventas y haz crecer tu negocio con una tienda online de última generación diseñada por nosotros"
                ctaLink="#contacto-simple"
                ctaText="Comienza hoy"
                background="https://kschool.com/wp-content/uploads/2023/03/blog-ds-1.jpg"
            />
            <ListBlocks
                options={listaVentajas}
                image="/e-commerce.png"
                reverse={false}
            />
            <CardProject projects={projects} category={"NUESTROS ÚLTIMOS DISEÑOS DE TIENDAS ONLINE"} />
            <OfficeWork />
            <TematicSlides items={items} />
            <ContactSimple />
            <TokenFooter />
        </section>
    );
};

export default Web;