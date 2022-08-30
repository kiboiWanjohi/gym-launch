import React from "react";
import "./Pricing.css";
const Pricing = () => {
  return (
    <div className="pricing-container" id="pricing">
      <h1>Pricing</h1>
      <div className="rows">
        <div className="columns">
          <div className="box">
            <h3>Basic</h3>
            <h5>Kshs 8500</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo, omnis.
            </p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
        <div className="columns">
          <div className="box">
            <h3>Basic</h3>
            <h5>Kshs 9500</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo, omnis.
            </p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
        <div className="columns">
          <div className="box">
            <h3>Basic</h3>
            <h5>Kshs 10500</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo, omnis.
            </p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
