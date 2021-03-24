import React from 'react'

export default function App() {

    //localStorage.setItem('@carrinho', JSON.stringify([{batata:'AwNN Foi'}]))
    console.log(JSON.parse(localStorage.getItem('@carrinho')))

    console.log((Array.isArray(JSON.parse(localStorage.getItem('@carrinho')))))

    return(

        <div className="test">

            {JSON.parse(localStorage.getItem('@carrinho'))?.map((todo, index) => (
            
                <h1 key={todo.batata}>{todo.batata}</h1> 

            ))}

        </div>

    )

}