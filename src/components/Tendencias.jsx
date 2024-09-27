import PropTypes from 'prop-types';
import styles from '../styles/Tendencias.module.css';
import likeIcon from '../imgs/interacoes/like.png';
import responseIcon from '../imgs/interacoes/response.png';

const TendenciaItem = ({ titulo, autor, curtidasInicial, respostasInicial }) => {
  return (
    <div className={styles.item}>
      <p><strong>{titulo}</strong></p>
      <p>{autor}</p>
      <div className={styles.interacoes}>
        <button className={styles.likeButton}>
          <img src={likeIcon} alt="Curtir" />
          {curtidasInicial}
        </button>
        <button className={styles.responseButton}>
          <img src={responseIcon} alt="Responder" />
          {respostasInicial}
        </button>
      </div>
    </div>
  );
};

TendenciaItem.propTypes = {
  titulo: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  curtidasInicial: PropTypes.number.isRequired,
  respostasInicial: PropTypes.number.isRequired,
};

const Tendencias = () => {
  const recentes = [
    { titulo: 'Taylor Swift jogou aquele shade...', autor: 'smallestswiftie', curtidasInicial: 28, respostasInicial: 5 },
    { titulo: 'SZA largou Snooze...', autor: 'slaylikesza', curtidasInicial: 45, respostasInicial: 3 },
    { titulo: 'Miley Cyrus soltou aquele documentário...', autor: 'Mileysmiley', curtidasInicial: 32, respostasInicial: 2 },
    { titulo: 'Lady Gaga postou aquelas fotos...', autor: 'LittleMonsterxx', curtidasInicial: 50, respostasInicial: 8 },
    { titulo: 'Beyoncé acabou com todos nós...', autor: 'BeyHiveBuzz', curtidasInicial: 38, respostasInicial: 4 }
  ];

  const maisRespondidos = [
    { titulo: 'Taylor Swift de volta no Grammy?', autor: 'still–bejeweled', curtidasInicial: 643, respostasInicial: 642 },
    { titulo: 'Vocês já tão ouvindo Midnights?', autor: 'midnights_fortnights', curtidasInicial: 589, respostasInicial: 598 },
    { titulo: 'Ariana Grande voltando com tudo...', autor: 'Arianator', curtidasInicial: 521, respostasInicial: 523 },
    { titulo: 'Rihanna no Super Bowl...', autor: 'fentyFam', curtidasInicial: 470, respostasInicial: 472 },
    { titulo: 'Lana Del Rey lançou Tunnel...', autor: 'lanaparadise', curtidasInicial: 429, respostasInicial: 431 }
  ];

  const maisCurtidos = [
    { titulo: 'Beyoncé quebrou mais um recorde...', autor: 'QueenBTea', curtidasInicial: 912, respostasInicial: 0 },
    { titulo: 'Billie Eilish em What Was I Made For?', autor: 'eilish_', curtidasInicial: 834, respostasInicial: 0 },
    { titulo: 'Lady Gaga e o impacto de Chromatica...', autor: 'dontcallmyname', curtidasInicial: 803, respostasInicial: 0 },
    { titulo: 'Lorde voltando com tudo!', autor: '@LordeMagic', curtidasInicial: 781, respostasInicial: 0 },
    { titulo: 'A Miley Cyrus em Endless Summer...', autor: 'malibu_stateof_mind', curtidasInicial: 749, respostasInicial: 0 }
  ];

  return (
    <div className={styles.tendencias}>
      <div className={styles.categoria}>
        <h2 className={styles.subtitulo}>Tópicos Mais Recentes</h2>
        {recentes.map((topico, index) => (
          <TendenciaItem key={index} {...topico} />
        ))}
      </div>
      <div className={styles.categoria}>
        <h2 className={styles.subtitulo}>Tópicos Mais Respondidos</h2>
        {maisRespondidos.map((topico, index) => (
          <TendenciaItem key={index} {...topico} />
        ))}
      </div>
      <div className={styles.categoria}>
        <h2 className={styles.subtitulo}>Tópicos Mais Curtidos</h2>
        {maisCurtidos.map((topico, index) => (
          <TendenciaItem key={index} {...topico} />
        ))}
      </div>
    </div>
  );
};

export default Tendencias;