import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const VentajasReutilizable = () => {
    return (
        <div className='ventajas-reutilizable'>
            <Container className='ventajas-reutilizable__container' style={{ backgroundImage:  `url(${background})` }}>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column computer={16}>
                            <Header className='ventajas-reutilizable__title' as="h1">{title}</Header>
                            <Header className='ventajas-reutilizable__subtitle' as="h2">{subtitle}</Header>
                            <Button className='ventajas-reutilizable__cta' onClick={ev => router.push(ctaLink)}>{ctaText}</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default VentajasReutilizable;