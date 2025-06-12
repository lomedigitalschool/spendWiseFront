import "./App.css";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}

export default App;
