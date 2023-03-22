import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const BannerReutilizable = ({ title = '', subtitle = '', ctaLink = '', ctaText = '', background = '' }) => {

    return (
        <div className='banner-reutilizable'>
            <Container className='banner-reutilizable__container' style={{ backgroundImage:  `url(${background})` }}>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column computer={16}>
                            <Header className='banner-reutilizable__title' as="h1">{title}</Header>
                            <Header className='banner-reutilizable__subtitle' as="h2">{subtitle}</Header>
                            <Button className='banner-reutilizable__cta' onClick={ev => router.push(ctaLink)}>{ctaText}</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default BannerReutilizable;