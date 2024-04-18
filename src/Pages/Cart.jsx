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

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:4567/products/${userId}/delete-product/${productId}`
      );

      setCartProducts(
        cartProducts.filter((product) => product._id !== productId)
      );
      console.log("Product removed from cart successfully");
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
    console.log(userId, productId);
  };

  return (
    <div className="ml-[80px]">
      <Cartitems products={cartProducts} removeFromCart={removeFromCart} />
    </div>
  );
}

export default Cart;
