import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Grid, Header, Image } from 'semantic-ui-react';

const TematicSlides = ({ items }) => {
    const router = useRouter();

    return (
        <div className='tematic-slides'>
            <Container>
                <Grid columns={16}>
                    <Grid.Row className='space'>
                        <Grid.Column computer={16} textAlign="center">
                            <Header as="h2">LAS VENTAJAS DE NUESTRAS WEB:</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='space'>
                        {
                            items.map((option) => (
                                    <Grid.Column className={`tematic-slides__${option.theme}`} computer={2} mobile={8}>
                                        <TematicCard item={option} />
                                    </Grid.Column>
                            ))
                        }
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer={16} textAlign="center">
                            <Button onClick={() => router.push('#contacto-simple')} className="go-service" content="Transforma tu empresa" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

const TematicCard = ({ item }) => {
    const { theme , url, titulo } = item;
    return (
        <Grid columns={16} className="card-item-tematic">
            <Grid.Row>
                <Grid.Column computer={16} className="space">
                    <Image src={url} />
                </Grid.Column>
                <Grid.Column computer={16}>
                    <p className="card-item-tematic__title">
                        <b>
                            {titulo}
                        </b>
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
} 

export default TematicSlides;