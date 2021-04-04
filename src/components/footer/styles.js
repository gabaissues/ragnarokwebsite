import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #FA7D23;
    display: flex;
    flex: 1;
    flex-direction: column;
    color: white;
    padding: 20px;
    align-items: center;
`
export const Image = styled.img`

    @media(max-width: 800px) {

        width: 75%;

    }

`
export const Text = styled.h1`

    @media(max-width: 800px) {

        font-size: 24px;
        text-align: center;
        padding: 20px;

    }

`

export const Link = styled.a`
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    padding: 20px;
`