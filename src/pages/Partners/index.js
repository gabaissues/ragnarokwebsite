
import Logo from '../../assets/logo.svg'

import NavBar from '../../components/navbar/index.js'
import Onda from '../../components/onda/index.js'
import NavBarMobile from '../../components/navbar_mobile/index.js'

import './index.css'

export default function App() {

    return (

        <div className="partners">

            <NavBarMobile />
            <NavBar />

            <div className="partners-header">

                <img src={Logo} alt='' />
                <h1 className="title">The Ragnarok</h1>
                <h1 className="subtitle">Parceiros</h1>

            </div>

            <div className="partners-content">

                <div className="partners-box">

                    <img alt='' src='https://images-ext-1.discordapp.net/external/yM635l0gfY-3qtyHFLNPFduOB-ZACHzEJt9ivWxNXaI/%3Fsize%3D2048/https/cdn.discordapp.com/icons/803473185910947930/08916e46fd5dbb6d7b6137d652b819ab.png' />
                    <h1>Nome do servidor</h1>

                </div>
                <div className="partners-box">

                    <img alt='' src='https://images-ext-1.discordapp.net/external/yM635l0gfY-3qtyHFLNPFduOB-ZACHzEJt9ivWxNXaI/%3Fsize%3D2048/https/cdn.discordapp.com/icons/803473185910947930/08916e46fd5dbb6d7b6137d652b819ab.png' />
                    <h1>Nome do servidor</h1>

                </div>
                <div className="partners-box">

                    <img alt='' src='https://images-ext-1.discordapp.net/external/yM635l0gfY-3qtyHFLNPFduOB-ZACHzEJt9ivWxNXaI/%3Fsize%3D2048/https/cdn.discordapp.com/icons/803473185910947930/08916e46fd5dbb6d7b6137d652b819ab.png' />
                    <h1>Nome do servidor</h1>

                </div>
                <div className="partners-box">

                    <img alt='' src='https://images-ext-1.discordapp.net/external/yM635l0gfY-3qtyHFLNPFduOB-ZACHzEJt9ivWxNXaI/%3Fsize%3D2048/https/cdn.discordapp.com/icons/803473185910947930/08916e46fd5dbb6d7b6137d652b819ab.png' />
                    <h1>Nome do servidor</h1>

                </div>
                <div className="partners-box">

                    <img alt='' src='https://images-ext-1.discordapp.net/external/yM635l0gfY-3qtyHFLNPFduOB-ZACHzEJt9ivWxNXaI/%3Fsize%3D2048/https/cdn.discordapp.com/icons/803473185910947930/08916e46fd5dbb6d7b6137d652b819ab.png' />
                    <h1>Nome do servidor</h1>

                </div>
                

            </div>

            <Onda />

        </div>

    )

}