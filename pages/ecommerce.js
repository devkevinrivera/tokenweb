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
import { VENTAJAS_DISEÑO_ECOMMERCE, VENTAJAS_DISEÑO_WEB } from '../constants/landingweb';
import CardProject from '../components/CardProject';
import TematicSlides from '../components/TematicSlides';
import OfficeWork from '../components/OfficeWork';

const Web = () => {
    const showMenu = useSelector(state => state.app.showMenu);
    const listaVentajas = VENTAJAS_DISEÑO_ECOMMERCE;

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
                background: 'http://localhost:3000/interzoo.png',
                title: 'Interzoo',
                text: '',
                webUri: 'https://www.interzoo.es/'
            }
        ]
    };

    const items = [{
        theme: 'eight',
        url: 'ecommerce-responsive.svg',
        titulo: 'Web responsive'
    },{
        theme: 'two',
        url: 'ecommerce-administrable.svg',
        titulo: 'Autoadministrable'
    },{
        theme: 'thre',
        url: 'ecommerce-legal.svg',
        titulo: 'Adaptada a la normativa legal'
    },{
        theme: 'four',
        url: 'ecommerce-seo.svg',
        titulo: 'Optimizada para SEO'
    },{
        theme: 'five',
        url: 'ecommerce-formacion.svg',
        titulo: 'Formación'
    },{
        theme: 'six',
        url: 'ecommerce-soporte.svg',
        titulo: 'Soporte'
    },{
        theme: 'eight',
        url: 'ecommerce-hosting.svg',
        titulo: 'Hosting profesional'
    },{
        theme: 'eight',
        url: 'ecommerce-cliente-full.svg',
        titulo: 'Clientes satisfechos'
    },];
    
    return (
        <section className='container-tokenweb'>
            <Head>
               
                <title>TOKEN: Estudio de diseño web y Marketing digital</title>
                <meta name="description" content="Generated by create next app" />
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
                background="https://www.bigbuy.eu/psublic/img/landings/dropshipping-technology/technology-banner.jpg"
            />
            <ListBlocks
                options={listaVentajas}
                image={''}
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