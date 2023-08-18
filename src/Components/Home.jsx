import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./Home.css";
import Footer from "./Footer";
import Sliding from "./Sliding";

const Home = () => {
  return (
    <div className="bg-container">
      <h3 className="text-danger text-center">
        Manage Your Money with Ease{" "}
        <span className="text-success fa-2x">Online Banking...!</span>
      </h3>
      <Container className="mt-3">
        <Row>
          <Col xs={4} shadow-lg>
            <Nav.Link href="/adminLogin">
              <Card className="card1 d-flex flex-column justify-content-end">
                <Button variant="primary" className=" w-100">
                  Admin Login
                </Button>
              </Card>
            </Nav.Link>
          </Col>
          <Col xs={4} shadow-lg>
            <Nav.Link href="/registerform">
              <Card className="card2 d-flex flex-column justify-content-end">
                <Button variant="primary" className="w-100">
                  User Register
                </Button>
              </Card>
            </Nav.Link>
          </Col>
          <Col xs={4} shadow-lg>
            <Nav.Link href="/loginform">
              <Card className="card3 d-flex flex-column justify-content-end">
                <Button variant="primary" className="w-100">
                  User Login
                </Button>
              </Card>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row shadow-lg>
          <Col xs={6}>
            <img
              className="w-100"
              alt="secure"
              src="https://www.ibank.com/wp-content/webp-express/webp-images/uploads/2021/01/safe_secure.png.webp"
            />
          </Col>

          <Col xs={6} className="d-flex flex-column justify-content-center">
            <h3>Safe And Secure</h3>
            <p>
              No One CANNOT see your financial data We take your financial
              security seriously. Kolar Bank is designed for your eyes and your
              eyes only. We never share your personal or financial data with
              anyone. Period.
            </p>
            <div>
              <Button variant="primary">Go somewhere</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Sliding />
      <Footer />
    </div>
  );
};

export default Home;
