import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <article>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt="" />
        <p>Precio : ${producto.precio}</p>
        <button>
          <Link to={`/pokemon/${producto.id}`}>ver detalle</Link>
        </button>
    </article>
  )
}

export default Item