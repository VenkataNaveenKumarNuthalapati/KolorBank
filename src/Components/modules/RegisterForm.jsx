import React from "react";

const RegisterForm = () => {
  return (
    <>
      <div className="d-flex flex-row justify-content-center m-3">
        <div className="card">
          <form className="card-body">
            <h2 className="card-title text-center">New User Registration</h2>
            <p className="card-text text-center">
              Note: This is for New Users only.
            </p>
            <label className="text-end" for="accountNumber">
              Account Number*
            </label>
            <input
              id="accountNumber"
              type="text"
              placeholder="Enter Account Numaber"
              className="form-control"
            />
            <br />
            <label className="text-end" for="userName">
              User Name*
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
            <br />
            <label className="text-end" for="cPassword">
              Conform Password*
            </label>
            <input
              id="cPassword"
              type="password"
              placeholder="Enter Conform Password"
              className="form-control"
            />
            <br />
            <div className="text-center">
              <button className="btn btn-primary m-2">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
