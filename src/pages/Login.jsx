import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-bg px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6"
        aria-label="Formulaire de connexion"
      >
        {/* Logo centré */}
        <div className="flex justify-center">
          <img
            src="/src/assets/logo.png"
            alt="SpendWise Logo"
            className="h-20 mb-4"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-primary">
          Bienvenue sur SpendWise
        </h2>

        <input
          type="email"
          placeholder="Adresse email"
          className="w-full p-3 bg-blue-100 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Adresse email"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-3 bg-blue-100 rounded text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Mot de passe"
        />

        <button
          type="submit"
          className="w-full bg-solde-bg text-white py-3 rounded hover:bg-indigo-900 transition font-semibold"
        >
          Se connecter
        </button>

        <p className="text-center text-text-color text-sm">
          Pas encore de compte ?{" "}
          <a
            href="/register"
            className="text-primary hover:underline font-medium"
          >
            Inscription
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
