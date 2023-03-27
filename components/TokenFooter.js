import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Grid, Icon, Image } from 'semantic-ui-react';

const TokenFooter = () => {
    const router = useRouter();

    return (
        <Container>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={4} mobile={16}>
                        <h4>
                            <b>Síguenos</b>
                        </h4>
                        <div className='token-social'>
                            <Icon onClick={() => router.push('https://www.linkedin.com/in/token-estudio-software-04b63a26b/')} name="linkedin" size="large" className="token-color"/>
                            <Icon onClick={() => router.push('https://www.instagram.com/token.web.design/')} name="instagram" size="large" className="token-color"/>
                            <Icon onClick={() => router.push('https://www.instagram.com/token.web.design/')} name="youtube" size="large" className="token-color"/>
                        </div>
                        <Image src="/logofinal2.svg" alt="Logo footer" />
                        <h4>
                            Desde Valencia y con mucho cariño, desarrollamos en serie productos únicos.
                        </h4>
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={8}>
                        <div>
                            <h4>
                                <b>Contacto</b>
                            </h4>
                            <p>Plaza musico espi nº 10, Valencia</p>
                            <p>hola@token.com</p>
                            <p>+34 654 47 05 78</p>
                            <h4>
                                <b>Datos fiscales:</b>
                            </h4>
                            <p>Kevin Rivera Ramirez</p>
                            <p>España</p>
                            <p>NIF 23324123F</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={8}>
                        <div>
                            <h4>
                                <b>Legal</b>
                            </h4>
                            <p>Contacta con nosotros</p>
                            <p>Términos y condiciones</p>
                            <p>Política de devolución</p>
                            <p>Política de privacidad</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={4} mobile={16}>
                        <div className='mgt-1'>
                            <h3>¿No encuentras lo que buscas?</h3>
                            <p>
                                Maximiza el impacto de tu presencia en línea con un diseño web atractivo y profesional. Contrata mis servicios hoy.
                            </p>
                            <p>
                                ¿Quieres un sitio web impactante y efectivo que atraiga a tus clientes potenciales? Con mi experiencia en diseño web,
                                puedo crear una presencia en línea memorable que refleje la identidad de tu marca. Contáctame ahora para discutir tus necesidades y objetivos.
                            </p>
                            <Button onClick={() => {
                                router.push('https://wa.link/jyx7kr');
                            }} className='button-home'>Contactar</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenFooter;