import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TopicoPrincipal.module.css';
import likeIcon from '../imgs/interacoes/like.png';
import responseIcon from '../imgs/interacoes/response.png';
import avatar from '../imgs/icones/user1.jpg';

const TopicoPrincipal = ({ titulo, subtitulo, descricao, curtidas, comentarios, onResponder }) => {
  const [liked, setLiked] = useState(false);
  const [curtidasCount, setCurtidasCount] = useState(curtidas);

  const handleCurtir = () => {
    setCurtidasCount(liked ? curtidasCount - 1 : curtidasCount + 1);
    setLiked(!liked);
  };

  return (
    <div className={styles.topicoPrincipal}>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <div className={styles.textContainer}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <h2 className={styles.subtitulo}>{subtitulo}</h2>
        <p className={styles.descricao}>{descricao}</p>
        <div className={styles.interacoes}>
          <button className={styles.likeButton} onClick={handleCurtir}>
            <img src={likeIcon} alt="Curtir" />
            {curtidasCount}
          </button>
          <button className={styles.responseButton} onClick={onResponder}>
            <img src={responseIcon} alt="Responder" />
            {comentarios}
          </button>
        </div>
      </div>
    </div>
  );
};

TopicoPrincipal.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  curtidas: PropTypes.number.isRequired,
  comentarios: PropTypes.number.isRequired,
  onResponder: PropTypes.func.isRequired,
};

export default TopicoPrincipal;