import React, { Component } from 'react'

import { Container, Grid, Image, Paragraph, Button, Text } from './styles'
import Logo from '../../assets/static/logo.svg'

export default class pendente extends Component {
    render() {
        return (
            <Container>

                <Grid>

                    <Image src={Logo} />

                </Grid>
                <Grid>

                    <Text>TheRagnarok</Text>
                    <Paragraph>Obrigado pela sua compra! Nós da RagnarokStore temos o prazer de ter você como nosso cliente. Já estamos prossesando sua compra, após o pagamento ser concluido na forma de pagamento escolhida, e aprovado, o produto será entregado dentro de 3 dias úteis.</Paragraph>

                    <Button href="/">Início</Button>

                </Grid>

            </Container>
        )
    }
}
