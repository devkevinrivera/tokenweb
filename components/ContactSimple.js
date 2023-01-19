import React from 'react';
import { Button, Container, Grid, Image } from 'semantic-ui-react';

const ContactSimple = () => {
    return (
        <Container className='contacto-simple'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16} className='contacto-simple__container'>
                        <Grid columns={16}>
                            <Grid.Row>
                                <Grid.Column computer={8}  className='contacto-simple__message-container'>
                                    <p className='contacto-simple__message'>
                                    Haz que tu negocio brille en línea con nuestros servicios de diseño web profesionales. ¡Te ayudaremos a destacar entre la competencia y atraer más clientes!
                                    </p>
                                    <Button className='button-home'>Agendar llamada</Button>
                                </Grid.Column>
                                <Grid.Column computer={8} className='contacto-simple__center'>
                                    <Image className='contacto-simple__image' src="/llamaya.svg" alt="Agendar llamada" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default ContactSimple;