import styled from 'styled-components'

/* Divs */

export const Grid = styled.div`
    margin: 0px 2.5%;
`

export const Container = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media(max-width: 800px) {

        position: relative;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-bottom: 25%;

    }

    background-color: #FE8A37;
`

/* Textos */

export const Text = styled.h1`
    color: white;
    font-size: 82px;
    padding-bottom: 10%;

    @media(max-width: 800px) {

        font-size: 36px;
        text-align: center;
        padding-bottom: 3%;
        padding-top: 0%;

    }

`

export const Paragraph = styled.p`
    color: white;
    width: 750px;
    font-size: 32px;
    font-weight: 900;

    @media(max-width: 800px) {

        font-family: 'Nunito Bold';
        font-size: 16px;
        width: 100%;
        text-align: center;

    }

`

/* Imagens */

export const Image = styled.img`
    width: 750px;

    @media(max-width: 800px) {

        display: block;
        margin: 0 auto;
        width: 75%;
        

    }

`

/* Botões */

export const Button = styled.button`
    padding: 30px 180px;
    cursor: pointer;
    background: transparent;
    border: 6px solid white;
    border-radius: 25px;
    margin-top: 5%;
    display: flex;
    align-items: center;
    outline: none;
    justify-content: center;

    @media(max-width: 800px) {

        display: block;
        margin: 20px auto;

        border: 2px solid white;
        padding: 20px 80px;
        display: flex;
        border-radius: 12px;

    }

    a {
        font-size: 40px;

        @media(max-width: 800px) {

            font-size: 16px;

        }

    }

`

export const Link = styled.a`
    text-decoration: none;
    font-family: 'Nunito';
    color: white;
`