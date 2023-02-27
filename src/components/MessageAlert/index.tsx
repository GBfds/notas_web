import styles from "./styles.module.scss"

export function MessageAlert(){
    return(
        <div className={styles.alert}>
            <span>A página está em manutenção e pode apresentar mal funcionamento</span>
        </div>
    )
}