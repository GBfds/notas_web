import styles from "./styles.module.scss";

export function StaticPage(){
    return(
        <div className={styles.alert}>
            <span>aviso:</span>
            <p>Pagina estatica, suas funcionalidades estão indisponiveis</p>
        </div>
    )
}