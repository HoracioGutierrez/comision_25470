import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Contador from "./Contador"
import Loader from "./Loader"

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [seleccionado, setSeleccionado] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setTimeout(()=>{
      const pedido = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
      pedido
        .then((respuesta) => {
          return respuesta.json()
        })
        .then((pokemon) => {
          setItem(pokemon)
        })
        .catch(() => {
          toast.error("Hubo un error!")
        })
        .finally(() => {
          setLoading(false)
        })
    },3000)

  })

  const onAdd = (unidadSeleccionada) => {
    console.log("On Add desde el ItemDetailContainer")
    if(unidadSeleccionada != undefined){
      setSeleccionado(unidadSeleccionada)
    }
  }

  if(loading){
    return <Loader/>
  }else{
    return (
      <div id="detalle">
        <h2>
          {item.name}
          <img src="/pokeball.png" alt="" />
        </h2>
        <img src={item.sprites?.other["official-artwork"].front_default} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rerum porro quia voluptates voluptatem. Beatae, commodi. Ullam qui quis iure, hic quibusdam eaque sequi aperiam sunt harum reprehenderit nostrum repudiandae quia non blanditiis ipsa porro voluptatum consectetur quos asperiores quisquam omnis amet maiores. Obcaecati, cupiditate, quia, laboriosam voluptate labore excepturi voluptatem explicabo et dolorum asperiores iure fugiat placeat culpa soluta ipsam praesentium? Vel, quas nam provident fuga, non tempora odit quis consequatur incidunt repellat corporis reprehenderit quo sapiente. Excepturi sapiente eligendi illum hic cumque. Facilis molestias corrupti a, quasi nesciunt qui amet maiores, unde inventore voluptatem tenetur reiciendis aut dicta.</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magnam maiores ipsum mollitia nulla, fuga provident doloribus quis quas. Maxime ipsam accusantium a, ex pariatur fuga, saepe nostrum dicta dignissimos in libero, ut corporis accusamus aliquam atque! Id ducimus, cumque voluptas consequatur, earum facilis dolor numquam nihil eaque, ea saepe.
        </p>
        <Contador initial={1} stock={5} onAdd={onAdd}/>
        <p>{seleccionado?"ya se selecciono algo!":"No se eligion ninguna cantidad"}</p>
      </div>
    )
  }
}

export default ItemDetailContainer