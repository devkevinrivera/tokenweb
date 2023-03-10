import React from 'react';
import { Button, Container, Grid, Header, Icon } from 'semantic-ui-react';

const HomeBanner = () => {
    return (
        <Container className='home-banner'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16} className='home-banner__content'>
                        <Header as="h2">
                            <span>DISEÑANDO EL FUTURO:</span> AGENCIA DE DISEÑO WEB QUE TRANSFORMA TU PRESENCIA EN LÍNEA
                        </Header>
                        <Header as="h3">
                            Diseño web de vanguardia para llevar tu negocio al siguiente nivel
                        </Header>
                        <Button className='button-home'>
                            <Icon name="terminal" />
                            Me interesa
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default HomeBanner;