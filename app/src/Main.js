import {useState} from "react"


const Main = (props) => {
    
    
    /* const resultado = useState() //Siempre retorna un array con dos elementos
    const estado = resultado[0]
    const setEstado = resultado[1] */

    const [contador, setContador] = useState(props.initial)

    /* let contador = 0
    contador = "nuevoValor" */

    //
    /* let contador = 0
    let darkMode = false
    let logged = false
    let carrito = []
    let productos = []
    let nombre = "" */
    /* 
    const btn = document.getElementById("btn")
    btn.addEventListener("click", () => {
        contador++
        const p = document.getElementById("p")
        p.innerHTML = `Hola Mundo ${contador}`
    }) 
    */

    const handleClick = () => {
       /*  contador++
        console.log(contador) */
        //contador = contador + 1
        //contador++
        //setContador(contador++)
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
    }

    return (
        <main className="container">
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
            <p>Mi contador actual : {contador}</p>
            <button onClick={handleClick}>aumentar</button>
            <button onClick={resetear}>resetear</button>
            <button onClick={restar}>restar</button>
        </main>
    );
}

export default Main;