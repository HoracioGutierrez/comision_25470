import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto


const MiProvider = ({children}) => {


    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)

    const borrarDelCarrito = (id) => {}

    const agregarAlCarrito = (producto,cantidad) => {
        if(isInCart()){

        }else{
            //1) siempre copio el estado primero si es tipo array u objeto
            const copia = carrito.slice(0)
            //... (Operador Rest/Spread)
        }
    }

    const limipiarCarrito = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        //recorre todo el carrito en busca del producto con id "id"
        //devuelve true si el producto existe
        //devuelve false si el producto no existe
    }

    const valorDelContexto = {
        total : total,
        carrito : carrito,
        borrarDelCarrito : borrarDelCarrito,
        agregarAlCarrito : agregarAlCarrito
    }
    
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider

























/* carrito : [{
    id : 1 ,
    titulo : "Libro 1" ,
    precio : 100,
    cantidad : 2,
    imagen : "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    descripcion : "Descripcion del libro 1"
},{
    id : 2 ,
    titulo : "Libro 2" ,
    precio : 200,
    cantidad : 1,
    imagen : "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    descripcion : "Descripcion del libro 2"
}] */