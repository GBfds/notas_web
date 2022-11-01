import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContent}>
      <h1>Esse é  um projeto de portifolio</h1>
      <h2>Um projeto simples usando <span>NextJS</span>, ele se conecta com o banco de dados não relacional <span>FireBase </span> para salvar suas notas online</h2>
      <h3>Ainda é um projeto simples mas aos poucos irei o melhorando...</h3>
    </div>
  )
}
