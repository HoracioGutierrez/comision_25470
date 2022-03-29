import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "./Firebase"
import ItemList from "./ItemList"
import { getDocs, collection , query , where } from "firebase/firestore"

//getDocs - getDoc - collection - addDoc - updateDoc

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        
        if(!id){

            const pokemonCollection = collection(db, "pokemones")
            const documentos = getDocs(pokemonCollection)
    
            documentos
            .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch(error => toast.error("Error al obtener los productos"))
            .finally(() => setLoading(false))

        } else {

            const pokemonCollection = collection(db, "pokemones")
            const miFiltro = query(pokemonCollection,where("categoria","==",id))
            const documentos = getDocs(miFiltro)

            documentos
            .then(respuesta => setProductos(respuesta.docs.map(doc=>doc.data())))
            .catch(error => toast.error("Error al obtener los productos"))
            .finally(() => setLoading(false))
            
        }


    }, [id])


    return (
        <>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer