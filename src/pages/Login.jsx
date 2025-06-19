import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${apiUrl}/api/users/login`, {
        email,
        password,
      });

      const { token, user } = res.data;

      login(user, token); // Stocke dans Zustand
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Échec de connexion. Vérifie tes identifiants.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-bg px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl space-y-6"
        aria-label="Formulaire de connexion"
      >
        {/* Logo et titre */}
        <div className="flex justify-center">
          <img
            src="/src/assets/logo.png"
            alt="SpendWise Logo"
            className="h-20 mb-4"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-black">
          Bienvenue sur Spend
          <span className="text-blue-700 italic font-bold">Wise</span>
        </h2>

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded border text-black border-gray-300"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded border text-black border-gray-300"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600"
        >
          Se Connecter
        </button>

        <p className="text-center text-sm text-text-color">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-blue-500 font-bold">
            Inscription
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
