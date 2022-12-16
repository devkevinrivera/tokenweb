import React from 'react';
import { Container, Grid, Header, Icon, Image } from 'semantic-ui-react';

const AboutWe = () => {
    return (
        <Container fluid className='about-we'>
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
                        <Icon name="group" size="big" />
                        <Header as="h5">
                            EQUIPO
                        </Header>
                        <p>
                            Hemos aprovechado al máximo las nuevas tecnologías para organizarnos como un gran estudio de innovación que pueda ofrecer precios muy ajustados. Pero no nos engañemos: El verdadero motor son cada una de las personas que integran nuestro equipo. 
                            Y todos, por cierto, trabajando codo con codo para lograr nuestros objetivos.
                        </p>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Icon name="certificate" size='big' />
                        <Header as="h5">
                            LA GARANTÍA
                        </Header>
                        <p>
                            ¿Comprar por internet un producto creativo y personalizado? No estamos locos, hemos demostrado que funciona. Siempre cedemos los derechos de propiedad intelectual, hacemos muchas revisiones, te damos todos los archivos, siempre puedes hacer cosas con otro proveedor. Un solo cliente insatisfecho sería un fracaso. 
                        </p>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Icon name="world" size="big" />
                        <Header as="h5">
                            LA DISTANCIA
                        </Header>
                        <p>
                            Esta es una de las principales dudas que surgen antes de comprar en nuestro estudio. 
                            Vender en todo el mundo, nos ha obligado a presentar mejor las propuestas, justificar lo que hacemos,
                            ser más flexibles en las revisiones, cuidar más a nuestro cliente. La comunicación no es un problema, por mail o por teléfono, y si quieres podemos vernos por Skype.
                        </p>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Icon name="chart pie" size="big" />
                        <Header as="h5">
                            LOS INGREDIENTES
                        </Header>
                        <p>
                            Creatividad desbordante, diseño espectacular, tecnologías que funcionan, estándares fáciles de utilizar, todo menos ser aburrido, comunicación continua,
                            muchas horas de trabajo, ganas de crecer, experiencias únicas, todo controlado, personalidad, mucho cariño y todo con sentido para tu negocio.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default AboutWe;