import React, { useState, useEffect } from "react";
import axios from "axios";
import Cartitems from "../components/Cartitems";
import { SnackbarProvider, useSnackbar } from "notistack";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData ? userData._id : "";
  const { enqueueSnackbar } = useSnackbar(); // Utilisation du hook useSnackbar

  // Afficher tous les parfums du panier
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

  // Supprimer un parfum du panier
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:4567/products/${userId}/delete-product/${productId}`
      );

      setCartProducts(
        cartProducts.filter((product) => product._id !== productId)
      );
      enqueueSnackbar("Produit supprimé", { variant: "success" });
      window.location.reload();
      console.log("Product removed from cart successfully");
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
    console.log(userId, productId);
  };

  const decreaseQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product._id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const increaseQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  return (
    <div className="ml-[80px]">
      <Cartitems
        products={cartProducts}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
    </div>
  );
}

export default Cart;
