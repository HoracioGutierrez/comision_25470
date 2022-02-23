import Header from "./Header"
import Footer from "./Footer"
//import container from react-bootstrap
import { Container } from 'react-bootstrap'

function App() {
    return (
        <>
            <Header />
            <Container as="main">
            {/* <main className="container"> */}
                <div></div>
            {/* </main> */}
            </Container>
            <Footer/>
        </>
    )
}

export default App