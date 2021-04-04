import styled from 'styled-components'

export const Container = styled.div``
export const Header = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    flex-direction: column;
    background-color: #FA7D23;
    padding-top: 10%;
    
    @media(max-width: 800px) {

        img {
            width: 350px;
        }

        h1 {
            font-size: 36px;
            padding-top: 10px;
        }

    }

`

export const Feedback = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 40px;
    margin-bottom: 2.5%;
    justify-content: center;
    margin-top: 2.5%;

`

export const Grid = styled.div`
    background-color: white;
    width: 80%;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 60px;
    align-items: center;
    border-radius: 15px;
    justify-content: center;
    flex-direction: column;

    img {
        width: 150px;
        border-radius: 50%;
    }

    p {
        font-size: 26px;
    }

    h1 {
        margin-top: 20px;
        font-size: 46px;
        color: black;
    }

    @media(max-width: 800px) {

        width: 100%;

        p {
            font-size: 16px;
        }

        h1 {
            font-size: 24px;
            text-align: center;
        }

    }

`

export const Onda = styled.img`
    margin-top: 10%;
    margin-bottom: -1%;
    width: 100%;

    @media(max-width: 800px) {

        width: 100% !important;

    }

`

export const Image = styled.img``
export const Text = styled.h1`
    color: white;
    font-size: ${props => props.subtitle ? '36px' : '86px' };

`

export const Paragraph = styled.p`
    font-family: 'Nunito Bold';
    text-align: center;
    padding: 20px 2px;
`
export const Button = styled.button`
    outline: none;
    border: 2px solid black;
    background: transparent;
    text-align: center;
    padding: 10px 40px;
    margin-bottom: 25px;
    border-radius: 5px;

    h1 {
        font-size: 24px;
        margin-top: 0px;
    }
`