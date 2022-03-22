import { memo } from "react"
import TestUsuario from "./TestUsuario"


const TestLista = ({usuarios , borrarUsuario}) => {

    console.log("Render de Lista")

    return (
        <div>
            {usuarios.map(usuario=>{
                return <TestUsuario usuario={usuario} key={usuario.id} borrarUsuario={borrarUsuario}/>
            })}
        </div>
    )
}

export default memo(TestLista)