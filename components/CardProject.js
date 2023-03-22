import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const CardProject = (item) => {
    const { title = '', image = '' } = item
    return (
        <div className='card-project'>
            <Container>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column computer={16}>
                            <Header as="h2" className='card-project__title'>NUESTROS ÚLTIMOS DISEÑOS DE PÁGINAS WEB</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='card-project__center'>
                        <Grid.Column computer={7}>
                            <Card item={{
                                background: 'http://localhost:3000/archicercle.png',
                                title: 'Archicercle',
                                text: ''
                            }}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='card-project__space'>
                        <Grid.Column className='card-project__padding' computer={5}>
                            <Card item={{
                                background: 'http://localhost:3000/justlasercuteu.png',
                                title: 'JustlaserCut',
                                text: ''
                            }} />
                        </Grid.Column>
                        <Grid.Column computer={5}>
                            <Card item={{
                                background: 'http://localhost:3000/cosastudio.png',
                                title: 'CosasStudio',
                                text: ''
                            }} />
                        </Grid.Column>
                        <Grid.Column computer={5}>
                            <Card item={{
                                background: 'http://localhost:3000/interzoo.png',
                                title: 'Interzoo',
                                text: ''
                            }} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

const Card = (item) => {
    
    const url = item?.item?.background;
    const title = item?.item?.title;
    const text = item?.item?.text;
    return (
        <Grid columns={16} className="item-card">
            <Grid.Row>
                <Grid.Column computer={13}>
                    <p className="item-card__title">Web: {title}</p>
                </Grid.Column>
                <Grid.Column computer={3} textAlign="right">
                    <p className="item-card__price">{text}</p>
                </Grid.Column>
                <Grid.Column computer={16}>
                    <div
                        style={{ backgroundImage:  `url(${url})` }}
                        className="item-card__image">imagen</div>
                </Grid.Column>
                <Grid.Column computer={16} textAlign="center" className="item-card__container">
                    <Button className='button-ghost'>Ver Web</Button>
                    <Button className='button-primary'>Comprar</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default CardProject;