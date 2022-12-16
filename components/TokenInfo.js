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
                                Tecnología de la que utilizan las grandes big digitales como Meta, Airbnb o Uber
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
                <Grid.Row>
                    <Grid.Column computer={8}>
                        <section className='token-info__container-middle'>
                            <Header as="h2">
                                    Tecnología de la que utilizan las grandes big digitales como Meta, Airbnb o Uber
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
                    <Grid.Column computer={8}>
                        <section className='token-info__container-middle'>
                            <Header as="h2">
                                    Tecnología de la que utilizan las grandes big digitales como Meta, Airbnb o Uber
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