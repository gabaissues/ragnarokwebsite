import styled from 'styled-components'

const color = '#FA7D23'

export const Container = styled.div`
    margin: 0;
    padding: 0;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    padding-top: 10%;
    background-color: ${color};

    h1, p {

        color: white;

    }

    h1 {
        padding-top: 10px;
        font-size: 86px;

        @media(max-width: 800px) {

            font-size: 36px;

        }

    }

    p {
        padding-top: 10px;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        width: 30%;

        @media(max-width: 800px) {

            width: 100%;
            font-size: 16px;
            font-family: 'Nunito Bold';
            padding: 20px;

        }

    }

`
export const Products = styled.div`
    margin: 5% 15%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 40px;

    @media(max-width: 800px) {

        margin: 0%;

    }

`

export const Box = styled.div`
    padding: 40px;
    background-color: white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 5%;
    justify-content: center;
    flex-direction: column;
    width: 450px;

    margin-right: 5%;
    border-radius: 12px;

    @media(max-width: 800px) {

        padding: 20px;
        width: 100%;
        margin-top: 20%;

    }

    h1 {
        font-size: 26px;
        color: black;
    }

    p {
        font-size: 36px;
        color: black;
        font-weight: 900;
    }

    img {
        width: 150px;
    }

`
export const Image = styled.img`
    width: 350px;
    display: block;
    margin: 0 auto;
`
export const Lista = styled.ul`
    list-style: none;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
`
export const Item = styled.li`
    font-size: 20px;
    padding-top: 10px;
    font-family: 'Nunito Bold';
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    background-color: ${color};
    outline: none;
    padding: 10px 20px;
    border-radius: 12px;
    border: none;

    h1 {
        color: white;
        margin-right: 20px;
    }

    img {
        width: 25px;
        margin: 0px 20px;
    }

`

export const Text = styled.h1`
    color: ${color};
    font-family: 'Nunito';

    font-size: ${props => props.division ? '56px' : '24px'};
    margin-top: ${props => props.division ? '5%' : ''};
    text-align: ${props => props.division ? 'center' : ''};
`
export const Paragraph = styled.p`
    font-size: 16px;
    color: ${color};
    font-family: 'Nunito';
`

export const Onda = styled.img`
    position: relative;
    margin-top: 10%;
    margin-bottom: -1%;
    margin-left: 0%;
    width: 100%;
`