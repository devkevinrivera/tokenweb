import React from 'react';
import { Button, Container, Grid, Icon, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { handlerShowMenu } from '../redux/slices/config';
const TokenHeader = () => {
    const dispatch = useDispatch();

    return (
        <Container className='token-header'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column textAlign='right' computer={16}  only='computer'>
                        <a href="mailto:hola@tokenstudio.com" className='mini-link'>
                            <Icon name="mail" color='orange'/>
                            hola@tokenstudio.com
                        </a>
                        <a href="https://wa.link/jyx7kr" className='mini-link'>
                            <Icon name="whatsapp" color='green' />
                            +34 654470578
                        </a>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={13} computer={3}  verticalAlign='middle' >
                        <Image src="/logo.svg" alt="Token Logo"/>
                    </Grid.Column>
                    <Grid.Column computer={10} only="computer" verticalAlign='middle' >
                        <nav className='navigation-desktop'>
                            <span>Inicio</span>
                            <span>Productos</span>
                            <span>Nosotros</span>
                            <span>Proyectos</span>
                            
                        </nav>
                    </Grid.Column>
                    <Grid.Column computer={3} verticalAlign="middle" only='computer'>
                        {/* <Image onClick={() => dispatch(handlerShowMenu(true))} src="/menu.svg" alt="Menu"/> */}
                        <Button className='button-presupuesto'>Pide tu presupuesto</Button>
                    </Grid.Column>
                    <Grid.Column computer={3} verticalAlign="middle" className='only-menu-mobile'>
                        <Image onClick={() => dispatch(handlerShowMenu(true))} src="/menu.svg" alt="Menu"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenHeader;