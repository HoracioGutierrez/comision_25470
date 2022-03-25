import { createContext, useState } from "react";

export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) => {

    const [carrito,setCarrito] = useState([
        {
            id: 1,
            nombre: "Camisa",
            precio: 50
        },
        {
            id: 2,
            nombre: "Pantalon",
            precio: 100
        }
    ])

    const agregarProducto = () => {
        //aca seguro va el setCarrito porque no la puedo pasar directo
        //setCarrito()
        console.log("Funciona")
    }

    const borrarProducto = id => {
        console.log("Borrando desde el provider",id)
        console.log(id)
    }

    const valorDelProvider = {
        carrito ,
        borrarProducto,
        agregarProducto
    }

    return (
        <Provider value={valorDelProvider}>
            {children}
        </Provider>
    )
}

export default MiProvider