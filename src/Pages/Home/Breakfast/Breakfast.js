import React from "react";
import "./Breakfast.css";

const Breakfast = ({ breakfast }) => {
  const { name, img, description, price } = breakfast;
  return (
    <div className="card-container mx-auto">
      <div className="card border-0" style={{ width: "16rem" }}>
        <img src={img} alt="" />
        <div className="info mt-4">
          <h6>{name}</h6>
          <p>{description}</p>
          <h5>${price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
