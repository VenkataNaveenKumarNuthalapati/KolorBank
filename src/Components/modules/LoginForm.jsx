import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className="d-flex flex-row justify-content-center m-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">User Login</h2>
            <p className="card-text text-center">
              Note: This login is for Registered Users only.
            </p>
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
            <div className="text-center mt-3">
              <button className="btn btn-primary m-2">User Login</button>
              <button className="btn btn-warning m-2">User Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
