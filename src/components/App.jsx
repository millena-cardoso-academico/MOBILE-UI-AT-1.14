import { useRef } from 'react';
import Header from './Header';
import Menu from './Menu';
import TopicoPrincipal from './TopicoPrincipal';
import Tendencias from './Tendencias';
import ListaRespostas from './ListaRespostas';
import FormularioResposta from './FormularioResposta';
import styles from '../styles/App.module.css';

const App = () => {
  const formularioRef = useRef(null);

  const scrollToFormulario = () => {
    formularioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <TopicoPrincipal
            titulo="Opinião sobre o álbum PORTALS"
            subtitulo="Crybaby morreu, mas a nova Mel tá bem interessante."
            descricao="Oi, guys! O que acharam do PORTALS? Tô só o surto! Cada música tão diferente do que as dos álbuns com a Crybaby e as letras, sem condições. A Mel entregou TUDO!? Quero saber o que vocês acharam!"
            curtidas={200}
            comentarios={6}
            onResponder={scrollToFormulario}
          />
          <ListaRespostas />
          <div ref={formularioRef}>
            <FormularioResposta />
          </div>
        </div>
        <Tendencias />
      </div>
    </div>
  );
};

export default App;