import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <article>
        <h2>{producto.name}</h2>
        <img src={producto.sprites.other.home.front_default} alt="" />
        <p>Altura : {producto.height} in</p>
        <p>Peso : {producto.weight} lb</p>
        <button>
          <Link to={`/pokemon/${producto.id}`}>ver detalle</Link>
        </button>
    </article>
  )
}

export default Item