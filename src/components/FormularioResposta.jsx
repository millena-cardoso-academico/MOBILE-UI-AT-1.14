import styles from "../styles/FormularioResposta.module.css";

function FormularioResposta() {
  return (
    <form className={styles.formulario}>
      <textarea placeholder="Digite sua resposta aqui..." className={styles.textarea}></textarea>
      <button className={styles.button}>Enviar Resposta</button>
    </form>
  );
}

export default FormularioResposta;