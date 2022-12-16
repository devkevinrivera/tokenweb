import React from 'react';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';

const TokenServices = () => {
    return (
        <Container className='token-services'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={5} className='al-center'>
                        <div className='blue box'>
                            <h4>Diseño Web</h4>
                            <p>
                                Llevamos a cabo proyectos web que funcionan gracias aun gran diseño, 
                                una programación perfecta y una comunicación potente.
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
                                Afrontamos el diseño y desarrollo de todo tipo de aplicaciones móviles para empresas y startups, desde apps de productividad, marketplaces, apps e-commerce, juegos, etc. 
                            </p>
                            <ul>
                                <li><Icon name="check" />Aplicaciones de todo tipo: Delivery, Facturación, Gestión de stock, etc...</li>
                            </ul>
                        </div>
                    </Grid.Column>
                    <Grid.Column computer={6} className="mobile-center">
                        <Image src="/mobile.svg" />
                    </Grid.Column>
                    <Grid.Column computer={5} className='al-center'>
                        <div className='yellow box'>
                            <h4>Tiendas Online</h4>
                            <p>
                                Vendemos tiendas que venden porque son coherentes con tu sector, con tu proyecto, con tu cliente. Tiendas online que te dan confianza.
                            </p>
                            <ul>
                                <li><Icon name="check" />Prestashop, Shopify, WordPress y más para que empices a vender.</li>
                                <li><Icon name="check" />No te limites a tu ciudad, con nuestras tiendas podras vender en cualquier pais y en distintos idiomas</li>
                            </ul>
                        </div>
                        <div className='pink box'>
                            <h4>Campañas SEO/SEM</h4>
                            <p>
                                Tenemos planes de Posicionamiento para todos los públicos. Creatividad y analítica se dan la mano.
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