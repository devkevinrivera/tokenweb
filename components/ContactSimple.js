import React from 'react';
import { Button, Container, Form, Grid, Icon, Image, Input } from 'semantic-ui-react';

const ContactSimple = () => {
    return (
        <Container className='contacto-simple'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16} className='contacto-simple__container'>
                        <Grid columns={16}>
                            <Grid.Row>
                                <Grid.Column computer={8} tablet={16} mobile={16} className='contacto-simple__message-container'>
                                    <p className='contacto-simple__message'>
                                    Haz que tu negocio brille en línea con nuestros servicios de diseño web profesionales. ¡Te ayudaremos a destacar entre la competencia y atraer más clientes!
                                    </p>
                                    <Button className='button-black'>
                                        <Icon name="whatsapp" color='green'/>
                                        WhatsApp
                                    </Button>
                                </Grid.Column>
                                <Grid.Column computer={8}  only='computer'>
                                    <Form>
                                        <Form.Field>
                                            <Input  placeholder="Nombre" />
                                        </Form.Field>
                                        <Form.Field>
                                            <Input  placeholder="Email" />
                                        </Form.Field>
                                        <Form.Field>
                                            <Input  placeholder="Asunto" />
                                        </Form.Field>
                                        <Form.Field>
                                            <textarea  placeholder="Mensaje" />
                                        </Form.Field>
                                        <Button className='button-home' floated="left">ENVIAR</Button>
                                    </Form>
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