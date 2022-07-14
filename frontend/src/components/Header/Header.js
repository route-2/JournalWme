import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Header = () => {
    
  return (
    <>
     
   

    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand > <Link to='/'> JournalwUs </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className="m-auto"
            
          >
            <Nav.Link > <Link to='/mynotes'> My Notes </Link> </Nav.Link>
            <Nav.Link href="#action2"> Ruthu Rao </Nav.Link>
            <NavDropdown  id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action4">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
      



        </>
    )
}
export default Header