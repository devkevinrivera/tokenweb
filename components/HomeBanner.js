import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Grid, Header, Icon } from 'semantic-ui-react';

const HomeBanner = () => {
    const router = useRouter();
    
    return (
        <Container className='home-banner'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16} className='home-banner__content'>
                        <Header as="h2">
                            <span>DISEÑANDO EL FUTURO:</span> AGENCIA DE DISEÑO WEB QUE TRANSFORMA TU PRESENCIA EN LÍNEA
                        </Header>
                        <Header as="h3">
                            No dejes tu primera impresión en manos de la suerte
                        </Header>
                        <Button onClick={() => router.push('#contacto-simple')} className='button-home'>
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