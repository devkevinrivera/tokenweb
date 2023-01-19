import React from 'react';
import { Container, Grid, Header, Icon, Image } from 'semantic-ui-react';

const AboutWe = () => {
    return (
        <Container className='about-we'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16}>
                        <Header className='header-subtitle' as="h2">
                            No somos una empresa de desarrollo de apps más porque:
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='wrap'>
                    <Grid.Column computer={4} className="about-we__item">
                        <Icon name="group" size="big" className='icon-about' />
                        <Header as="h5">
                            Diseño atractivo y moderno
                        </Header>
                        <p>
                            Una agencia de diseño web debe tener la capacidad de crear diseños que atraigan la atención de los visitantes y se destaquen entre la competencia
                        </p>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Icon name="certificate" size='big' className='icon-about'/>
                        <Header as="h5">
                            Optimización para motores de búsqueda
                        </Header>
                        <p>
                            Es importante que una agencia de diseño web entienda cómo optimizar un sitio web para que sea fácil de encontrar en los motores de búsqueda
                        </p>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Icon name="world" size="big" className='icon-about'/>
                        <Header as="h5">
                            Experiencia de usuario
                        </Header>
                        <p>
                            Una agencia de diseño web debe ser capaz de crear una interfaz fácil de usar y navegar para mejorar la experiencia del usuario
                        </p>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Icon name="chart pie" size="big" className='icon-about'/>
                        <Header as="h5">
                            Servicio al cliente
                        </Header>
                        <p>
                            Una agencia de diseño web debe brindar un servicio excepcional al cliente, trabajando estrechamente con ellos para entender sus necesidades y garantizar que el sitio web cumpla con sus expectativas.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default AboutWe;