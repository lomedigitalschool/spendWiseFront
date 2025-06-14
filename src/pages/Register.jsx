import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await axios.post(
        "https://7a68-102-64-146-217.ngrok-free.app/api/users/register",
        {
          name,
          email,
          password,
        }
      );

      toast.success("Inscription réussie !");
      navigate("/login");
    } catch (err) {
      toast.error("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-bg px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl space-y-6"
        aria-label="Formulaire d'inscription"
      >
        <div className="flex justify-center">
          <img
            src="src/assets/logo.png"
            alt="SpendWise Logo"
            className="h-20 mb-4"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-primary">
          Créer un compte
        </h2>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          className="w-full p-3 bg-white rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Nom d'utilisateur"
        />

        <input
          type="email"
          placeholder="Adresse email"
          className="w-full p-3 bg-white rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Adresse email"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-3 bg-white rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Mot de passe"
        />

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          className="w-full p-3 bg-white rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          aria-label="Confirmer le mot de passe"
        />

        <button className="px-40 py-3 bg-blue-700 text-white font-bold border border-blue-900 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-md">
          S'inscrire
        </button>

        <p className="text-center text-text-color text-sm">
          Vous avez déjà un compte ?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:underline font-bold"
          >
            Connexion
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
