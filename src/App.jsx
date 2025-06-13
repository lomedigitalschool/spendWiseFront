import "./App.css";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}

export default App;
