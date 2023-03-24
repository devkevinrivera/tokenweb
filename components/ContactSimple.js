import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Container, Form, Grid, Icon, Image, Input } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from "axios"
const ContactSimple = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm();
    const [loading, setLoading] = useState(false);
    const [emailSend, setEmailSend] = useState(false);
    const onSubmit = async (datos) => {
        try {
            setLoading(true)
            const sendData = await axios.post('/api/email', datos);
            setEmailSend(true);
            setTimeout(() => {
                setEmailSend(false);
                setLoading(false);
                reset();
            }, 1000);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Container id="contacto-simple" className='contacto-simple'>
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
                                    <p className='contacto-simple__message '>
                                        <Icon name="mail" /> <b>Email:</b> hola@tokenstudio.com
                                    </p>
                                    <p className='contacto-simple__message '>
                                        <Icon name="phone" /> <b>Teléfono:</b> 654470578
                                    </p>
                                    <p className='contacto-simple__message '>
                                        <Icon name="arrow circle left" /> <b>Dirección: </b> Plaza Musico Espi nº 10. 46019. Valencia
                                    </p>
                                    <p className='contacto-simple__message '>
                                        <Icon name="info" /> *Atención al cliente con cita previa.
                                    </p>
                                    <Button onClick={() => router.push('https://wa.link/jyx7kr')} className='button-black'>
                                        <Icon name="whatsapp" color='green'/>
                                        WhatsApp
                                    </Button>
                                </Grid.Column>
                                <Grid.Column computer={8}  only='computer' verticalAlign='middle'>
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        {
                                            emailSend && (
                                                <p className='message-sucess'>Tu mensaje se ha enviado con exito. Te responderemos lo mas breve posible.</p>
                                            )
                                        }
                                        <Form.Field>
                                            <input required {...register("nombre")}  placeholder="Nombre" />
                                        </Form.Field>
                                        <Form.Field>
                                            <input type="email" {...register("email")}  placeholder="Email" />
                                        </Form.Field>
                                        <Form.Field>
                                            <input type="text"  {...register("asunto")} placeholder="Asunto" />
                                        </Form.Field>
                                        <Form.Field>
                                            <textarea {...register("mensaje")}  placeholder="Mensaje" />
                                        </Form.Field>
                                        
                                        <Button loading={loading} type='submit' className='button-home' floated="left">ENVIAR</Button>
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