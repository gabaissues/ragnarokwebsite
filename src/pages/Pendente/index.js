import Logo from '../../assets/logo.svg'
import Onda from '../../assets/onda2.svg'

import './index.css'

import { Link } from 'react-router-dom'

export default function App() {

    //http://localhost:3000/compras/pendente/id/email/valor/nome

    return (

        <div className="pendente">

            <img src={Logo} alt='' />
            <h1>RagnarokStore</h1>
            <p>Obrigado pela sua compra! Nós da RagnarokStore temos o prazer de ter você como nosso cliente. Já estamos prossesando sua compra, após o pagamento ser concluido na forma de pagamento escolhida, e aprovado, o produto será entregado dentro de 3 dias úteis.</p>

            <img className="onda-one" src={Onda} alt='' />
            <img className="onda-two" src={Onda} alt='' />

            <button><Link to="/">Início</Link></button>

        </div>

    )

}