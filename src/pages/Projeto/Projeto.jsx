import React from 'react';
import styles from './projeto.module.scss';

function Projeto() {
  return (
    <div className={styles.projetoContainer}>
      <h2 className={styles.projetoTitulo}>O Projeto ColetaLink</h2>

      <img src="/src/assets/reciclagemColetaLink.png" alt="Reciclagem ColetaLink" className={styles.projetoImagem} />
      <p className={styles.projetoTexto}>
        O <strong>ColetaLink</strong> é uma solução digital criada para facilitar o descarte sustentável de resíduos sólidos, 
        conectando a população local a catadores e cooperativas de reciclagem. Nosso projeto nasceu da necessidade observada 
        no entorno do CEU Leônidas da Silva, no Parque Novo Mundo (Zona Norte de São Paulo), onde o descarte irregular de móveis,
        entulhos e eletrodomésticos ainda é um problema recorrente.
      </p>

      <p className={styles.projetoTexto}>
        Por meio de uma plataforma online, o ColetaLink torna o processo de descarte mais simples, rápido e responsável, promovendo
        não apenas a preservação ambiental, mas também a inclusão social e a geração de renda para os catadores.
      </p>

      <p className={styles.projetoTexto}>
        Nossa missão é transformar o descarte de resíduos em uma prática cidadã, acessível e sustentável, contribuindo para cidades
        mais limpas, conscientes e organizadas. 
      </p>

      <p className={styles.projetoTexto}>
        Por que o ColetaLink é importante?
      </p>
      <ul className={styles.projetoLista}>
        <li>Reduz o descarte irregular: Facilitando o descarte correto, diminuímos a poluição do solo e da água e os riscos à saúde pública.</li>
        <li>Gera renda e valoriza catadores: Fortalecemos o trabalho dos catadores, promovendo sua inclusão e reconhecimento social.</li>
        <li>Promove a sustentabilidade: Incentivamos práticas sustentáveis através da redução, reutilização e reciclagem de materiais.</li>
        <li>Educa a comunidade: Espalhamos informações importantes sobre descarte consciente e educação ambiental.</li>
      </ul>
      
      <p className={styles.projetoTexto}>
        Como funciona?
      </p>
      <ul className={styles.projetoLista}>
        <li>Identificar o tipo de resíduo que deseja descartar.</li>
        <li>Localizar catadores ou pontos de coleta próximos.</li>
        <li>Agendar a retirada dos materiais de forma prática e segura.</li>
      </ul>

      <p className={styles.projetoFraseFinal}>
        Descarte certo. Impacto positivo. Com o ColetaLink, todo mundo ganha.
      </p>
    </div>
  );
}

export default Projeto;