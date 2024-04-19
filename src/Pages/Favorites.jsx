import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function Favorites() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userName = userData ? userData.firstname : "";
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="space--5 flex flex-col justify-center items-center ">
        <h1 className="text-xl font-semibold ">
          Félicitations, {userName} Votre commande a bien été pris en compte.
          Hakim prendra contact avec vous dans les plus brefs délais.
        </h1>
        <NavLink to="/home">
          <button className=" bg-gray-800 text-white px-5 py-2 rounded-m drop shadow-xl flex items-center space-x-2">
            <span>Back to shop</span>
            <BsArrowLeft />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Favorites;
