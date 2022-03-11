import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    
    useEffect(() => {
        
        const pedido = fetch("https://pokeapi.co/api/v2/pokemon")

        pedido
            .then((respuestaDeLaApi) => {
                //setProductos(respuestaDeLaApi)
                return respuestaDeLaApi.json()
            })
            .then((datos) => {
                const resultado = datos.results.map((dato)=>{
                    return fetch(dato.url)
                })

                return Promise.all(resultado)
            })
            .then((datos)=>{
                const resultado = datos.map((response)=>{
                    return response.json()
                })

                return Promise.all(resultado)
            })
            .then((pokemones)=>{
                setProductos(pokemones)
            })
            .catch((errorDeLaApi) => {
                toast.error("Error al cargar los productos")
            })
            .finally(() => {
                setLoading(false)
            })

    },[id])

    return (
        <>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer