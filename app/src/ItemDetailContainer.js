import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Contador from "./Contador"
import { db } from "./Firebase"
import Loader from "./Loader"
import { contexto } from "./MiProvider"
import { getDoc , collection , doc , where , query , getDocs } from "firebase/firestore"



const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [seleccionado, setSeleccionado] = useState(false)
  const { id } = useParams()
  const {agregarProducto} = useContext(contexto)
  const navigate = useNavigate()

  useEffect(() => {


    const pokemonCollection = collection(db, "pokemones")
    //const documento = getDoc(doc(pokemonCollection, id))
    //document.then(respuesta => setItem(respuesta.data()))
    const miFiltro = query(pokemonCollection,where("id","==",Number(id)))
    const documentos = getDocs(miFiltro)

    documentos
    .then(respuesta => setItem(respuesta.docs.map(doc=>doc.data())[0]))
    .catch(error => toast.error("Error al obtener los productos"))
    .finally(() => setLoading(false))

   
  },[id])

  const onAdd = (unidadSeleccionada) => {
    console.log("On Add desde el ItemDetailContainer")
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log("Click del Link/Boton")
    agregarProducto(item,seleccionado)
    navigate("/carrito")
  }

  if (loading) {
    return <Loader />
  } else {
    return (
      <div id="detalle">
        <h2>
          {item.nombre}
          <img src="/pokeball.png" alt="" />
        </h2>
        <img src={item.imagen} alt="" />
        <p>{item.descripcion}</p>
        <p>Altura : {50} in</p>
        <p>Peso : {200} lb</p>
        <p>Precio : ${item.precio}</p>
        <Contador initial={1} stock={5} onAdd={onAdd} />
        <p>{seleccionado ? "ya se selecciono algo!" : "No se eligion ninguna cantidad"}</p>
        {seleccionado ? <Link onClick={handleClick} to="/carrito">carrito</Link> : null}
      </div>
    )
  }
}

export default ItemDetailContainer