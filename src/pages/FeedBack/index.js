import Logo from '../../assets/logo.svg'

import NavBar from '../../components/navbar/index.js'
import Onda from '../../components/onda/index.js'
import NavBarMobile from '../../components/navbar_mobile/index.js'
import Button from '@material-ui/core/Button';

import './index.css'

export default function App() {

    return (

        <div className="feedback">

            <NavBarMobile />
            <NavBar />

            <div className="feedback-header">

                <img src={Logo} alt='' />
                <h1 className="title">The Ragnarok</h1>
                <h1 className="subtitle">Avaliações</h1>

            </div>
            <div className="feedback-content">

                <div className="feedback-box">

                    <img src='https://images-ext-2.discordapp.net/external/H5GLs1gK_dLJDp5dOv_LlX_zM6pEcMlASVlHe-OPI8g/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/414984935489667072/a_41ea7490ae9fdfc2214cddc4fbacc76c.gif' alt='' />

                    <h1>(Nome do usuário)</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic</p>

                    <Button color='warning' variant="contained">Anterior</Button>
                    <Button color='warning' variant="contained">Proxima</Button>
                    
                </div>

            </div>

            <Onda />

        </div>

    )

}