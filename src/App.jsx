import "./App.css";
import { Routes, Route } from "react-router-dom"; // plus d'import de BrowserRouter ici
import { useEffect } from "react";
import axios from "axios";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import useAuthStore from "./store/useAuthStore";

function App() {
  const { login } = useAuthStore();

  // Charger l'utilisateur si un token est déjà présent (auto-login)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          login({ ...res.data, token });
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
