import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="pb-5" >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


/* function Header() {
    return (
        <header id="main-header">
            <h1>Titulo</h1>
            <nav>
                <a href="#">links</a>
                <a href="#">links</a>
                <a href="#">links</a>
            </nav>
        </header>
    )
} */

export default Header