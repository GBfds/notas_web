import Head from "next/head";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
    <Head>
      <title>Home - notas web</title>
    </Head>
    <div className={styles.homeContent}>
      <h1>Esse é  um projeto de portifolio</h1>
      <h2>Um projeto simples usando <span>NextJS</span>, ele se conecta com o banco de dados não relacional <span>FireBase </span> para salvar suas notas online</h2>
    </div>
    </>
  )
}
