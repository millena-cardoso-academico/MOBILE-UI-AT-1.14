import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ListaRespostas.module.css';
import likeIcon from '../imgs/interacoes/like.png';
import responseIcon from '../imgs/interacoes/response.png';
import user2 from '../imgs/icones/user2.jpg';
import user3 from '../imgs/icones/user3.jpg';
import user4 from '../imgs/icones/user4.jpg';
import user5 from '../imgs/icones/user5.jpg';
import user6 from '../imgs/icones/user6.jpg';
import user7 from '../imgs/icones/user7.jpg';

const Resposta = ({ avatar, resposta, autor, data, curtidasInicial }) => {
  const [curtidas, setCurtidas] = useState(curtidasInicial);
  const [liked, setLiked] = useState(false);

  const handleCurtir = () => {
    if (!liked) {
      setCurtidas(curtidas + 1);
    } else {
      setCurtidas(curtidas - 1);
    }
    setLiked(!liked);
  };

  return (
    <div className={styles.resposta}>
      <img src={avatar} alt={autor} className={styles.avatar} />
      <div className={styles.textoResposta}>
        <p>{resposta}</p>
        <p><strong>{autor}</strong> | {data}</p>
      </div>
      <div className={styles.interacoes}>
        <button className={styles.likeButton} onClick={handleCurtir}>
          <img src={likeIcon} alt="Curtir" style={{ filter: liked ? 'hue-rotate(90deg)' : 'none' }} />
          {curtidas}
        </button>
        <button className={styles.responseButton}>
          <img src={responseIcon} alt="Responder" />
        </button>
      </div>
    </div>
  );
};

Resposta.propTypes = {
  avatar: PropTypes.string.isRequired,
  resposta: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  curtidasInicial: PropTypes.number.isRequired,
};

const ListaRespostas = () => {
  const respostas = [
    { avatar: user2, resposta: '"VOID" é minha fav! Tô viciada, sério...', autor: 'braindheart', data: '19 de setembro de 2024', curtidasInicial: 87 },
    { avatar: user3, resposta: 'PORTALS tá muito bom, mas ainda prefiro o K-12...', autor: 'martinzfv', data: '20 de setembro de 2024', curtidasInicial: 68 },
    { avatar: user4, resposta: '"DEATH" é icônica demais...', autor: 'iconicorangejuice', data: '20 de setembro de 2024', curtidasInicial: 102 },
    { avatar: user5, resposta: 'Achei Cry Baby mais autêntico...', autor: 'notapieceofcake', data: '21 de setembro de 2024', curtidasInicial: 83 },
    { avatar: user6, resposta: '"TUNNEL VISION" me deu arrepios...', autor: '@faeerie', data: '21 de setembro de 2024', curtidasInicial: 75 },
    { avatar: user7, resposta: '"THE CONTORTIONIST" é underrated...', autor: 'shwndtell', data: '22 de setembro de 2024', curtidasInicial: 49 }
  ];

  return (
    <div className={styles.listaRespostas}>
      {respostas.map((resposta, index) => (
        <Resposta key={index} {...resposta} />
      ))}
    </div>
  );
};

export default ListaRespostas;