import React from 'react'

import Trolley from '../../assets/cart.svg'
import TrolleyWhite from '../../assets/cartwhite.svg'

import { Container, TrolleyOff, TrolleyOn, Image, Grid, Close, Lista, Button, Text, Item, Link } from './styles'

export default function App() {

    const [activate, activateChange] = React.useState(true)
    const [reload, reloadChange] = React.useState(true)

    const functionChange = () => {

        if (activate === false) {

            activateChange(!activate)

        } else {

            activateChange(!activate)

        }

    }

    const removeUni = (produto, valor) => {

        reloadChange(!reload)

        let carrinho = []
        JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

            if (x.nome === produto & x.valor === valor) {

                if (x.unidade === 1) {

                    return;

                } else {

                    carrinho.push({ nome: x.nome, valor: x.valor, unidade: x.unidade - 1 })

                }

            } else {

                carrinho.push({ nome: x.nome, valor: x.valor, unidade: x.unidade })

            }
        })

        localStorage.setItem('@carrinho', JSON.stringify(carrinho))

    }

    const addUni = (produto, valor) => {

        reloadChange(!reload)

        let carrinho = []
        JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

            if (x.nome === produto & x.valor === valor) {

                carrinho.push({ nome: x.nome, valor: x.valor, unidade: x.unidade + 1 })

            } else {

                carrinho.push({ nome: x.nome, valor: x.valor, unidade: x.unidade })

            }
        })

        localStorage.setItem('@carrinho', JSON.stringify(carrinho))

    }

    return (

        <Container>

            <TrolleyOff hidden={activate} onClick={functionChange}>

                <Image src={Trolley} />

            </TrolleyOff>
            <TrolleyOn hidden={activate}>

                <Grid onClick={functionChange}>

                    <Close>X</Close>
                    <Text>Fechar carrinho</Text>

                </Grid>
                <Lista>

                    {JSON.parse(localStorage.getItem('@carrinho'))?.map((todo, index) => (

                        <Item>

                            <Button onClick={() => removeUni(todo.nome, todo.valor)}>

                                <Text>-</Text>

                            </Button>

                            <Text value>{todo.unidade}</Text>

                            <Button onClick={() => addUni(todo.nome, todo.valor)}>

                                <Text>+</Text>

                            </Button>

                            <Text>{todo.nome}</Text>


                        </Item>

                    ))}

                </Lista>

                <Button>

                    <Image src={TrolleyWhite} />
                    <Link href="/carrinho">Comprar</Link>
                        
                </Button>

            </TrolleyOn>

        </Container>

    )

}