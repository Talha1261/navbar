import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar,Container,Nav,NavDropdown} from  'react-bootstrap';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function App(){
  return(
    <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Talha Mahmood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="tests">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <NavDropdown title="Degree Programs" id="collapsable-nav-dropdown">
          <NavDropdown.Item href="#BSCS">BSCS</NavDropdown.Item>
          <NavDropdown.Item href="#BSIT">BSIT</NavDropdown.Item>
          <NavDropdown.Item href="#BSSE">BSSE</NavDropdown.Item>
          <NavDropdown.Item href="#BSCYS">BSCYS</NavDropdown.Item>
          
        </NavDropdown>
        </Nav>


<Nav>
<Nav.Link href="#fee">Fee Structure</Nav.Link>
<Nav.Link href="#contact">Contact US</Nav.Link>

</Nav>
</Navbar.Collapse>
</Container>
<div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center"></div>
        <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    </Navbar>
    </>
  );
 
}
export default App;
