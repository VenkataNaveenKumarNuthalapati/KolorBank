import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="mt-2 sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="KBlogo"
              src="https://static.vecteezy.com/system/resources/previews/011/423/441/non_2x/kb-logo-k-b-design-white-kb-letter-kb-letter-logo-design-initial-letter-kb-linked-circle-uppercase-monogram-logo-vector.jpg"
              alt=""
            />
            Welcome to Kolar Bank
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adminLogin">Admin Login</Nav.Link>
            <Nav.Link href="/register">User Register</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
