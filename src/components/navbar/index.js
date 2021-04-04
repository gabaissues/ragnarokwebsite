import React, { Component } from 'react'
import { Container, NavBarDesktop, Image, Lista, Item, Text, Content, NavBarMobile, Box, Barra } from './styles'

import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";


import House from '../../assets/navbar/house.svg'
import Card from '../../assets/navbar/card.svg'
import Partners from '../../assets/navbar/partners.svg'
import Feedback from '../../assets/navbar/feedback.svg'

export default class navbar extends Component {

  constructor(props) {

    super(props)

    this.state = {
      animation: true,
      hidden: true
    }

  }

  navigation = (page) => {

    if(page === 'initial') {

      window.location.replace('https://theragnarok.com.br/')

    } else {

      window.location.replace(`https://theragnarok.com.br/${page}`)

    }

  }

  change = () => {

    if(this.state.hidden === false) {

      this.setState({ animation: true })

      setTimeout(() => {

        this.setState({ hidden: true })
  
      }, 900)

    } else {

      this.setState({ animation: false })
      this.setState({ hidden: false })

    }

  }

  render() {
    return (
      <Container>

        <NavBarDesktop>

          <Image onClick={() => { this.navigation('initial') }} src={House} />
          <Image onClick={() => { this.navigation('produtos') }} src={Card} />
          <Image onClick={() => { this.navigation('parceiros') }} src={Partners} />
          <Image onClick={() => { this.navigation('avaliações') }} src={Feedback} />

        </NavBarDesktop>
        <NavBarMobile>

          <Box onClick={() => this.change()}>

            <Barra></Barra>
            <Barra></Barra>
            <Barra></Barra>

          </Box>
          <Content animation={this.state.animation} hidden={this.state.hidden}>

              <Lista>

                <Item onClick={() => { this.navigation('initial') }}><Text>Início</Text></Item>
                <Item onClick={() => { this.navigation('produtos') }}><Text>Produtos</Text></Item>
                <Item onClick={() => { this.navigation('parceiros') }}><Text>Avaliações</Text></Item>
                <Item onClick={() => { this.navigation('avaliações') }}><Text>Parceiros</Text></Item>

              </Lista>

              
          </Content>

        </NavBarMobile>

      </Container>
    )
  }
}
