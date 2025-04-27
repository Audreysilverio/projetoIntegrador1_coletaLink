import { Routes, Route, Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaInfoCircle, FaProjectDiagram, FaMapMarkedAlt, FaHandHoldingHeart, FaSearch, FaUsers } from "react-icons/fa";
import "./App.css";
import QuemSomos from "./pages/Quem Somos/QuemSomos.jsx";
import Doar from "./pages/Doar/Doar.jsx";
import logo from "./assets/logoColetaLink.jpeg";
import Buscar from "./pages/Buscar/Buscar.jsx";
import Mapa from "./pages/Mapa/Mapa.jsx";
import Projeto from "./pages/Projeto/Projeto.jsx";
import Informacoes from "./pages/Informacoes/Informacoes.jsx"

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
        <img src={logo} alt="Logo ColetaLink" className="logo" />
        </header>
      </div>
      
      {/* Navbar */}
      <div className="auth-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/cadastro" className="btn">Cadastro</Link>
      </div>

      

      <div className="search-container">
  <input type="text" placeholder="Pesquisar locais de coleta..." />
  <AiOutlineSearch className="search-icon" />
</div>

      {/* Navegação principal */}
      <div className="buttons-grid">
        <Link to="/quem-somos" className="btn">Quem Somos</Link>
        <Link to="/projeto" className="btn">Projeto</Link>
        <Link to="/informacoes" className="btn">Informações</Link>
        <Link to="/mapa" className="btn">Mapa</Link>
        <Link to="/doar" className="btn">Doar</Link>
        <Link to="/buscar" className="btn">Buscar</Link>
        
      </div>


      {/* Rotas */}
      <Routes>
        {/* Você pode trocar o path "/" por outro componente real futuramente */}
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/projeto" element={<Projeto />} />
        <Route path="/informacoes" element={<Informacoes />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/doar" element={<Doar />} />
        <Route path="/buscar" element={<Buscar />} />
         
      </Routes>

      <footer>
        &copy; ColetaLink 2025 - Todos os direitos reservados
      </footer>
    </>
  );
}

export default App;
