import axios from "axios";
import React, { useEffect, useState } from "react";
import Productdetails from "./Productdetails";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Main = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userName = userData ? userData.firstname : "";
  const userId = userData ? userData._id : "";
  // console.log(userId);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const searchHandler = (e) => {
    const filteredArray = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filteredArray);
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === null || category === "Tous les produits") {
      setFilteredProducts(products);
      console.log(products);
    } else {
      const filteredArray = products.filter(
        (product) => product.gender.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filteredArray);
    }
  };

  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4567/products/all")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="w-full relative">
      <div className="sticky top-0 z-10">
        <div className="header flex justify-between items-center p-4 bg-white">
          <h1 className="text-3xl font-bold">Belle île Parfumée</h1>
          <div className="flex justify-between items-center gap-5">
            <p className="text-3xl font-bold">{userName}</p>
            <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
              <input
                type="text"
                placeholder="Search product"
                className="bg-transparent outline-0"
                onChange={searchHandler}
              />
              <button onClick={() => searchHandler()}>
                <CiSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="categories bg-white w-full flex  space-x-8 px-2 py-8">
          <div
            className={`px-5 py-2 rounded-full drop-shadow-xl ${
              selectedCategory === null
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterByCategory(null)}
          >
            <button>Tous les produits</button>
          </div>
          <div
            className={`px-5 py-2 rounded-full drop-shadow-xl ${
              selectedCategory === "Masculin"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterByCategory("Masculin")}
          >
            <button>Homme</button>
          </div>
          <div
            className={`px-5 py-2 rounded-full drop-shadow-xl ${
              selectedCategory === "Féminin"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterByCategory("Féminin")}
          >
            <button>Femme</button>
          </div>
          <div
            className={`px-5 py-2 rounded-full drop-shadow-xl ${
              selectedCategory === "mixte"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => filterByCategory("mixte")}
          >
            <button>Mixte</button>
          </div>
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="product h-[350px] bg-white drop-shadow-2xl p-2 border"
          >
            <img
              src={product.image}
              alt=""
              className="w-full h-[60%] object-cover p-2"
            />
            <div className="m-2 bg-gray-100 p-2">
              <h1 className="text-xl font-semibold">{product.name}</h1>
              <p className="text-sm">{product.ml}</p>
              <p className="text-sm">{product.gender}</p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold">{product.price}€</p>
                <button onClick={() => showProductDetails(product)}>
                  Voir les détails
                </button>

                <button>
                  <CiShoppingCart className="hover:scale-110" size={"1.4rem"} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-99">
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="absolute" style={{ margin: "100px auto 0 auto" }}>
            <Productdetails
              userId={userId}
              product={selectedProduct}
              closeModal={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
