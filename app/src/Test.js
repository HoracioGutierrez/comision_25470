import { useState , useCallback } from "react"
import TestLista from "./TestLista"


/**
 *  Hook y HoC
 * 
 * 
 * 
 * useMemo : memorizar una variable si no es funcion
 * 
 * useCallback : memorizar una variable si es funcion
 * 
 * memo : memoriza todo un componente entero y hace que solo se reejecute si su estado o props cambia , no toma cambios del padre
 * 
 */


const Test = () => {

  const [nombre, setNombre] = useState("")
  const [usuarios,setUsuarios] = useState([])

  const handleChange = (e) => {
    setNombre(e.target.value) 
  }

  const handleClick = () => {
    const copia = usuarios.slice(0)
    const usuario = {
      id : Math.random(),
      nombre
    }
    copia.push(usuario)
    setUsuarios(copia)
    setNombre("")
  }

  const borrarUsuarioMemorizada = useCallback((id) => {
    console.log("Borrando ", id)
  },[])

  console.log("Render de Test")

  return (
    <>
      <input type="text" placeholder="Nombre" onChange={handleChange} value={nombre}/>
      <button onClick={handleClick}>agregar</button>
      <TestLista usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
    </>
  )
}


export default Test









 /* return (
    <>
      <button onClick={toggleText}>toggle</button>
      <p className={toggle && "rojo"}>lorem ipsum</p>
    </>
  ) */

  
  /* return (
    <>
      <button onClick={toggleText}>toggle</button>
      <p>{toggle ? "true" : "false"}</p>
    </>
  ) */

  /* return (
    <>
      <button onClick={toggleText}>toggle</button>
      {toggle ? <p>true</p> : <p>false</p>}
    </>
  ) */

  /* if (toggle) {
    return (
      <>
        <button onClick={toggleText}>toggle</button>
        <p>Lorem Ipsum</p>
      </>
    )
  } else {
    return (
      <button onClick={toggleText}>toggle</button>
    )
  } */


 /*  function uno(){
    dos()
  }

  function dos(){

  }

  uno()
  uno() */