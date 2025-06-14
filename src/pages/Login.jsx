import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuthStore from "../store/useAuthStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simuler un délai d'attente (comme un appel API)
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Vérification simple (exemple : email et password non vides)
      if (!email || !password) throw new Error("Champs requis");

      // Simuler un utilisateur et un token
      const user = { id: 1, email };
      const token = "fake-jwt-token";

      // Mettre à jour le store Zustand
      login(user, token);

      toast.success("Connexion simulée réussie !");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-bg px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl space-y-6"
        aria-label="Formulaire de connexion"
      >
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

        <button
          type="submit"
          className="w-full py-3 bg-blue-700 text-white font-bold border border-blue-900 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:shadow-md"
        >
          Se Connecter
        </button>

        <p className="text-center text-text-color text-sm">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-blue-500 hover:underline font-bold">
            Inscription
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
