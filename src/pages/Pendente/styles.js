import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #FA7D23;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media(max-width: 800px) {

        position: relative;
        display: flex;
        flex-direction: column;
        padding-bottom: 10%;

    }

`

export const Grid = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media(max-width: 800px) {

        width: 100%;

    }

`

export const Image = styled.img`
    width: 500px;

    @media(max-width: 800px) {

        width: 75%;

    }

`

export const Text = styled.h1`
    color: white;
    font-family: 'Nunito';
    font-size: 86px;

    @media(max-width: 800px) {

        font-size: 36px;
        margin: 2.5%;

    }

`
export const Paragraph = styled.p`
    font-size: 24px;
    text-align: center;
    width: 70%;
    font-family: 'Nunito Bold';
    color: white;

    @media(max-width: 800px) {

        font-size: 16px;

    }

`
export const Button = styled.a`
    margin-top: 20px;
    text-decoration: none;
    padding: 20px 80px;
    border: 3px solid white;
    font-size: 24px;
    border-radius: 12px;
    color: white;

    @media(max-width: 800px) {

        padding: 10px 40px;
        font-size: 20px;
        font-family: 'Nunito';

    }

`