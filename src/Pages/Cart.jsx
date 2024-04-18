import React, { useState, useEffect } from "react";
import axios from "axios";
import Cartitems from "../components/Cartitems";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData ? userData._id : "";

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4567/products/${userId}/cart`
        );
        setCartProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching cart products:", error);
      }
    };
    fetchCartProducts();
  }, [userId]);

  return (
    <div className="ml-[80px]">
      <Cartitems products={cartProducts} />
    </div>
  );
}

export default Cart;
