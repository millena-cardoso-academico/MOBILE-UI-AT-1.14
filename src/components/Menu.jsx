import { useState } from 'react';
import styles from '../styles/Menu.module.css';


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={`${styles.menuItems} ${isOpen ? styles.open : ''}`}>
        <a href="#inicio" className={styles.menuItem}>Início</a>
        <a href="#albuns" className={styles.menuItem}>Álbuns e Lançamentos</a>
        <a href="#generos" className={styles.menuItem}>Gêneros e Estilos</a>
        <a href="#shows" className={styles.menuItem}>Shows e Turnês</a>
        <a href="#sobre" className={styles.menuItem}>Sobre</a>
        <a href="#contato" className={styles.menuItem}>Contato</a>
      </div>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Menu;