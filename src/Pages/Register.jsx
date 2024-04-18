import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import parfumFormImage from "../assets/parfum-form.jpg";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4567/auth/register", {
        email,
        password,
        firstname,
        lastname,
        zipCode,
        address,
        phoneNumber,
      });
      console.log("Inscription réussie :", response.data);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("newUser", JSON.stringify(response.data.newUser));
      setToken(response.data.token);
      toast.success("Inscription réussie !");

      // Redirection vers la page principale après l'inscription réussie
      navigate("/home");
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      // Afficher un message d'erreur ou effectuer une action en cas d'échec de l'inscription
    }
  };

  return (
    <div className="min-h-screen py-40 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `url(${parfumFormImage})` }}
          >
            <h1 className="text-3xl mb-3 text-white ">Bienvenue</h1>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, error corrupti sapiente atque adipisci velit vel iste
              facere amet odio consequuntur expedita beatae quos quas magnam
              explicabo, quam dolor. Commodi!
            </p>
          </div>
          <div className=" w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">Inscrivez-vous!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Prénom"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Nom "
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Adresse"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="Code postal"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <input
                type="text"
                placeholder="phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border border-gray-400 py-1 px-2 w-full mb-2"
              />
              <button
                type="submit"
                className="w-full bg-black py-3 text-center text-white"
              >
                Créer un compte
              </button>
            </form>
            <p className="mt-3">
              Déjà un compte ?{" "}
              <NavLink to="/login">
                <span className="text-blue-500">Me connecter</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
