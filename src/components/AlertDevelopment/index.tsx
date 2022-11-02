import styles from "./styles.module.scss";

export function AlertDevelopment(){
    return(
        <div className={styles.alert}>
            <span>aviso:</span>
            <p>a pagina está em desenvolvimento, algumas funções podem não estar desponiveis</p>
        </div>
    )
}