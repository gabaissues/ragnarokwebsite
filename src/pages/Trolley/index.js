import React, { useRef } from 'react'
import axios from 'axios'

import './index.css'
import Onda from '../../assets/onda2.svg'
import Trolley from '../../assets/cart.svg'
import { Alert } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';

import MercadoPago from '../../assets/mercadopago.svg'

export default function App() {

    const [reload, reloadChange] = React.useState(true)
    const [valorBuy, setValor] = React.useState(0)
    const [cupom, setCupom] = React.useState(false)
    const [nulo, setNulo] = React.useState(false)

    React.useEffect(() => {

        let value = JSON.parse(localStorage.getItem('@carrinho'))

        if (value === '[]') {

            setNulo(true)

        }

    }, [])

    const myRefs = useRef('')

    const mercadopago = async () => {

        console.log(myRefs.current.value)

        if (myRefs.current.value === '') {

            let produtos = "?"

            JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

                produtos = produtos + `products=${x.nome} ${x.unidade}&`

            })

            axios.get(`http://localhost:8080/createlink/${produtos}`).then(response => {

                window.location.replace(response.data.link)

            })

        } else {

            axios.get(`http://localhost:8080/getcupom/?cupom=${myRefs.current.value}`).then(response => {

                if (response.data.sucess === false) {

                    setCupom(true)

                } else {

                    let produtos = "?"

                    JSON.parse(localStorage.getItem('@carrinho')).forEach(x => {

                        produtos = produtos + `products=${x.nome} ${x.unidade}&`

                    })

                    axios.get(`http://localhost:8080/createlink/${produtos}cupom=${myRefs.current.value}`).then(response => {

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

        <div className="carrinho">

            <img className="onda-one" src={Onda} alt='' />
            <img className="onda-two" src={Onda} alt='' />

            <div className="carrinho-box">

                <img src={Trolley} alt='' />
                <h1>Seu carrinho de compras</h1>

                <ul>

                    {JSON.parse(localStorage.getItem('@carrinho'))?.map((todo, index) => (

                        <li key={todo.nome}>

                            <button onClick={() => removeUni(todo.nome, todo.valor)}>

                                <h1>-</h1>

                            </button>

                            <h1 className="value">{todo.unidade}</h1>

                            <button onClick={() => addUni(todo.nome, todo.valor)}>

                                <h1>+</h1>

                            </button>

                            <h1 className="name">{todo.nome}</h1>

                        </li>

                    ))}

                    {nulo ?

                        <h5 style={{ padding: '20px' }}>Não possui itens em seu carrinho.</h5>

                        : null}

                </ul>

                <div className="cupon-div">

                    <TextField id="outlined-basic" inputRef={myRefs} label="Cupom" variant="outlined" />

                </div>

                <h1 className="total-value">Valor total: {valorBuy.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</h1>
                <button onClick={mercadopago} className='button-metodo'>

                    <img src={MercadoPago} alt='' />
                    <h1>MercadoPago</h1>

                </button>

                {cupom ?

                    <Alert className="alert-cupom" variant="outlined" severity="error">
                        <h1>Você não inseriu um cúpom válido.</h1>
                    </Alert>

                    : null}

            </div>

        </div>

    )

}