import React from 'react'
import firebase from 'firebase'

import Logo from '../../assets/logo.svg'
import Arrow from '../../assets/arrow.svg'
import CartWhite from '../../assets/cartwhite.svg'

import NavBar from '../../components/navbar/index.js'
import Onda from '../../components/onda/index.js'
import Footer from '../../components/footer/index.js'
import Trolley from '../../components/trolley/index.js'
import NavBarMobile from '../../components/navbar_mobile/index.js'

import './index.css'

export default function App() {

    const [activate, activateChange] = React.useState(true)
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

    const functionChange = () => {

        activateChange(false)

        setTimeout(() => {

            activateChange(true)

        }, 1000)

    }

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

        <div className='products'>

            <NavBarMobile />
            <NavBar />
            <Trolley />

            <header>

                <img alt='' src={Logo} />
                <h1>The Ragnarok</h1>
                <p>Lorem ipsum dolor sit amet, nean. etus lorem mi sed semper. Integer ornare duis amet duis lacus eu.</p>

                <img alt='' style={{ width: 50, height: 50 }} src={Arrow} />

                <Onda />

            </header>

            <div className='products-conteudo'>
                <div className="products-items">

                    {products?.map((a, index) => (

                        <div key={a.id} className={`${activate ? 'products-box' : 'products-box products-animate'}`}>

                            <img alt='' src={a.image} />
                            <h1>{a.name}</h1>

                            <h1>{Number(a.value).toLocaleString('pt-br', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</h1>
                            <ul>

                                <li>{a.descriptionOne}</li>
                                <li>{a.descriptionTwo}</li>
                                <li>{a.descriptionThree}</li>
                                <li>{a.descriptionFour}</li>

                            </ul>

                            <button onClick={() => { saveProduct(a.name, Number(a.value)); functionChange(); }}>

                                <img alt='' src={CartWhite} />
                                <h1>Comprar</h1>

                            </button>

                        </div>

                    ))}

                </div>

            </div>

            <Footer />

        </div>

    )

}