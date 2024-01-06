import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import data from './components/layout/global/json/items.json';

import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ErrorMessage from "./components/layout/content/ErrorMensage";

import Home from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Live from "./pages/Live";
import Cassino from "./pages/Casino";
import BetInfo from "./pages/BetInfo";
import PlaySport from "./pages/PlaySport";

import Logout from "./pages/client/Logout";
import Withdraw from "./pages/client/Withdraw";
import Account from "./pages/client/Account";
import Deposit from "./pages/client/Deposit";
import Bets from "./pages/client/Bets";
import History from "./pages/client/History";
import Profile from "./pages/client/Profile";
import Bonus from "./pages/client/Bonus";
import Support from "./pages/client/Support";
import Favorites from "./pages/client/Favorites";

import Contact from "./pages/intern/Contact";
import Security from "./pages/intern/Security";

export default function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/registro" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/play/:esporte" element={<PlaySport data={data} />} />

            <Route path="/live" element={<Live />} />
            <Route path="/game/:id" element={<BetInfo />} />
            <Route path="/casino" element={<Cassino />} />

            <Route path="*" element={<ErrorMessage/>} />

            {/* Routes /minha-conta */}
            <Route path="/minha-conta" element={<AuthenticatedRoute><Account /></AuthenticatedRoute>}/>
            <Route path="/minha-conta/depositar" element={<AuthenticatedRoute><Deposit /></AuthenticatedRoute>} />
            <Route path="/minha-conta/saque" element={<AuthenticatedRoute><Withdraw /></AuthenticatedRoute>} />
            <Route path="/minha-conta/minhas-apostas" element={<AuthenticatedRoute><Bets /></AuthenticatedRoute>} />
            <Route path="/minha-conta/favoritos" element={<AuthenticatedRoute><Favorites /></AuthenticatedRoute>} />
            <Route path="/minha-conta/historico" element={<AuthenticatedRoute><History /></AuthenticatedRoute>} />
            <Route path="/minha-conta/perfil" element={<AuthenticatedRoute><Profile /></AuthenticatedRoute>} />
            <Route path="/minha-conta/bonus" element={<AuthenticatedRoute><Bonus /></AuthenticatedRoute>} />
            <Route path="/minha-conta/suporte" element={<AuthenticatedRoute><Support /></AuthenticatedRoute>} />
            <Route path="/minha-conta/sair" element={<AuthenticatedRoute><Logout /></AuthenticatedRoute>} />

            {/* Routes /pagina */}
            <Route path="/pagina/contato" element={<Contact />}/>
            <Route path="/pagina/seguranca" element={<Security />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}