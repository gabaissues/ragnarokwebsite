import React from 'react'
import firebase from 'firebase'

import NavBar from '../../components/navbar/index.js'
import Footer from '../../components/footer/index.js'

import Logo from '../../assets/static/logo.svg'
import OndaImage from '../../assets/onda.svg'
import { Container, Image, Text, Onda, Header, Feedback, Grid, Paragraph, Button } from './styles.js'

export default function App() {

    let [user, setUser] = React.useState('')
    let [feedback, setFeedback] = React.useState('')

    const database = firebase.database()
    let feedbacks = []
    
    React.useEffect(async () => {

        async function getFeedbacks() {

            if(user) {

                return;
    
            } else {
    
                setUser('Gabriel, gb.#0001')
                setFeedback('O site em si ficou incrivel, a loja então, perfeita. Ragnarok sempre disponibilizando o melhor para todos.')            
    
                let ref = await database.ref(`Avaliações`).once('value')
                ref.forEach(x => {
    
                    feedbacks.push({ user: x.val().name, feedback: x.val().feedback })
    
                })

            }

        }

        getFeedbacks()
        
    }, []);

    const VerMais = () => {

        for (let i in feedbacks) {

            setUser(feedbacks[i].user)
            setFeedback(feedbacks[i].feedback)

        }

    }

    return (

        <Container>

            <Header>

                <Image src={Logo} />
                <Text>The Ragnarok</Text>

                <Text subtitle>Avaliações</Text>

                <Onda src={OndaImage} />

            </Header>
            <Feedback>

                <Grid>

                    <Text>{user}</Text>
                    <Paragraph>{feedback}</Paragraph>

                    <Button onClick={VerMais}>

                        <Text>Ver mais</Text>

                    </Button>

                </Grid>

            </Feedback>
            <Footer />
            <NavBar />

        </Container>

    )

}