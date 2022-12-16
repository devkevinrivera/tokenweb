import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const TokenInfo = () => {
    return (
        <Container className='token-info'>
            <Grid columns={16}>
                <Grid.Row className='mg-b'>
                    <Grid.Column computer={16}>
                        <section className='token-info__container '>
                            <Header as="h2">
                                DIFERÉNCIATE DEL RESTO
                            </Header>
                            <p>
                                En nuestro estudio tenemos todos los recursos para que puedas tener tu página web lista en un tiempo record y a un precio increíble. 
                                Tu web disponible para todos los dispositivos móviles. El diseño de páginas web más atractivo. El diseño web en Valencia más actual. 
                            </p>

                            <div className='token-info__photo'>
                                <Image src="/middle-mobile.svg" alt="Technologies" />
                            </div>
                        </section>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={8}>
                        <section className='token-info__container-middle'>
                            <Header as="h2">
                                CREAMOS PÁGINAS WEB QUE POSICIONAN EN LOS NAVEGADORES
                            </Header>
                            <p>
                                Somos <b>expertos en WordPress,</b> diseñamos su página web corporativa,
                                personal o e-commerce, utilizando el mejor gestor de contenidos para la creación
                                de páginas web, el cual le permitirá modificar o ampliar sus contenidos, fotos,
                                textos, videos o implementar un <b>carrito de la compra</b> para vender En
                                internet.
                                <br></br>
                                Prestamos <b>servicio de mantenimiento web, su página siempre actualizada.</b>
                            </p>

                            <div className='token-info__photo'>
                                <Image src="/middle-mobile.svg" alt="Technologies" />
                            </div>
                        </section>
                    </Grid.Column>
                    <Grid.Column computer={8}>
                        <section className='token-info__container-middle'>
                            <Header as="h2">
                                DESARROLLAMOS TODO TIPO DE APLICACIONES WEB A MEDIDA
                            </Header>
                            <p>
                                Nuestros equipos de ingeniería utilizan tecnologías de Frontend y Backend 100% a medida. Nunca utilizamos sistemas pre programados o basados en plantillas. 
                                No es un capricho, es la única forma de garantizar la futura escalabilidad de tu idea, solidificar los cimientos técnicos y hacer que tus usuarios tengan la experiencia que se merecen. Nuestras apps cumplen los máximos estándares de calidad marcados por Apple y Google en sus stores. Nos lo tomamos muy en serio.
                            </p>

                            <div className='token-info__photo'>
                                <Image src="/middle-mobile.svg" alt="Technologies" />
                            </div>
                        </section>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenInfo;