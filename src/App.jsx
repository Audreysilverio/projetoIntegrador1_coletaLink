import { Routes, Route, Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
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
      {/* Navbar */}
      <div className="auth-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/cadastro" className="btn">Cadastro</Link>
      </div>

      <img src={logo} alt="Logo ColetaLink" className="logo" />

      <div className="search-container">
  <input type="text" placeholder="Pesquisar locais de coleta..." />
  <AiOutlineSearch className="search-icon" />
</div>

      {/* Navegação principal */}
      <div className="buttons-grid">
        <Link to="/quem-somos" className="btn">Quem Somos</Link>
        <Link to="/doar" className="btn">Doar</Link>
        <Link to="/buscar" className="btn">Buscar</Link>
        <Link to="/mapa" className="btn">Mapa</Link>
        <Link to="/projeto" className="btn">Projeto</Link>
        <Link to="/informacoes" className="btn">Informações</Link>
      </div>


      {/* Rotas */}
      <Routes>
        {/* Você pode trocar o path "/" por outro componente real futuramente */}
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/doar" element={<Doar />} />
        <Route path="/buscar" element={<Buscar />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/informacoes" element={<Informacoes />} />
      </Routes>

      <footer>
        &copy; ColetaLink 2025 - Todos os direitos reservados
      </footer>
    </>
  );
}

export default App;
