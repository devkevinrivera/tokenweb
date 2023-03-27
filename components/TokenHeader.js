import React from 'react';
import { Button, Container, Grid, Icon, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { handlerShowMenu } from '../redux/slices/config';
import Link from 'next/link'
import { useRouter } from 'next/router';

const TokenHeader = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const actualRoute = router?.pathname?.replace('/', '');
    const navigationMenu = [
        {
            title: 'Inicio',
            link: '/',
            enlace: ''
        },
        {
            title: 'Servicios',
            link: '/productos',
            enlace: 'productos'
        },
        {
            title: 'Nosotros',
            link: '/',
            enlace: 'nosotros'
        },
        {
            title: 'Proyectos',
            link: '/',
            enlace: 'proyectos'
        },
    ];

    return (
        <Container className='token-header'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column textAlign='right' computer={16}  only='computer'>
                        <a href="mailto:hola@tokenstudio.eu" className='mini-link'>
                            <Icon  name="mail" color='orange'/>
                            hola@tokenstudio.eu
                        </a>
                        <a href="https://wa.link/jyx7kr" className='mini-link'>
                            <Icon name="whatsapp" color='green' />
                            +34 654470578
                        </a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={13} computer={3}  verticalAlign='middle' >
                        <Image onClick={() => {
                            router.push("/")
                        }} src="/logofinal2.svg" alt="Token Logo" className='logo-web'/>
                    </Grid.Column>
                    <Grid.Column computer={9} only="computer" verticalAlign='middle' >
                        <nav className='navigation-desktop'>
                            {
                                navigationMenu.map(({ title, link, enlace }) => (
                                    <p  className={actualRoute === enlace ? 'menu-active' : ''}>
                                        <Link href={link}>{ title }</Link>
                                    </p>
                                ))
                            }
                        </nav>
                    </Grid.Column>
                    <Grid.Column computer={4} verticalAlign="middle" only='computer'>
                        <Button onClick={() => {
                            router.push("https://wa.link/jyx7kr")
                        }} className='button-presupuesto'>
                            <Icon name="calculator" />
                            Pide tu presupuesto
                        </Button>
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={3} verticalAlign="middle" className='only-menu-mobile'>
                        <Image onClick={() => dispatch(handlerShowMenu(true))} src="/menu.svg" alt="Menu"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenHeader;