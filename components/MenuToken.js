import React from 'react';
import { Container, Grid, Icon, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { handlerShowMenu } from '../redux/slices/config';

const MenuToken = () => {
    const dispatch = useDispatch();

    return (
        <Container className='token-menu'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={8}>
                        <Image src="/logo.svg" />
                    </Grid.Column>
                    <Grid.Column computer={8} textAlign="right">
                        <Icon name="close" onClick={() => dispatch(handlerShowMenu(false))}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={16}>
                        <div className="token-menu__activator">
                            <p className='token-menu__item itemlink'>SERVICIOS</p>
                            <p className='token-menu__item itemhover'>
                                <span className='token-menu__item-primary'>SERVICIOS</span>
                                <span className='yellow token-menu__item-secondary'> SERVICIOS</span>
                                <span className='token-menu__item-primary'> SERVICIOS</span>
                            </p>
                        </div>
                        <div className="token-menu__activator">
                            <p className='token-menu__item itemlink'>PORTAFOLIO</p>
                            <p className='token-menu__item itemhover'>
                                <span className='token-menu__item-primary'>PORTAFOLIO</span>
                                <span className='green token-menu__item-secondary'> PORTAFOLIO</span>
                                <span className='token-menu__item-primary'> PORTAFOLIO</span>
                            </p>
                        </div>
                        <div className="token-menu__activator">
                            <p className='token-menu__item itemlink'>NOTICIAS/BLOG</p>
                            <p className='token-menu__item itemhover'>
                                <span className='token-menu__item-primary'> NOTICIAS/BLOG</span>
                                <span className='purple token-menu__item-secondary'> NOTICIAS/BLOG</span>
                            </p>
                        </div>
                        <div className="token-menu__activator">
                            <p className='token-menu__item itemlink'>PRESUPUESTO</p>
                            <p className='token-menu__item itemhover'>
                                <span className='token-menu__item-primary'>PRESUPUESTO</span>
                                <span className='blue token-menu__item-secondary'> PRESUPUESTO</span>
                            </p>
                        </div>
                        <div className="token-menu__activator">
                            <p className='token-menu__item itemlink'>CONTACTO</p>
                            <p className='token-menu__item itemhover'>
                                <span className='token-menu__item-primary'>CONTACTO</span>
                                <span className='green token-menu__item-secondary'> CONTACTO</span>
                                <span className='token-menu__item-primary'> CONTACTO</span>
                            </p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column computer={16} textAlign="right">
                        <Icon name="coffee" size='mini' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default MenuToken;