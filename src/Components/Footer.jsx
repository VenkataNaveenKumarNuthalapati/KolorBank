import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="mt-2 fixed-bottom p-0">
        <Container>
          <Navbar.Brand href="#">Contact us</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Whatsapp</Nav.Link>
            <Nav.Link href="/">Facebook</Nav.Link>
            <Nav.Link href="/">Twitter</Nav.Link>
            <Nav.Link href="/">Youtube</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
