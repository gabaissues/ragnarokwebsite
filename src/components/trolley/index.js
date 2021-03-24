import React from 'react'

import Trolley from '../../assets/cart.svg'
import TrolleyWhite from '../../assets/cartwhite.svg'
import Close from '../../assets/close.svg'

import './index.css'
import { Link } from 'react-router-dom'

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

        <div className="carrinho">

            <div onClick={() => { functionChange(); }} style={{ display: `${activate ? 'flex' : 'none'}` }} className={`${activate ? 'trolley trolley-animation-down' : 'trolley trolley-animation-up'}`} >

                <img src={Trolley} alt='' />

            </div>

            <div className={`${activate ? 'trolley-open trolley-animation-up' : 'trolley-open trolley-animation-down'}`} style={{ display: `${activate ? 'none' : 'flex'}` }} >

                <img onClick={functionChange} className="close-trolley" src={Close} alt='' />
                <img className="logo-trolley" src={Trolley} alt='' />

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

                </ul>

                <button style={{ margin: '20px' }} className="trolley-button-buy">

                    <img src={TrolleyWhite} alt='' />
                    <Link to="/carrinho">Efetuar compra</Link>

                </button>

            </div>

        </div>

    )

}