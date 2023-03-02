import styles from "./styles.module.scss"

export function MessageAlert(){
    return(
        <div className={styles.alert}>
            <span>A página está em desenvolvimento e pode apresentar Erros</span>
        </div>
    )
}