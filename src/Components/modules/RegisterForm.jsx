import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const RegisterForm = () => {
  return (
    <>
      <h1 className="">RegisterForm Page</h1>
      <Container>
        <Row>
          <Col shadow-lg>
            <Card>
              <div className="text-center">
                <Button variant="primary">Register</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterForm;
