import React from 'react';
import { Button, Container, Grid, Header, Icon } from 'semantic-ui-react';

const HomeBanner = () => {
    return (
        <Container className='home-banner'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16} className='home-banner__content'>
                        <Header as="h2">
                            ESTUDIO DE DISEÑO <span>WEB</span> Y DESARROLLO DE SOFTWARE
                        </Header>
                        <Header as="h3">
                            Un único proveedor de servicios digitales para tu proyecto online.
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