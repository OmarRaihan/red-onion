import React, { useEffect, useState } from "react";
import { Link as CustomLink } from "react-router-dom";
import Dinner from "../Dinner/Dinner";
import "./Dinners.css";

const Dinners = () => {
  const [dinners, setDinners] = useState([]);

  useEffect(() => {
    fetch("dinners.json")
      .then((res) => res.json())
      .then((data) => setDinners(data));
  }, []);
  return (
    <div>
      <div className="home-btn mt-5">
        <CustomLink className="me-5" to="/breakfasts">Breakfast</CustomLink>
        <CustomLink className="me-5" to="/lunches">Lunch</CustomLink>
        <CustomLink to="/dinners">Dinner</CustomLink>
      </div>
      <div>
        <div  className="container dinner-container my-5">
        {dinners.map((dinner) => (
          <Dinner 
          key={dinner.id} 
          dinner={dinner}
          ></Dinner>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Dinners;
