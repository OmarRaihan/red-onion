// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import CustomLink from "../../../Shared/CustomLink/CustomLink";
// import Breakfast from "../Breakfast/Breakfast";
// import "./Breakfasts.css";

// const Breakfasts = () => {
//   const [breakfasts, setBreakfasts] = useState([]);

//   useEffect(() => {
//     fetch("breakfasts.json")
//       .then((res) => res.json())
//       .then((data) => setBreakfasts(data));
//   }, []);
 

//   return (
//     <div>
//       <div className="home-btn mt-5 d-flex justify-content-center">
//         <CustomLink  className="me-5" to="/breakfasts">
//           Breakfast
//         </CustomLink>
//         <CustomLink className="me-5" to="/lunches">
//           Lunch
//         </CustomLink>
//         <CustomLink to="/dinners">Dinner</CustomLink>
//       </div>

//       <div className="container breakfast-container my-5">
//         {breakfasts.map((breakfast) => (
//           <Breakfast 
//           key={breakfast.id} 
//           breakfast={breakfast}
//           ></Breakfast>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Breakfasts;
