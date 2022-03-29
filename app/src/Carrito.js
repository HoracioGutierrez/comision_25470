import { useContext } from "react"
import { db } from "./Firebase"
import { contexto } from "./MiProvider"
import { addDoc , collection , serverTimestamp } from "firebase/firestore"


const Carrito = () => {

    const {carrito,borrarProducto,total} = useContext(contexto)

    const handleClick = () => {
        
        const orden = {
            buyer : {
                nombre : "horacio",
                telefono : "555555555",
                email : "horacio@gmail.com"
            },
            items : carrito,
            date : serverTimestamp(),
            total : total
        }
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)

        pedido
        .then(res=>{
            console.log(res.id)
        })

    }

    return (
        <>
            <h2>Carrito</h2>
            {
                carrito.map(producto => (
                    <div key={producto.id}>
                        <p>{producto.nombre}</p>
                        <p>{producto.precio} x {producto.cantidad}</p>
                        <button onClick={()=>borrarProducto(producto.id)}>Borrar</button>
                    </div>
                ))
            }
            <p>Total : ${total}</p>
            <button onClick={handleClick}>Confirmar Compra</button>
        </>
    )
}

export default Carrito