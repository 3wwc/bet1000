import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Live from "./pages/Live";
import Cassino from "./pages/Casino";

export default function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/live" element={<Live />} />
            <Route path="/casino" element={<Cassino />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}