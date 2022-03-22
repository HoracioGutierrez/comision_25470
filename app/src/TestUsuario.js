import { memo } from "react"

const TestUsuario = ({ usuario , borrarUsuario }) => {

    console.log("Render Usuario", usuario.nombre)

    const handleClick = () => {
        borrarUsuario(usuario.id)
    }

    return (
        <div>
            {usuario.nombre}
            <button onClick={handleClick}>borrar</button>
        </div>
    )
}

export default memo(TestUsuario)