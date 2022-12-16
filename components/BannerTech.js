import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

const BannerTech = () => {
    return (
        <Container className='banner-tech' fluid>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h6">
                            Web & Ecommerce & <span className='color-green-low'>Apps</span>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default BannerTech;