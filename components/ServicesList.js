import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const ServicesList = () => {
    return (
        <Container className='service-list'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column
                        className='service-list__banner'
                        textAlign='left'
                        verticalAlign='middle'
                        computer={16}
                        mobile={16}
                        tablet={16}
                    >
                        <Header textAlign='left' as="h3" verticalAlign="middle">Servicios</Header>
                        <Header as="h1">Tenemos todo lo que necesita tu marca para triunfar en línea</Header>
                    </Grid.Column>
                    <Grid.Column computer={16}>
                        <Grid columns={16}>
                            <Grid.Row>
                                <Grid.Column computer={16}>
                                    <Header as="h3" className='metatitle'>
                                        DESARROLLAMOS TODO TIPO DE APLICACIONES:
                                    </Header>
                                </Grid.Column>
                                <Grid.Column className='service-container' computer={5} textAlign="center" verticalAlign='middle'>
                                    <Image className='image-service' src="/Web.svg" />
                                    <h4>WEB Y BLOG</h4>
                                    <p>
                                        <i>Diseño y programación de web y blog</i>
                                    </p>
                                </Grid.Column>
                                <Grid.Column className='service-container' computer={6} textAlign="center" verticalAlign='middle'>
                                    <Image className='image-service' src="/Ecommerce.svg" />
                                    <h4>TIENDA ONLINE</h4>
                                    <p>
                                        <i>Diseño y programación de tienda online</i>
                                    </p>
                                </Grid.Column>
                                <Grid.Column className='service-container' computer={5} textAlign="center" verticalAlign='middle'>
                                    <Image className='image-service' src="/Mantenimiento.svg" />
                                    <h4>DESARROLLO A MEDIDA</h4>
                                    <p>
                                        <i>Diseño y programación a medida</i>
                                    </p>
                                </Grid.Column>
                               
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column computer={16}>
                                    <Header as="h3" className='metatitle'>
                                        TAMBIÉN SABEMOS DARLE VISIBILIDAD:
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default ServicesList;