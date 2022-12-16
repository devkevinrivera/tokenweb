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
                                SI NO TIENES WEB <span>YA</span> NO EXISTES
                            </Header>
                            <p>
                                Nuestras webs son un espectáculo visual que convive a la perfección con tu modelo de negocio. Slogans que mueven montañas, una experiencia de usuario que nunca defrauda y una programación impecable son ADN To_KEN.
                                Nuestros desarrollos aman a los móviles, las tabletas y cualquier formato que se ponga por delante.
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
                                Hacemos campañas como estas
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
                                Enchufa tu agencia a la fábrica
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