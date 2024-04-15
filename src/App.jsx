import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import Order from "./Pages/Order";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Root />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favs" element={<Favorites />} />
          <Route path="/orders" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
