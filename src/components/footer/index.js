
import Formas from '../../assets/formas.svg'
import { Container, Text, Image, Link } from './styles'

export default function NavBar() {

    return (

        <Container>

            <Text>The Ragnarok © Todos os direitos reservados.</Text>
            <Image src={Formas} />

            <Link>Developed By gb.#0001</Link>

        </Container>

    )

}