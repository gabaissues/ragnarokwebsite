import styled, { keyframes } from 'styled-components'

const AnimeShow = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px)
    }
    to {
        opactiy: 1;
        transform: translateY(0)
    }
`

export const Container = styled.div`
    position: fixed;
    bottom: 2%;
    padding: 20px;
    right: 2%;
`
export const TrolleyOff = styled.div`
    background-color: white;
    border-radius: 50%;
    display: ${props => props.hidden ? 'flex' : 'none'};
    animation: ${AnimeShow} 1s ease;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    padding: 30px;
    cursor: pointer;
`
export const TrolleyOn = styled.div`

    display: ${props => props.hidden ? 'none' : 'flex'};
    align-items: center;
    animation: ${AnimeShow} 1s ease;
    justify-content: center;
    flex-direction: column;
    transition: .2s ease;
    background-color: white;
    border-radius: 15px;
    padding: 60px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);

    @media(max-width: 800px) {

        padding: 20px;

    }

`

export const Image = styled.img`
    width: 50px;
`

export const Grid = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FA7D23;
    
    h1 {
        font-family: 'Nunito';
        margin-left: 15px;
    }

    margin-bottom: 25%;

`

export const Close = styled.h1`
    font-size: 30px;
    color: #FA7D23;

`
export const Lista = styled.ul`
    margin-bottom: 5%;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;

    button {

        background: transparent;
        border: none;
        padding: 10px;
        outline: none;

        h1 {
            color: black;
            
            @media(max-width: 800px) {

            font-size: 16px;

            }
            
        }

    }

`
export const Button = styled.button`
    background-color: #FA7D23;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 25px;
    border-radius: 12px;

    a {
        color: white;
    }

    img {
        width: 25px;
        margin-right: 15px;
    }

`

export const Link = styled.a`
    text-decoration: none;
    font-size: 30px;
    cursor: pointer;

    @media(max-width: 800px) {

        font-size: 20px;

    }

`

export const Text = styled.h1`
    font-family: 'Nunito Bold';
    padding: 5px;
    background-color: ${props => props.value ? '#fafafa' : ''};

    @media(max-width: 800px) {

        font-size: 20px;
        padding: 2px;

    }

`