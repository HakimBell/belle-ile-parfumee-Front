import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const CartItems = ({ products, removeFromCart }) => {
  const handleDelete = (productId) => {
    removeFromCart(productId);
  };
  return (
    <div>
      <div className="w-11/12 m-auto py-10">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-sm text-gray-400">
          Il y a {products.length} éléments dans votre panier
        </p>
        <section className="space-x-10 w-full">
          <div className="w-full space-y-3">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <td className="text-gray-400 py-2">Image</td>
                  <td className="text-gray-400 py-2">Price</td>
                  <td className="text-gray-400 py-2">Quantity</td>
                  <td className="text-gray-400 py-2">Total</td>
                  <td className="text-gray-400 py-2">Delete</td>
                </tr>
              </thead>
              <tbody className="space-y-10 w-full">
                {products.map((product, index) => (
                  <tr key={index} className="border-dashed border-b">
                    <td className="py-5  w-full">
                      <div className="flex items-center space-x-3 py-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-28 w-28 object-cover"
                        />
                        <div>
                          <h1 className="text-xl font-bold">{product.name}</h1>
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <td>{product.quantity}</td>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(product._id)}>
                        <AiFillDelete size={"1.5rem"} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="my-5">
              <NavLink to="/home">
                <button className="flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2">
                  <BsArrowLeft />
                  <span>Continuer Shopping</span>
                </button>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartItems;
