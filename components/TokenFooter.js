import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';

const TokenFooter = () => {
    return (
        <Container>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={13}>
                        <Image src="/logo.svg" alt="Logo footer" />
                        <p>TOKEN: Diseño web de vanguardia para llevar su negocio al siguiente nivel.</p>
                        <p>© TO_KEN</p>
                    </Grid.Column>
                    <Grid.Column computer={3}>
                        <div>
                            <h6>Valencia</h6>
                            <p>Plaza musico espi 10</p>
                            <p>+34 654470578</p>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default TokenFooter;