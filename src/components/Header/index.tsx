import styles from "./styles.module.scss";
import Link from "next/link";

export function Header(){
    return(
        <header className={styles.container}>
            <div>
                <h1>Notas web</h1>

            </div>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/construcao">
                    Suas notas
                </Link>
                <Link href="/sobre">
                    Sobre a pagina
                </Link>
            </nav>
        </header>
    )
}