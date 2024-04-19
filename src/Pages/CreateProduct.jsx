import React, { useState } from "react";
import axios from "axios"; // Importez Axios
import createPerfumeimage from "../assets/create-perfume.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

function CreateProduct() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // Utilisation du hook useSnackbar

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ml: "",
    price: "",
    image: "",
    gender: "Masculin", // Valeur par défaut
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4567/products/add-product",
        formData
      );
      console.log("Réponse du serveur:", response.data);
      enqueueSnackbar("Ajout Produit réussie!", { variant: "success" });
      navigate("/home");
    } catch (error) {
      console.error("Erreur:", error.message);
      enqueueSnackbar("Erreur lors de l'ajout d'un produit.", {
        variant: "error",
      });
    }
  };

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${createPerfumeimage})` }}
          >
            <h1 className="text-3xl mb-3 text-white">Bienvenue</h1>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, error corrupti sapiente atque adipisci velit vel iste
              facere amet odio consequuntur expedita beatae quos quas magnam
              explicabo, quam dolor. Commodi!
            </p>
          </div>
          <div className=" w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Créer une fiche produit</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="ml"
                name="ml"
                value={formData.ml}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="number"
                placeholder="Prix"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              >
                <option value="Masculin">Masculin</option>
                <option value="Féminin">Féminin</option>
                <option value="Mixte">Mixte</option>
              </select>

              <button
                type="submit"
                className="w-full bg-black py-3 text-center text-white"
              >
                Créer un une fiche produit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
