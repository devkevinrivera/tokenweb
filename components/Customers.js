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
                    <Grid.Column computer={4} className='customers__item'>
                        <Image src="/customer-quote.svg" alt="quote-user" />
                        <h3>Buen Enfoque</h3>

                        <p>
                            Me gustó la forma de enfocar mi idea, yo iba con un concepto algo “difuso” de cómo arrancar mi negocio y al hablarlo con 
                            ellos entendí muchas cosas que no tenía claras y que las aceleradoras no te explican bien. [...] En decisiones así, se agradece la honestidad aunque te haga ver que estaba equivocada, es bueno corregir desde el primer momento. Nos vemos pronto! ;)
                        </p>
                        <nav className='flex'>
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                        </nav>
                        <p>Kevin Rivera - ToKen CEO</p>
                    </Grid.Column>
                    <Grid.Column computer={4} className='customers__item'>
                        <Image src="/customer-quote.svg" alt="quote-user" />
                        <h3>Buen Enfoque</h3>

                        <p>
                            Me gustó la forma de enfocar mi idea, yo iba con un concepto algo “difuso” de cómo arrancar mi negocio y al hablarlo con 
                            ellos entendí muchas cosas que no tenía claras y que las aceleradoras no te explican bien. [...] En decisiones así, se agradece la honestidad aunque te haga ver que estaba equivocada, es bueno corregir desde el primer momento. Nos vemos pronto! ;)
                        </p>
                        <nav className='flex'>
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                        </nav>
                        <p>Kevin Rivera - ToKen CEO</p>
                    </Grid.Column>
                    <Grid.Column computer={4} className='customers__item'>
                        <Image src="/customer-quote.svg" alt="quote-user" />
                        <h3>Buen Enfoque</h3>

                        <p>
                            Me gustó la forma de enfocar mi idea, yo iba con un concepto algo “difuso” de cómo arrancar mi negocio y al hablarlo con 
                            ellos entendí muchas cosas que no tenía claras y que las aceleradoras no te explican bien. [...] En decisiones así, se agradece la honestidad aunque te haga ver que estaba equivocada, es bueno corregir desde el primer momento. Nos vemos pronto! ;)
                        </p>
                        <nav className='flex'>
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                        </nav>
                        <p>Kevin Rivera - ToKen CEO</p>
                    </Grid.Column>
                    <Grid.Column computer={4} className='customers__item'>
                        <Image src="/customer-quote.svg" alt="quote-user" />
                        <h3>Buen Enfoque</h3>

                        <p>
                            Me gustó la forma de enfocar mi idea, yo iba con un concepto algo “difuso” de cómo arrancar mi negocio y al hablarlo con 
                            ellos entendí muchas cosas que no tenía claras y que las aceleradoras no te explican bien. [...] En decisiones así, se agradece la honestidad aunque te haga ver que estaba equivocada, es bueno corregir desde el primer momento. Nos vemos pronto! ;)
                        </p>
                        <nav className='flex'>
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                            <Image src="/star.svg" alt="puntuacion" />
                        </nav>
                        <p>Kevin Rivera - ToKen CEO</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Customers;