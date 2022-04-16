// import React, { useEffect, useState } from "react";
// import { Link as CustomLink } from "react-router-dom";
// import Lunch from "../Lunch/Lunch";
// import "./Lunches.css";

// const Lunches = () => {
//   const [lunches, setLunches] = useState([]);

//   useEffect(() => {
//     fetch("lunches.json")
//       .then((res) => res.json())
//       .then((data) => setLunches(data));
//   }, []);

//   return (
//     <div>
//         <div className="home-btn mt-5">
//         <CustomLink className="me-5" to="/breakfasts">Breakfast</CustomLink>
//         <CustomLink className="me-5" to="/lunches">Lunch</CustomLink>
//         <CustomLink to="/dinners">Dinner</CustomLink>
//       </div>
//       <div className="container lunch-container my-5">
//         {lunches.map((lunch) => (
//           <Lunch 
//           key={lunch.id} 
//           lunch={lunch}
//           ></Lunch>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lunches;
