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
                            Nuestra agencia de diseño web ofrece un servicio completo y personalizado para tu negocio. Ofrecemos diseño atractivo y moderno, optimización para motores de búsqueda, y una interfaz fácil de usar. Además, brindamos una atención al cliente excepcional para garantizar que tu sitio web sea exactamente lo que necesitas para destacar entre la competencia y aumentar tu presencia en línea.
                            </p>

                            <div className='token-info__photo'>
                                <Image src="/middle-mobile.svg" alt="Technologies" />
                            </div>
                        </section>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={8} tablet={8} mobile={16}>
                        <section className='token-info__container-middle'>
                            <Header as="h2">
                                CREAMOS PÁGINAS WEB QUE POSICIONAN EN LOS NAVEGADORES
                            </Header>
                            <p>
                                ¿Quieres mejorar la visibilidad de tu sitio web en los motores de búsqueda y atraer más tráfico a tu sitio? Nuestros servicios de posicionamiento SEO son la solución que necesitas. Ofrecemos un enfoque estratégico y personalizado para mejorar tu posicionamiento en los motores de búsqueda, utilizando técnicas de optimización on-page y off-page, además de un seguimiento y análisis constante para medir el rendimiento y ajustar la estrategia. Con nuestra ayuda, tu sitio web será más fácil de encontrar y atraerá a más clientes potenciales.
                            </p>

                            <div className='token-info__photo'>
                                <Image src="/middle-mobile-seo.svg" alt="Technologies" />
                            </div>
                        </section>
                    </Grid.Column>
                    <Grid.Column computer={8} mobile={16}>
                        <section className='token-info__container-middle'>
                            <Header as="h2">
                                DESARROLLAMOS TODO TIPO DE APLICACIONES WEB A MEDIDA
                            </Header>
                            <p>
                                ¿Necesitas una aplicación web personalizada para tu negocio? Nuestros servicios de desarrollo de aplicaciones web a medida son la solución perfecta. Ofrecemos un enfoque único y adaptado a tus necesidades, desde la planificación hasta el diseño y el desarrollo de la aplicación. Trabajamos estrechamente contigo para asegurarnos de que tu aplicación sea atractiva, fácil de usar y altamente funcional. Además, brindamos un servicio de soporte y mantenimiento continuo para garantizar que tu aplicación siempre esté actualizada y funcionando sin problemas.
                            </p>

                            <div className='token-info__photo'>
                                <Image src="/middle-mobile-software.png" alt="Technologies" />
                            </div>
                        </section>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenInfo;