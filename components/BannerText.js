import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const BannerText = ({ item }) => {
    const { btnTitle = '', titleBanner = '', ctaLink  } = item;
    const router = useRouter();
    
    return (
        <div className='banner-text'>
            <Container>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column computer={16} textAlign="center">
                            <Header as="h3" className='banner-text__title'>{titleBanner}</Header>
                            <Button onClick={() => router.push(ctaLink)} className="button-presupuesto-big">{btnTitle}</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default BannerText;