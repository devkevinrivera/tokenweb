import { useRouter } from 'next/router';
import React from 'react';
import { Button, Container, Grid, Header } from 'semantic-ui-react';

const CardProject = ({ category , items = [], projects  }) => {
    return (
        <div className='card-project'>
            <Container>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column computer={16}>
                            <Header as="h2" className='card-project__title'>{ category }</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='card-project__center'>
                        <Grid.Column computer={7} mobile={16}>
                            <Card item={{
                                background: projects?.main.background,
                                title: projects?.main.title,
                                text: '',
                                webUri: projects?.main.webUri
                            }}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='card-project__space'>
                        {
                            projects?.secondary?.map(({ background, title, text, webUri }) => (
                                <Grid.Column className='card-project__padding' computer={5} mobile={16}>
                                    <Card item={{
                                        background: background,
                                        title: title,
                                        text: '',
                                        webUri: webUri
                                    }} />
                                </Grid.Column>
                            ))
                        }
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
    const webUri = item?.item?.webUri;
    const router = useRouter();

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
                        className="item-card__image"></div>
                </Grid.Column>
                <Grid.Column computer={16} textAlign="center" className="item-card__container">
                    <Button onClick={() => {
                        router.push(webUri)
                    }} className='button-ghost'>Ver Web</Button>
                    <Button  className='button-primary'>Comprar</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default CardProject;