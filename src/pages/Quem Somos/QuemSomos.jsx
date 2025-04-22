import s from './quemSomos.module.scss';
import imagem1 from '../../assets/unimos.png';
import imagem2 from '../../assets/incentivamos.png';
import imagem3 from '../../assets/apoiamos.png';
import imagem4 from '../../assets/transformamos.png';

export default function QuemSomos() {
  return (
    <main>
      <section className={s.QuemSomos}>
        <h1>Quem Somos?</h1>
        <div className={s.texto}>
          <p>
            O <strong>ColetaLink</strong> é uma iniciativa que nasceu com um propósito claro:
            <strong> conectar pessoas e transformar atitudes em ações sustentáveis</strong>.
          </p>
          <p>
            Acreditamos no poder da colaboração e na importância de cuidar do planeta. Por isso,
            criamos uma plataforma que aproxima <strong>quem quer doar materiais recicláveis</strong> com
            <strong> quem vive da coleta e reciclagem</strong> desses resíduos — de forma simples, rápida e solidária.
          </p>
          <p>
            Nosso objetivo vai além da coleta: queremos <strong>valorizar os catadores</strong>,
            <strong> incentivar a economia circular</strong> e <strong>estimular a consciência ambiental</strong> em nossas comunidades.
          </p>
          <p>
            O ColetaLink é feito por pessoas apaixonadas por <strong>tecnologia, sustentabilidade e inclusão social</strong>.
            Acreditamos que, juntos, podemos tornar o mundo mais limpo, justo e conectado.
          </p>
          <p>💚 Junte-se a nós e faça parte dessa mudança.</p>
        </div>

        <div className={s.containerCards}>
          <section>
            <img src={imagem1} alt="Imagem ilustrando a interação entre comunidade e catadores" />
          </section>
          <section>
            <img src={imagem2} alt="Imagem ilustrando a reciclagem e o descarte correto" />
          </section>
          <section>
            <img src={imagem3} alt="Imagem ilustrando o apoio para quem precisa" />
          </section>
          <section>
            <img src={imagem4} alt="Imagem ilustrando a transformação no mundo em atitudes com impacto" />
          </section>
        </div>
      </section>
    </main>
  );
}
