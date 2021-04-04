import React from 'react'
import axios from 'axios'

import './styles.js'
import Trolley from '../../assets/cart.svg'

import MercadoPago from '../../assets/mercadopago.svg'
import { Container, Image, Lista, Item, Text, Button, Input, Cupom, Alerta, Grid } from './styles.js'

export default function App() {

    const [reload, reloadChange] = React.useState(true)
    const [valorBuy, setValor] = React.useState(0)
    const [cupom, setCupom] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')

    const mercadopago = async () => {

        let valor = ''
        if(!inputValue === '') valor = inputValue.target.value


        if (valor === '') {

            let produtos = "?"

            JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

                produtos = produtos + `products=${x.nome} ${x.unidade}&`

            })

            axios.get(`http://18.230.153.191:3000/createlink/${produtos}`).then(response => {

                window.location.replace(response.data.link)

            })

        } else {

            axios.get(`http://18.230.153.191:3000/getcupom/?cupom=${valor}`).then(response => {

                if (response.data.sucess === false) {

                    setCupom(true)

                } else {

                    let produtos = "?"

                    JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

                        produtos = produtos + `products=${x.nome} ${x.unidade}&`

                    })

                    axios.get(`http://18.230.153.191:3000/createlink/${produtos}cupom=${valor}`).then(response => {

                        window.location.replace(response.data.link)

                    })

                }

            })

        }

    }

    React.useEffect(() => {

        JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

            let soma = x.valor * x.unidade

            setValor(v => v + soma)

        })

    }, []);

    const removeUni = (produto, valor) => {

        reloadChange(!reload)

        let carrinho = []
        JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

            if (x.nome === produto & x.valor === valor) {

                if (x.unidade === 1) {

                    setValor(v => v - x.valor)
                    return;

                } else {

                    setValor(v => v - x.valor)

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

                setValor(v => v + x.valor)
                carrinho.push({ nome: x.nome, valor: x.valor, unidade: x.unidade + 1 })

            } else {

                carrinho.push({ nome: x.nome, valor: x.valor, unidade: x.unidade })

            }
        })

        localStorage.setItem('@carrinho', JSON.stringify(carrinho))

    }

    return (

        <Container>

            <Grid>

            <Image src={Trolley} />
            <Text>Seu carrinho de compras</Text>
            <Lista>

                {JSON.parse(localStorage.getItem('@carrinho'))?.map((todo, index) => (

                    <Item key={todo.name}>

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
            <Cupom>

                <Input onChange={setInputValue} placeholder="Insira seu cupom..."></Input>

            </Cupom>

            <Text>Valor total: {valorBuy.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</Text>
            <Button onClick={mercadopago}>

                <Image src={MercadoPago} />
                <Text>MercadoPago</Text>

            </Button>

            {cupom ?

                <Alerta>

                    <Text>Você não inseriu um cúpom válido, tente novamente.</Text>

                </Alerta>

                : null}
                
            </Grid>

        </Container>


    )

}