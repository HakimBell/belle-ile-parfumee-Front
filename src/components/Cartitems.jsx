import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
const CartItems = ({
  products,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const handleDelete = (productId) => {
    removeFromCart(productId);
  };
  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + product.product.price * product.quantity;
    }, 0);
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
                    <td>{product.product.price}€</td>
                    <td>
                      <td>{product.quantity}</td>
                    </td>
                    <td>
                      <button
                        onClick={() => decreaseQuantity(product.product._id)}
                        disabled={product.quantity === 1}
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        onClick={() => increaseQuantity(product.product._id)}
                      >
                        +
                      </button>
                    </td>
                    <td>{product.product.price * product.quantity}</td>
                    <td>
                      <button onClick={() => handleDelete(product.product._id)}>
                        <AiFillDelete size={"1.5rem"} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="my-5 flex items-center justify-between ">
              <NavLink to="/home">
                <button className="flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2">
                  <BsArrowLeft />
                  <span>Continuer mes achats</span>
                </button>
              </NavLink>
              <div>
                <p>Total: {calculateTotal()}€</p>
                <NavLink to="/orders">
                  <button className="flex items-center space-x-3 bg-green-200 font-semibold rounded p-2">
                    <span>Valider ma commande</span>
                    <IoMdCheckmark />
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartItems;
