import Image from "next/image";
import constructImg from "../../../public/images/icone-obra-emandamento.png";
import styles from "./styles.module.scss";

export default function Notas(){
    return(
        <main className={styles.container}>
            <h1>A pagina está em desenvolvimento...</h1>

            <Image src={constructImg} alt="em constução"/> 
        </main>
    )
}