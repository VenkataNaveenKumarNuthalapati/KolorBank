import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

const AdminLogin = () => {
  return (
    <>
      <div className="d-flex flex-row justify-content-center m-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Admin Login</h2>
            <p className="card-text text-center">
              Note: This login is for administrators only.
            </p>
            <label className="text-end" for="userName">
              Admin Name*
            </label>
            <input
              id="userName"
              placeholder="Enter User Name"
              className="form-control"
            />
            <br />
            <label className="text-end" for="password">
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
            <div className="text-center mt-3">
              <button className="btn btn-primary m-2">Admin Login</button>
              <button className="btn btn-warning m-2">Admin Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
