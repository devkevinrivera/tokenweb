import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const BannerReutilizable = ({ title = '', subtitle = '', ctaLink = '', ctaText = '', background = '' }) => {
    const router = useRouter();

    return (
        <div className='banner-reutilizable'>
            <Container className='banner-reutilizable__container' style={{ backgroundImage:  `url(${background})` }}>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column computer={16}>
                            <Header className='banner-reutilizable__title' as="h1">{title}</Header>
                            <Header className='banner-reutilizable__subtitle' as="h2">{subtitle}</Header>
                            <Button className='button-presupuesto' onClick={ev => router.push(ctaLink)}>{ctaText}</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default BannerReutilizable;