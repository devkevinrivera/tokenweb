import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Grid, Header, Image } from 'semantic-ui-react';

const TematicSlides = () => {
    const router = useRouter();

    const items = [{
        theme: 'eight',
        url: 'responsive.png',
        titulo: 'ADAPTABLE A DISPOSITIVOS MÓVILES'
    },{
        theme: 'two',
        url: 'admin.png',
        titulo: '100% AUTOGESTIONALBE'
    },{
        theme: 'thre',
        url: 'chrome.png',
        titulo: 'OPTIMIZADA PARA GOOGLE'
    },{
        theme: 'four',
        url: 'speed.png',
        titulo: 'TE ENTREGAMOS LA WEB EN 2 SEMANAS'
    },{
        theme: 'five',
        url: 'legal.png',
        titulo: 'ADAPTADA A NORMATIVA LEGAL'
    },{
        theme: 'six',
        url: 'disenador-grafico.png',
        titulo: 'DISEÑO GRAFÍCO ORIGINAL'
    },{
        theme: 'eight',
        url: 'web-analytics.png',
        titulo: 'ALTA EN GOOGLE ANALYTICS'
    },{
        theme: 'eight',
        url: 'adwords.png',
        titulo: 'ESTRATEGIA DE ADWORDS'
        },];
    
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
                                    <Grid.Column className={`tematic-slides__${option.theme}`} computer={2}>
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