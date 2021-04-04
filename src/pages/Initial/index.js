import React, { Component } from 'react'
import { Container, Text, Grid, Image, Paragraph, Button, Link } from './styles'

import Logo from '../../assets/static/logo.svg'
import NavBar from '../../components/navbar/index.js'

export default class initial extends Component {
    render() {
        return (
            <Container>

                <NavBar />

                <Grid>
 
                    <Image src={Logo} alt='' />

                </Grid>
                <Grid>

                    <Text>TheRagnarok</Text>
                    <Paragraph>Nos da The Ragnarok prezamos pelo seu bem-estar e segurança além dos preços acessíveis, produtos de ótima qualidade e a melhor experiência possível com nosso atendimento. Confira nossos produtos e preços clicando no botão abaixo.</Paragraph>
                    <Button><Link href="/produtos">Produtos</Link></Button>

                </Grid>


            </Container>
        )
    }
}
