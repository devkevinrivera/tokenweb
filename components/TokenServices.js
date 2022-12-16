import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

const TokenServices = () => {
    return (
        <Container className='token-services'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={5} className='al-center'>
                        <div className='blue box'>
                            <h4>Diseño Web</h4>
                            <p>
                                Llevamos a cabo proyectos web que funcionan gracias aun gran diseño, 
                                una programación perfecta y una comunicación potente.
                            </p>
                        </div>
                        <div className='red box'>
                            <h4>Diseño Web</h4>
                            <p>
                                Llevamos a cabo proyectos web que funcionan gracias aun gran diseño, 
                                una programación perfecta y una comunicación potente.
                            </p>
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={6} className="mobile-center">
                        <Image src="/mobile.png" />
                    </Grid.Column>
                    <Grid.Column computer={5} className='al-center'>
                        <div className='yellow box'>
                            <h4>Diseño Web</h4>
                            <p>
                                Llevamos a cabo proyectos web que funcionan gracias aun gran diseño, 
                                una programación perfecta y una comunicación potente.
                            </p>
                        </div>
                        <div className='pink box'>
                            <h4>Diseño Web</h4>
                            <p>
                                Llevamos a cabo proyectos web que funcionan gracias aun gran diseño, 
                                una programación perfecta y una comunicación potente.
                            </p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenServices;