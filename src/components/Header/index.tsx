import styles from "./styles.module.scss";
import Link from "next/link";

import { SingInButton } from "../SingInButton";

export function Header(){
    return(
        <header className={styles.container}>
            <div>
                <h1>Notas web</h1>
                <SingInButton/>

            </div>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/notas">
                    Suas notas
                </Link>
                <Link href="/sobre">
                    Sobre a pagina
                </Link>
            </nav>
        </header>
    )
}