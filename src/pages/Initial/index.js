
import NavBar from '../../components/navbar/index.js'
import NavBarMobile from '../../components/navbar_mobile/index.js'
import './index.css'

import Logo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export default function App() {

    return(

        <div className="initial">

            <NavBar />
            <NavBarMobile />
            <img alt='' src={Logo}/>

		    <h1>TheRagnarok</h1>
		    <p>Lorem ipsum dolor sit amet, nean. etus lorem mi sed semper. Integer ornare duis amet duis lacus eu.</p>
		    <button><Link to='/produtos'>Produtos</Link></button>

        </div>

    )

}