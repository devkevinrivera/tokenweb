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
                                <Grid.Column computer={8} tablet={16} mobile={16}  className='contacto-simple__message-container'>
                                    <p className='contacto-simple__message'>
                                        ¿Tienes ganas de hablar?
                                    </p>
                                    <p className='contacto-simple__message'>
                                        ¿Tienes alguna idea o proyecto que quieras hacer realidad con tu proyecto online?
                                        ¿Quieres saber más sobre nuestros servicios y productos?¿O simplemente quieres saludarnos y decirnos lo mucho que te gusta el desarrollo de software?
                                    </p>
                                    <p className='contacto-simple__message'>
                                        Sea lo que sea, estamos encantados de escucharte y ayudarte en lo que podamos. Puedes contactarnos por correo electrónico a hola@tokenstudio.eu o
                                        rellenar el siguiente formulario con tus datos y tu mensaje.
                                    </p>
                                    <p className='contacto-simple__message'>
                                        Te responderemos lo antes posible con una sonrisa y una solución
                                    </p>
                                    <p className='contacto-simple__message'>
                                        <Icon name="mail" /> hola@tokenstudio.com
                                    </p>
                                    <p className='contacto-simple__message'>
                                        <Icon name="phone" /> Teléfono: 654470578
                                    </p>
                                    <p className='contacto-simple__message'>
                                        <Icon name="arrow circle left" /> Dirección: Plaza Musico Espi nº 10. 46019. Valencia
                                    </p>
                                    <p className='contacto-simple__message'>
                                        <Icon name="info" /> *Atención al cliente con cita previa.
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