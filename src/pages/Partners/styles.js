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
        }

    }

`
export const Partners = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 40px;
`
export const Grid = styled.div`
    border-radius: 18px;
    background-color: white;
    width: 350px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 150px;
        border-radius: 50%;
    }

    h1 {
        font-size: 24px;
        color: black;
        margin-bottom: 35px;
    }
`

export const Onda = styled.img`
    margin-top: 10%;
    margin-bottom: -1%;
    width: 100%;

    @media(max-width: 800px) {

        display: flex;
        flex: 1;
        width: 100% !important;

    }

`

export const Image = styled.img``
export const Text = styled.h1`
    color: white;
    font-size: ${props => props.subtitle ? '36px' : '86px' };
    padding-top: 10px;
`