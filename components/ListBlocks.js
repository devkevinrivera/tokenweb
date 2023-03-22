import React from 'react';
import { Container, Grid, Icon, Image, Item } from 'semantic-ui-react';
import BannerTech from './BannerTech';
import BannerText from './BannerText';

const ListBlocks = ({ options, image, reverse = false }) => {
    return (
        <div className='list-blocks'>
            <Container co>
                <Grid columns={16}>
                    <Grid.Row>
                        <Grid.Column computer={4} verticalAlign="middle">
                            <Image src="/reporte-anual.png" />
                        </Grid.Column>
                        <Grid.Column computer={12}>
                            <Grid columns={16}>
                                <Grid.Row>
                                    {
                                        options.map((item) => (
                                            (
                                                <Grid.Column className='list-blocks__content' computer={8}>
                                                    <ItemBox
                                                        item={item}
                                                    />
                                                </Grid.Column>
                                            )
                                        ))
                                    }
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <BannerText item={{
                btnTitle: "¡Contáctanos ahora!",
                titleBanner:"Somos muy rápidos sin perder un píxel de calidad. ¿Cuándo necesitas tu proyecto?"
            }} />
        </div>
    );
};

const ItemBox = ({item}) => {
    const { icon = "", title = "", description = "" } = item;
    return (
        <Grid columns={16} className="item-box">
            <Grid.Row className="item-box__nopd">
                <Grid.Column computer={2}>
                    <Icon className="item-box__icon" name={icon} size="large" color="yellow"/>
                </Grid.Column>
                <Grid.Column computer={14}>
                    <h4 className="item-box__title">{title}</h4>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="item-box__description__container">
                <Grid.Column computer={16}>
                    <p className="item-box__description">
                        {description}
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
};
export default ListBlocks;