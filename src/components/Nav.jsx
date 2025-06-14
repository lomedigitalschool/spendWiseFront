import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuthStore from "../store/useAuthStore"; // Ajuste si nécessaire

export default function Nav() {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    toast.success("Déconnecté avec succès !");
    navigate("/login");
  };

  return (
    <div className="navbar bg-white shadow-md px-6">
      <div className="flex-1">
        <Link to="/dashboard" className="text-2xl font-bold text-black">
          Spend<span className="text-indigo-800 italic">Wise</span>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="text-black font-medium">
                {user?.email || "Mon Compte"}
              </summary>
              <ul className="bg-white p-2 shadow-lg rounded-lg space-y-1 min-w-[160px]">
                <li>
                  <Link to="/profile" className="hover:text-indigo-700">
                    Profil
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-800 text-left w-full"
                  >
                    Déconnexion
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
