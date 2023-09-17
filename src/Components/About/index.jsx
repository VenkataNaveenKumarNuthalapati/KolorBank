import React from "react";
import "./index.css";
const About = () => {
  return (
    <div className="pt-3 d-flex flex-column justify-content-center align-items-center">
      <div className="card w-50">
        <img
          src="https://images.moneycontrol.com/static-mcnews/2023/02/banking-01.jpg"
          className="card-img-top card-image"
          alt="..."
        />
        <div className="card-body text-center">
          <h2 className="card-title">Kolar Bank</h2>
          <p className="card-text text-start">
            Welcome to our secure and user-friendly bank website, your trusted
            partner for all your financial needs. Explore our wide range of
            banking services, from checking and savings accounts to loans and
            investments. With our cutting-edge online platform, you can easily
            manage your accounts, make secure transactions, and access valuable
            financial resources. Your financial well-being is our top priority,
            and we are committed to providing you with a seamless and convenient
            banking experience. Feel free to explore our website, and don't
            hesitate to reach out to our dedicated customer support team for any
            assistance you may need. We're here to help you achieve your
            financial goals.
          </p>

          <a href="/" className="btn btn-primary">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
