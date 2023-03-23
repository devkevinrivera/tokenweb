import React from 'react';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';

const TokenServices = () => {
    return (
        <Container className='token-services'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={5} className='al-center'>
                        <div className='blue box'>
                            <h4>Diseño Web</h4>
                            <p>
                                En Token ofrecemos servicios de diseño web profesionales para ayudar a tu negocio a tener una presencia en línea impactante. Ofrecemos diseños personalizados, modernos y adaptados a tus necesidades específicas. 
                            </p>
                            <ul>
                                <li>
                                    <Icon name="check" />
                                    Landing Pages</li>
                                <li><Icon name="check" /> Webs Empresariales</li>
                                <li><Icon name="check" /> Aplicaciones Web a medida</li>
                            </ul>
                        </div>
                        <div className='red box'>
                            <h4>Diseño de aplicaciones android/IOS</h4>
                            <p>
                                Lleva tu negocio al siguiente nivel con nuestros servicios de diseño de aplicaciones. Diseño atractivo, interfaz fácil de usar y alta funcionalidad. ¡Mejora la experiencia de tus clientes con una aplicación personalizada!
                            </p>
                            <ul>
                                <li><Icon name="check" />Aplicaciones de todo tipo: Delivery, Facturación, Gestión de stock, etc...</li>
                            </ul>
                        </div>
                    </Grid.Column>
                    <Grid.Column only='computer' computer={6} className="mobile-center">
                        <Image src="/mobile-clean.svg" />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={5} className='al-center'>
                        <div className='yellow box'>
                            <h4>Tiendas Online</h4>
                            <p>
                                Diseñamos tu tienda online para destacar en la competencia. Atractivo visual, fácil navegación y optimización para motores de búsqueda. ¡Aumenta tus ventas con nuestros servicios de diseño!
                            </p>
                            <ul>
                                <li><Icon name="check" />Prestashop, Shopify, WordPress y más para que empices a vender.</li>
                                <li><Icon name="check" />No te limites a tu ciudad, con nuestras tiendas podras vender en cualquier pais y en distintos idiomas</li>
                            </ul>
                        </div>
                        <div className='pink box'>
                            <h4>Campañas SEO/SEM</h4>
                            <p>
                                Mejora tu presencia en internet con nuestros servicios de posicionamiento web. Aumenta tu visibilidad en los motores de búsqueda y atrae más tráfico a tu sitio. ¡Destaca entre la competencia y aumenta tus ventas!
                            </p>
                            <ul>
                                <li><Icon name="check" />Gracias a nuestras herramientas de analisis configuraremos tu tienda optimizandola al maximo, para que puedas aparecer en las primeras busquedas.</li>
                                <li><Icon name="check" />SEO Y SEM: Nos adaptamos a tus objetivos y te ofrecemos las mejores soluciones.</li>
                            </ul>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenServices;