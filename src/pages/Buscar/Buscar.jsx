import React, { useState } from 'react';
import Axios from 'axios';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const MapaLocais = ({ resultados }) => (
  <LoadScript googleMapsApiKey="SUA_API_KEY_AQUI">
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={{ lat: -23.5505, lng: -46.6333 }} // Coordenadas de exemplo
      zoom={12}
    >
      {resultados.map((local) => (
        <Marker
          key={local.id}
          position={{ lat: local.latitude, lng: local.longitude }}
          title={local.nome}
        />
      ))}
    </GoogleMap>
  </LoadScript>
);

function Buscar() {
  const [tipoResíduo, setTipoResíduo] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarLocais = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('API_URL', {
        params: {
          tipo_residuo: tipoResíduo,
          bairro: bairro,
          cidade: cidade,
        },
      });
      setResultados(response.data);
    } catch (error) {
      console.error('Erro ao buscar locais de coleta', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="buscar-locais">
      <h1>Buscar Locais de Coleta</h1>
      <p>Utilize o campo de busca para encontrar locais próximos que recebem o tipo de material que você deseja descartar.</p>
      <ul>
        <li>Pesquise por tipo de resíduo: eletrônico, óleo, papel, etc.</li>
        <li>Filtre por bairro ou cidade</li>
        <li>Verifique os horários de funcionamento</li>
      </ul>

      <div className="filtros">
        <div>
          <label>Tipo de Resíduo:</label>
          <select value={tipoResíduo} onChange={(e) => setTipoResíduo(e.target.value)}>
            <option value="">Selecione</option>
            <option value="eletrônico">Eletrônico</option>
            <option value="óleo">Óleo</option>
            <option value="papel">Papel</option>
            <option value="plástico">Plástico</option>
            <option value="vidro">Vidro</option>
            <option value="movéis">Movéis</option>
            <option value="eletrodoméstico">Eletrodoméstico</option>
          </select>
        </div>

        <div>
          <label>Bairro:</label>
          <input
            type="text"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder="Digite o bairro"
          />
        </div>

        <div>
          <label>Cidade:</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Digite a cidade"
          />
        </div>

        <button onClick={buscarLocais} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar Locais'}
        </button>
      </div>

      <div className="resultados">
        {resultados.length > 0 ? (
          <>
            <ul>
              {resultados.map((local) => (
                <li key={local.id}>
                  <h3>{local.nome}</h3>
                  <p>Endereço: {local.endereco}</p>
                  <p>Tipo de Resíduo: {local.tipo_residuo}</p>
                  <p>Horários: {local.horarios}</p>
                  <p>Distância: {local.distancia} km</p>
                </li>
              ))}
            </ul>
            <MapaLocais resultados={resultados} />
          </>
        ) : (
          <p>Nenhum local encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Buscar;
