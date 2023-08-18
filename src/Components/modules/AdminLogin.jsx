import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AdminLogin = () => {
  return (
    <>
      <h1 className="">AdminLogin Page</h1>
      <Container>
        <Row>
          <Col shadow-lg>
            <Card>
              <div className="text-center">
                <Button variant="primary">Admin Login</Button>
                <Button variant="warning">Admin Logout</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLogin;
