const Item = ({producto}) => {
  return (
    <div>
        <p>{producto.nombre}</p>
        <p>Precio : ${producto.precio}</p>
    </div>
  )
}

export default Item