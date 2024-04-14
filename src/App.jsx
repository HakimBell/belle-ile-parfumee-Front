import React from "react";
import Cart from "./Pages/Cart";
import Favorites from "./Pages/Favorites";
import Order from "./Pages/Order";
import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favs" element={<Favorites />} />
          <Route path="/orders" element={<Order />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
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
