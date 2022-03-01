import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

function App() {

    const edad = 32
    const usuarios = ["Juan", "Pedro", "Maria"]
    const miOnAdd = () => {}

    return (
        <>
            <Header/>
            <Main nombre="Horacio" apellido="Gutierrez" onAdd={miOnAdd} edad={edad} usuarios={usuarios} initial={1}>
                <p>Hola Mundo</p>
                <p>Hola Mundo Dos</p>
            </Main>
            <Footer/>
        </>
    )
}

export default App