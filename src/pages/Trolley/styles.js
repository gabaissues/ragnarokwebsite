import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #FA7D23;
`
export const Alerta = styled.div`
    margin-top: 40px;
    border-radius: 2px;
    border: 2px solid red;

    h1 {
        font-size: 16px;
        font-family: 'Nunito Bold';
        color: red;

        @media(max-width: 800px) {

            text-align: center;

        }

    }

`
export const Grid = styled.div`
    display: flex;
    background-color: white;
    padding: 60px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Image = styled.img`
    width: 75px;
    margin: 20px;
`

export const Button = styled.button`
    display: flex;
    border: none;
    outline: none;
    align-items: center;
    justify-content: center;
    background-color: #FA7D23;
    color: white;
    border-radius: 12px;

    img {
        width: 25px;
    }

    h1 {
        margin-right: 30px;
    }

`
export const Text = styled.h1`
    margin: 10px;

    @media(max-width: 800px) {

        font-size: 24px;
        text-align: center;

    }

`

export const Lista = styled.ul``

export const Input = styled.input`
    padding: 10px 20px;
    margin: 20px;
    border: 1px solid #111;
    color: #111;
    outline: none;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;

    h1 {
        font-family: 'Nunito Bold';
        font-size: 20px;
        margin: 5px;
        padding: 10px;
        color: black;
        text-align: left;
    }

    button {
        display: flex;
        border: none;
        outline: none;
        background: transparent;
        align-items: center;
        justify-content: center;
    }

`

export const Cupom = styled.div``