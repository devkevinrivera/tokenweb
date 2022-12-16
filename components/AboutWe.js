import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

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
                        <Image src="/user.svg" alt="" />
                        <Header as="h5">
                            Diseño Y desarrollo web
                        </Header>
                        <p>
                            Estamos convencidos de que no querrás crear una app
                            sólo por diversión. Tu objetivo es crear un negocio innovador. Desarrollar una app siempre es el medio, nunca el fin. 
                        </p>
                        <ul>
                            <li>Necesitas un diseño atractivo</li>
                            <li>Trato personal contigo</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Image src="/user.svg" alt="" />
                        <Header as="h5">
                            Diseño Y desarrollo web
                        </Header>
                        <p>
                            Estamos convencidos de que no querrás crear una app
                            sólo por diversión. Tu objetivo es crear un negocio innovador. Desarrollar una app siempre es el medio, nunca el fin. 
                        </p>
                        <ul>
                            <li>Necesitas un diseño atractivo</li>
                            <li>Trato personal contigo</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Image src="/user.svg" alt="" />
                        <Header as="h5">
                            Diseño Y desarrollo web
                        </Header>
                        <p>
                            Estamos convencidos de que no querrás crear una app
                            sólo por diversión. Tu objetivo es crear un negocio innovador. Desarrollar una app siempre es el medio, nunca el fin. 
                        </p>
                        <ul>
                            <li>Necesitas un diseño atractivo</li>
                            <li>Trato personal contigo</li>
                        </ul>
                    </Grid.Column>
                    <Grid.Column computer={4} className="about-we__item">
                        <Image src="/user.svg" alt="" />
                        <Header as="h5">
                            Diseño Y desarrollo web
                        </Header>
                        <p>
                            Estamos convencidos de que no querrás crear una app
                            sólo por diversión. Tu objetivo es crear un negocio innovador. Desarrollar una app siempre es el medio, nunca el fin. 
                        </p>
                        <ul>
                            <li>Necesitas un diseño atractivo</li>
                            <li>Trato personal contigo</li>
                        </ul>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default AboutWe;