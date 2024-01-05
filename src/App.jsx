import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Live from "./pages/Live";
import Cassino from "./pages/Casino";
import BetInfo from "./pages/BetInfo";

import Logout from "./pages/client/Logout";
import Withdraw from "./pages/client/Withdraw";
import Account from "./pages/client/Account";
import Deposit from "./pages/client/Deposit";
import Bets from "./pages/client/Bets";
import History from "./pages/client/History";
import Profile from "./pages/client/Profile";
import Security from "./pages/client/Security";
import Bonus from "./pages/client/Bonus";
import Support from "./pages/client/Support";

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
            <Route path="/bet/:id" element={<BetInfo />} />

            <Route path="*" element={<h1>404</h1>} />

            {/* Routes /minha-conta */}
            <Route path="/minha-conta" element={<Account />}/>
            <Route path="/minha-conta/depositar" element={<Deposit />} />
            <Route path="/minha-conta/saque" element={<Withdraw />} />
            <Route path="/minha-conta/apostas" element={<Bets />} />
            <Route path="/minha-conta/historico" element={<History />} />
            <Route path="/minha-conta/perfil" element={<Profile />} />
            <Route path="/minha-conta/seguranca" element={<Security />} />
            <Route path="/minha-conta/bonus" element={<Bonus />} />
            <Route path="/minha-conta/suporte" element={<Support />} />
            <Route path="/minha-conta/sair" element={<Logout />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}