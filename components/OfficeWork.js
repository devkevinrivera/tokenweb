import React from 'react';
import { Container, Divider, Grid, Image } from 'semantic-ui-react';

const OfficeWork = () => {
    return (
        <div className='office'>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={8} mobile={16}>
                            <h3>COSAS QUE TE PUEDEN INTERESAR SOBRE TOKEN DISEÑO WEB EN ESPAÑA</h3>
                            <Divider />
                            <h4>Algunos detalles sobre nosotros que te pueden interesar.</h4>
                            <p>
                                Token es un equipo de jóvenes diseñadores Web y Programadores, especializados en Diseño Web y situados en nuestras oficinas de Valencia.
                                Desde Token queremos ofrecerte la oportunidad de tener tu Negocio Online con la máxima calidad al precio más bajo. <br/><br/>
                                Realizamos el servicio de diseño web en wordpress en el que puedes elegir entre varias opciones de tarifas acorde a tus objetivos. En nuestras  podrás elegir el diseño web, tus imágenes, interactuar en las Redes sociales integradas en tu Web Low Cost y muchas más ventajas como poder gestionar tu Web de forma autoadministrable. Además te ofrecemos el servicio de posicionamiento SEO. <br/><br/>
                                Entre nuestros servicios como Diseñadores Web también existe la posibilidad de la creación de tu tienda Online E-commerce a precios muy económicos. En nuestras Tiendas Online te ofrecemos muchas opciones. Además de su creación también te ofrecemos la posibilidad de adaptar a tu Tienda Online un SEO optimizado, el mantenimiento web y, además el alojamiento web. <br/><br/>
                                ¿Necesitas desarrollar una web o crear un Web personalizada a tu medida?
                                En Token te ofrecemos servicios personalizados para la creación, desarrollo, programación y mantenimiento de tu web. Además si quieres te ofrecemos Servicios de alojamiento y mantenimiento con las mejores condiciones posibles.
                            </p>
                        </Grid.Column>
                        <Grid.Column computer={8} verticalAlign="middle" mobile={16}>
                            <Image src="/designweb.jpg"  fluid/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default OfficeWork;