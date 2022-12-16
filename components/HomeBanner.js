import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const HomeBanner = () => {
    return (
        <Container className='home-banner'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16} className='home-banner__content'>
                        <Header as="h2">
                            ESTUDIO DE DISEÑO <span>WEB</span> Y AGENCIA DE MARKETING DIGITAL
                        </Header>
                        <Header as="h3">
                            Mejorar tu visibilidad en internet con la estrategia digital más adecuada para tu proyecto.
                        </Header>
                        <Button className='button-home'>
                            Si, me interesa
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default HomeBanner;