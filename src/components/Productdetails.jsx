import React, { useState } from "react";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";
import { SnackbarProvider, useSnackbar } from "notistack";

function Productdetails({ product, closeModal, userId }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const [cart, setCart] = useState([]);
  const { enqueueSnackbar } = useSnackbar(); // Utilisation du hook useSnackbar

  console.log(product._id, userId);
  const handleAddToCart = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4567/products/${product._id}/addToCart/${userId}`
      );
      setCart(response.data);
      console.log(response.data);
      console.log(userId, product._id);
      enqueueSnackbar("Produit ajouté à votre Panier!", { variant: "success" });

      setAddedToCart(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <div className="product h-[550px] w-[450px] bg-white drop-shadow-2xl p-2 border">
      <img
        src={product.image}
        alt=""
        className="w-full h-[60%] object-cover p-2"
      />
      <div className="m-2 bg-gray-100 p-2">
        <h1 className="text-xl font-semibold text-center">{product.name}</h1>
        <p className="text-sm"> {product.ml}</p>
        <p className="text-sm"> {product.description}</p>
        <p className="text-sm"> {product.gender}</p>
        <p className="text-sm"> {product.price}</p>
        <div className="flex justify-between items-center">
          {!addedToCart && (
            <button
              className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              onClick={handleAddToCart}
            >
              <CiShoppingCart className="mr-2" />
              Ajouter au panier
            </button>
          )}
          <button
            className=" px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={closeModal}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
