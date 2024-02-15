import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import logo from "../assets/logo.png"
function NavBar() {
  return (
    <Navbar id='navb' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"  id='logo'><img src={logo}  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
       
          <Nav>
            <Nav.Link id='nabr' href="/">Accueil</Nav.Link>
            <Nav.Link id='nabr' href="Service">Nos Services</Nav.Link>
            <Nav.Link id='nabr' href="Présentation">Présentation</Nav.Link>
              <Nav.Link id='nabr' href="Reservez en ligne">Reservez en ligne</Nav.Link>  
  
          </Nav>
        </Navbar.Collapse>      <h6>Appelez maintenant <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +21622367628</span> </h6>
      </Container>
    </Navbar>
  );
}

export default NavBar;