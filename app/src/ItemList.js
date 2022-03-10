import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <ul>
            {productos.map((producto) => {
                return <Item key={producto.id} producto={producto}/>
            })}
        </ul>
    )
}

export default ItemList