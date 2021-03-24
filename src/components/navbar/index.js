
import './index.css'

import House from '../../assets/house.svg'
import MoneyBag from '../../assets/moneybag.svg'
import User from '../../assets/user.svg'
import Check from '../../assets/check.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Discord from '../../assets/discord.svg'

import { useHistory } from "react-router-dom";  

export default function NavBar() {

    let history = useHistory()

    const Initial = () => {

        history.push('/')

    }

    const Products = () => {

        history.push('/produtos')

    }

    const Partners = () => {

        history.push('/parceiros')

    }

    const FeedBack = () => {

        history.push('/avaliações')

    }

    return(

        <nav className="navbar_desktop">

            <img alt='' onClick={Initial} src={House} />
            <img alt='' onClick={Products} src={MoneyBag} />
            <img alt='' onClick={Partners} src={User} />
            <img alt='' onClick={FeedBack}  src={Check} />

            <div className="redes">

                <img alt=''  src={Instagram} />
                <img alt=''  src={Twitter} />
                <img alt=''src={Discord} />

            </div>

        </nav>

    )

}