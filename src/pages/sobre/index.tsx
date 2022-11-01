import styles from "./styles.module.scss";
import Link from "next/link";

import { IoLogoGithub, IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";


//https://wa.me/qr/QN5YAAEJJIFMA1
export default function Sobre(){
    return(
        <div className={styles.sobreContainer}>
            <h1>Recursos adicionados ao <span>nextJS</span></h1>
            <ul>
                <li>typescript</li>
                <li>firebase</li>
                <li>sass</li>
                <li>react icons</li>
            </ul>
            <h2>Contatos</h2>
            <div className={styles.links}>
                <Link href="https://wa.me/qr/QN5YAAEJJIFMA1" target="_blank">
                    <IoLogoWhatsapp size={25} color="green"/>
                    <span>Whatsapp</span>
                </Link>

                <Link href="https://github.com/GBfds" target="_blank">
                    <IoLogoGithub size={25} color="#ffb800"/>
                    <span>Github</span>
                </Link>

                <Link href="" target="_blank">
                    <IoIosMail size={25} color="#fff"/>
                    <span>Gmail</span>
                </Link>
            </div>
        </div>
    )
}