// Dans Order
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Order() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userName = userData ? userData.firstname : "";
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    // Récupère les produits depuis le localStorage
    const storedProducts = JSON.parse(localStorage.getItem("orderedProducts"));
    if (storedProducts) {
      setOrderedProducts(storedProducts);
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="space--5 flex flex-col justify-center items-center ">
        <h1 className="text-xl font-semibold ">
          Félicitations, {userName} Votre commande a bien été prise en compte.
          Hakim prendra contact avec vous dans les plus brefs délais.
        </h1>
        {/* Affiche les produits */}
        {/* <ul>
          {orderedProducts.map((product, index) => (
            <li key={index}>
              {product.product.name} - {product.quantity}
            </li>
          ))}
        </ul> */}
        <tbody className="space-y-10 w-full">
          {orderedProducts.map((product, index) => (
            <tr key={index} className="border-dashed border-b">
              <td className="py-5  w-full">
                <div className="flex items-center space-x-3 py-2">
                  <img
                    src={product.product.image}
                    alt={product.product.name}
                    className="h-28 w-28 object-cover"
                  />
                  <div>
                    <h1 className="text-xl font-bold ">
                      {product.product.name}
                    </h1>
                    <p>{product.product.description}</p>
                  </div>
                </div>
              </td>
              <td className="pr-4">{product.product.price}€</td>
              <td className="pr-4">{product.quantity}</td>
              <td className="pr-4">
                {product.product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
        <div>{/* <p>Total: {calculateTotal()}€</p> */}</div>
        <NavLink to="/home">
          <button className=" bg-gray-800 text-white px-5 py-2 rounded-m drop shadow-xl flex items-center space-x-2">
            <span>Retour à la boutique</span>
            <BsArrowLeft />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Order;
