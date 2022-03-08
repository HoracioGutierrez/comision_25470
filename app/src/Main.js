import { useState, useEffect } from "react"
import Contador from "./Contador";


let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]

const Main = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    //useEffect(function [,array])

    //Este efecto se va a ejecutar despues del montado el componente y despues de cada renderizado
    useEffect(()=>{

        //Aca estoy simulando que hago un pedido a una API
        //Promise : Son objetos que prometen una funcionalidad que dura en el tiempo pero te "avisan" con su metodo .then() cuando termino todo bien o con su metodo .catch() cuando termino todo mal
        //DRY : Don't Repeat Yourself
        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            },3000)
        })

        //console.log(promesa)

        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(productosIniciales)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            //setError("Hubo un error al cargar los datos, vuelva a intentarlo por favor... o no")
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })

    //console.log(productos)

    return (
        <main className="container">
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
            <img src="/imagenes/logo192.png" />
            <p>La cantidad de productos es : 0</p>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ul>
                {productos.map((producto,indice)=>{
                    return <li>{producto.nombre}</li>
                })}
            </ul>
            <Contador />
        </main>
    );
}

export default Main;