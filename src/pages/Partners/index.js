import React from 'react'
import firebase from 'firebase'

import NavBar from '../../components/navbar/index.js'

import OndaImage from '../../assets/onda.svg'
import Logo from '../../assets/static/logo.svg'

import { Container, Image, Text, Header, Partners, Grid, Onda } from './styles.js'

export default function App() {

    const database = firebase.database()
    let partners = []

    React.useEffect(async () => {

        async function getPartners() {

            let ref = await database.ref(`Parceiros`).once('value')
            ref.forEach(x => {

                partners.push({ name: x.val().name, image: x.val().image })

            })

        }

        getPartners()
        
    })

    return (

        <Container>

            <Header>

                <Image src={Logo} />
                <Text>The Ragnarok</Text>
                <Text subtitle>Parceiros</Text>

                <Onda src={OndaImage} />

            </Header>
            <Partners>

                {partners.map((a) => (

                    <Grid key={a.name}>

                        <Image src={a.image} />
                        <Text>{a.name}</Text>

                    </Grid>

                ))}

            </Partners>

            <NavBar />

        </Container>

    )

}