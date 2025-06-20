import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

function ProtectedRoute({ children }) {
  const initialize = useAuthStore();
  initialize();
  const token = useAuthStore((state) => state.token);
  return token ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
