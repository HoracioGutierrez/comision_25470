import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ItemList from "./ItemList"


let productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
        categoria : 1
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
        categoria : 2
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
        categoria : 3
    }
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    
    useEffect(() => {
        
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                console.log(id)
                //if(id){
                res(productosIniciales)
                //rej(productosIniciales)
            }, 3000)
        })

        promesa
            .then((respuestaDeLaApi) => {
                setProductos(productosIniciales)
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