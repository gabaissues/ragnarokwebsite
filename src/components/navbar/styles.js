import styled, { keyframes } from 'styled-components'

const show = keyframes`
    from {
        transform: translateY(-1200px)
    }
    to {
        transform: translateY(0)
    }
`

const hidden = keyframes`
    from {
        transform: translateY(0)
    }
    to {
        transform: translateY(-1200px)
    }
`

export const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0%;
    z-index: 999;
    left: 0%;
    transition: .5s ease;
`

export const NavBarDesktop = styled.div`
    background-color: white;
    padding: 40px;
    height: 100%;
    border-right: 10px solid #fafafa;
    display: flex;
    position: fixed;
    flex-direction: column;

    @media(max-width: 800px) {

    display: none;

    }

`

export const Image = styled.img`
    width: 75px;
    margin-left: 15%;
    margin-top: 50px;
    padding-right: 15px;
`

export const NavBarMobile = styled.div``

export const Box = styled.div`
    margin: 20px;
`

export const Barra = styled.div`
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px;
    border: 1px solid #ccc;
`

export const Content = styled.div`
    display: ${props => props.hidden ? 'none' : 'flex'};
    background-color: white;
    animation: ${props => props.animation ? hidden : show} 1s ease;
    width: 100%;
    position: fixed;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 50px;
`


export const Lista = styled.ul`
    margin-left: 26px;
`
export const Item = styled.li`
    color: #FA7D23;
    cursor: pointer;
    margin: 15px;
`
export const Text = styled.h1`
    cursor: pointer;
    text-align: center;
    font-family: 'Nunito Bold'
`