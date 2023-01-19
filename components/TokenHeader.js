import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { handlerShowMenu } from '../redux/slices/config';
const TokenHeader = () => {
    const dispatch = useDispatch();

    return (
        <Container className='token-header'>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column mobile={13} computer={4}>
                        <Image src="/logo.svg" alt="Token Logo"/>
                    </Grid.Column>
                    <Grid.Column computer={10} only="computer">
                        <nav>
                            <span>Inicio</span>
                            <span>Nosotros</span>
                            <span>Servicios</span>
                            <span>Proyectos</span>
                        </nav>
                    </Grid.Column>
                    <Grid.Column computer={2} verticalAlign="middle">
                        <Image onClick={() => dispatch(handlerShowMenu(true))} src="/menu.svg" alt="Menu"/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenHeader;