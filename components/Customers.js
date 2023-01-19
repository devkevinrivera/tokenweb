import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

const Customers = () => {
    return (
        <Container className='customers'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16}>
                        <Header className='customers__title'>
                            NUESTROS CLIENTES OPINAN 
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className='gap'>
                    <Grid.Column computer={8} className='customers__item'>
                        <Image src="/customer-quote.svg" alt="quote-user" />
                        <h3>Diseño atractivo y funcional: Mi experiencia con Token</h3>

                        <p>
                            Mi experiencia con esta agencia de diseño web ha sido excepcional. Desde el primer momento, el equipo demostró ser altamente profesional y comprometido con ayudarme a crear el sitio web perfecto para mi negocio. El diseño es moderno y atractivo, y la interfaz es fácil de usar. Además, el equipo se aseguró de que mi sitio web estuviera optimizado para los motores de búsqueda, lo que ha ayudado a aumentar el tráfico a mi sitio. La atención al cliente también ha sido impresionante, siempre disponibles para responder preguntas y hacer ajustes según sea necesario. Sin duda, recomendaría esta agencia de diseño web a cualquiera que busque crear un sitio web impresionante.
                        </p>
                        <nav className='flex'>
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                        </nav>
                        <p>Juan, ingeniero civil</p>
                    </Grid.Column>
                    <Grid.Column computer={8} className='customers__item'>
                        <Image src="/customer-quote.svg" alt="quote-user" />
                        <h3>Token me ayudó a dar vida a mi sitio web</h3>

                        <p>
                            Mi experiencia con esta agencia de desarrollo de software ha sido impresionante. Desde el primer momento, el equipo se esforzó por entender mis necesidades y desarrollar una solución personalizada para mi negocio. El desarrollo del software se llevó a cabo con precisión y eficiencia, el equipo se aseguró de cumplir con todos los requisitos y plazos. Además, el software resultante es altamente funcional y fácil de usar. La atención al cliente también ha sido excelente, siempre disponibles para brindar soporte y hacer ajustes según sea necesario. Sin duda, recomendaría esta agencia de desarrollo de software a cualquiera que busque una solución de calidad para su negocio.
                        </p>
                        <nav className='flex'>
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                        </nav>
                        <p>Maria, médico</p>
                    </Grid.Column>
                   
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Customers;