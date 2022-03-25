import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./Firebase"
import ItemList from "./ItemList"
import {getDocs , collection} from "firebase/firestore"

//getDocs - getDoc - getCollection - addDoc - updateDoc - deleteDoc

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    
    
    useEffect(() => {

        /* const pokemonCollection = collection(db,"pokemones")
        const documentos = getDocs(pokemonCollection)

        documentos
            .then((respuesta)=>{
                //en fetch era asi
                //console.log(respuesta.json())

                const aux = []

                respuesta.forEach((documento)=>{
                     console.log(documento.data())
                    console.log(documento.id) 
                    const pokemon = {
                        id: documento.id,
                        ...documento.data()
                    }

                    //console.log(pokemon)
                    aux.push(pokemon)
                })

                console.log(aux)
                setProductos(aux)

            })
            .catch(()=>{
                toast.error("Hubo un error!")
            })
 */

        
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
                if(id){
                    
                }else{
                    setProductos(pokemones)
                }
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