import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Breakfasts from "../Breakfasts/Breakfasts";
import Dinners from "../Dinners/Dinners";
import Lunches from "../Lunches/Lunches";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="my-5">
        <Routes>
          <Route index element={<Breakfasts/>}></Route>
          <Route index element={<Lunches/>}></Route>
          <Route index element={<Dinners/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Home;
