import React from 'react'
import firebase from 'firebase'

import NavBar from '../../components/navbar/index.js'
import Trolley from '../../components/trolley/index.js'

import OndaImage from '../../assets/onda.svg'
import Footer from '../../components/footer/index.js'
import Logo from '../../assets/static/logo.svg'
import CartWhite from '../../assets/cartwhite.svg'

import { Box, Button, Onda, Container, Header, Image, Item, Lista, Paragraph, Products, Text } from './styles'

export default function App() {

    const [products, setProducts] = React.useState()

    React.useEffect(() => {

        async function getProducts() {

            let ref = await firebase.database().ref(`Produtos`).once('value')
            let array = []

            ref.forEach((x) => {

                array.push({ id: x.key, name: x.val().name, value: x.val().value, image: x.val().image, descriptionOne: x.val().descriptionOne, descriptionTwo: x.val().descriptionTwo, descriptionThree: x.val().descriptionThree, descriptionFour: x.val().descriptionFour, descriptionFive: x.val().descriptionFive })

            })

            setProducts(array)


        }

        getProducts()

    })

    const saveProduct = async (produto, valor) => {

        let carrinho = []
        if (localStorage.getItem('@carrinho') == null || localStorage.getItem('@carrinho') === "[]") {

            carrinho = [{ nome: produto, valor: valor, unidade: 1 }]
            localStorage.setItem('@carrinho', JSON.stringify(carrinho))

        } else {

            let busca = JSON.parse(localStorage.getItem('@carrinho'))
            var confirm = true

            busca.forEach(async x => {

                if (x.valor === valor && x.nome === produto) {

                    confirm = false
                    carrinho.push({ valor: valor, nome: produto, unidade: x.unidade + 1 })

                } else {

                    carrinho.push({ valor: x.valor, nome: x.nome, unidade: x.unidade })

                }

            })

            if (confirm === true) {

                carrinho.push({ valor: valor, nome: produto, unidade: 1 })

            }

            await localStorage.setItem('@carrinho', JSON.stringify(carrinho))

        }

    }

    return (

        <Container>

            <Header>

                <Image src={Logo} />
                <Text>The Ragnarok</Text>
                <Paragraph>Antes de adquirir qualquer produto da nossa loja esteja ciente dos termos e condições e faq, caso reste dúvidas referente ao produto você poderá entrar em nosso Discord e sanar todas elas.</Paragraph>

                <Onda src={OndaImage} />

            </Header>

            <Text division>Produtos</Text>

            <Products>

                {products?.map((a, index) => (

                    <Box key={a.name}>

                        <Image src={a.image} />

                        <Text>{a.name}</Text>
                        <Paragraph>{Number(a.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</Paragraph>

                        <Lista>

                            <Item>{a.descriptionOne}</Item>
                            <Item>{a.descriptionTwo}</Item>
                            <Item>{a.descriptionThree}</Item>
                            <Item>{a.descriptionFour}</Item>

                        </Lista>
                        <Button onClick={() => { saveProduct(a.name, Number(a.value)) }}>

                            <Image src={CartWhite} />
                            <Text>Comprar</Text>

                        </Button>

                    </Box>

                ))}

            </Products>
            <Footer />

            <NavBar />
            <Trolley />

        </Container>

    )

}