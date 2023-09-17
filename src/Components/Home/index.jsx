import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import Footer from "../Footer";
import Sliding from "../AsideSliding";

const Home = () => {
  return (
    <div className="bg-container">
      <h3 className="container text-danger text-center shadow">
        Manage Your Money with Ease{" "}
        <span className="text-success fa-2x">Online Banking...!</span>
      </h3>
      <div className="container  shadow-lg pt-5">
        <div className="row">
          <div className="col-12 col-md-4 p-2">
            <NavLink to="/adminLogin">
              <div className="card card1 d-flex flex-column justify-content-end">
                <button className="btn btn-primary">Admin Login</button>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-md-4  p-2">
            <NavLink to="/registerform">
              <div className="card card2 d-flex flex-column justify-content-end">
                <button className="btn btn-primary">User Register</button>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-md-4  p-2">
            <NavLink to="/loginform">
              <div className="card card3 d-flex flex-column justify-content-end">
                <buttton className="btn btn-primary">User Login</buttton>
              </div>
            </NavLink>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <img
              className="w-100"
              alt="secure"
              src="https://www.ibank.com/wp-content/webp-express/webp-images/uploads/2021/01/safe_secure.png.webp"
            />
          </div>

          <div className="col-6 d-flex flex-column justify-content-center">
            <h3>Safe And Secure</h3>
            <p>
              No One CANNOT see your financial data We take your financial
              security seriously. Kolar Bank is designed for your eyes and your
              eyes only. We never share your personal or financial data with
              anyone. Period.
            </p>
            <div>
              <button className="btn btn-primary">Go somewhere</button>
            </div>
          </div>
        </div>
      </div>

      <Sliding />
      <Footer />
    </div>
  );
};

export default Home;
