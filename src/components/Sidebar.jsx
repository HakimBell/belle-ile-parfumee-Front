import React from "react";
import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { PiSignInLight } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("newUser");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 h-screen p-2 bg-gray-100 ">
      <ul className="p-5 space-y-8">
        <li>
          <button>
            <HiOutlineMenuAlt2 size={"1.5rem"} />
          </button>
        </li>

        <li>
          <NavLink to="/home">
            <button>
              <HiOutlineHome size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            <button>
              <CiShoppingCart size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/favs">
            <button>
              <IoHeartOutline size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            <button>
              <CiDeliveryTruck size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/create-product">
            <button>
              <IoCreateOutline size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <button onClick={handleLogout}>
            <PiSignInLight size={"1.5rem"} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
