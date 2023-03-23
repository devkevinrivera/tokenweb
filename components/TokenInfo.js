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
                                Conecta con los clientes fácilmente
                            </Header>
                            <p>
                                Mantén a los clientes al tanto de las últimas novedades con publicaciones, ofertas, mensajes directos y mucho más.
                            </p>
                            <p>
                                Si estás buscando una manera efectiva de atraer nuevos clientes a tu negocio, es fundamental que tengas una página web de calidad.
                                Hoy en día, la presencia en línea es esencial para cualquier empresa que desee crecer y tener éxito.
                                <br/><br/>
                                La razón principal por la que tener una web de calidad es importante para atraer clientes es porque les permite conocer más acerca de tu negocio. Al tener un sitio web atractivo y fácil de navegar, los clientes pueden aprender sobre tus productos o servicios, ver fotos o videos de tus productos, y leer opiniones de otros clientes satisfechos.
                                Esto les da una idea clara de lo que puedes ofrecerles y los incentiva a hacer negocios contigo.
                            </p>

                            {/* <div className='token-info__photo'>
                                <Image src="/helpyou.svg" alt="Technologies" />
                            </div> */}
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