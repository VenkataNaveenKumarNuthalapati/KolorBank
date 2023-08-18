import React from "react";
import "./Sliding.css";

const Sliding = () => {
  return (
    <div className="special_effect d-flex flex-column">
      <div className="sliding_container sliding_container-1">
        <i
          className="fab fa-facebook text-primary"
          style={{ fontSize: "30px" }}
        ></i>
        <p className="network mt-3 pl-2">
          SBI Official <br />
          Facebook
        </p>
      </div>
      <div className="sliding_container sliding_container-2">
        <i
          className="fab fa-twitter text-primary fa-2x"
          style={{ fontSize: "30px" }}
        ></i>
        <p className="network mt-3 pl-2">
          SBI Official <br />
          Twitter
        </p>
      </div>
      <div className="sliding_container sliding_container-3">
        <i
          className="fab fa-youtube text-danger fa-2x"
          style={{ fontSize: "23px" }}
        ></i>
        <p className="network mt-3 pl-2">
          SBI Official <br />
          Youtube
        </p>
      </div>
      <div className="sliding_container sliding_container-4">
        <i
          className="fab fa-linkedin text-primary fa-2x"
          style={{ fontSize: "30px" }}
        ></i>
        <p className="network mt-3 pl-2">
          SBI Official <br />
          LinkedIn
        </p>
      </div>
      <div className="sliding_container sliding_container-5">
        <i
          className="fab fa-instagram text-danger fa-2x"
          style={{ fontSize: "30px" }}
        ></i>
        <p className="network mt-3 pl-2">
          SBI Official <br />
          Instagram
        </p>
      </div>
      <div className="sliding_container sliding_container-6">
        <i
          className="fab fa-pinterest text-danger fa-2x"
          style={{ fontSize: "30px" }}
        ></i>
        <p className="network mt-3 pl-2">
          SBI Official <br />
          Pinterest
        </p>
      </div>
    </div>
  );
};

export default Sliding;
