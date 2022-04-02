import { Offcanvas } from 'react-bootstrap'
import { Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../images/instacart.png'

function TopBar() {
    return (
        <Navbar bg="light" fixed='top' expand={false} >
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id='offcanvasNavbar'
                    aria-labelledby='offcanvasNavbarLabel'
                    placement='end'
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel'>Close</Offcanvas.Title>
                    </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="departments">Departments</Nav.Link>
                                <Nav.Link href="more-shop">More ways to shop</Nav.Link>
                                <Nav.Link href="help">Help</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                </Navbar.Offcanvas>
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src={logo} alt='logo' height='50px' /> 
            </Navbar.Brand>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
        </Navbar>
    )
}

export default TopBar