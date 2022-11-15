import styles from "./styles.module.scss";
import Link from "next/link";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import Head from "next/head";


//https://wa.me/qr/QN5YAAEJJIFMA1
export default function Sobre(){
    return(
        <>
        <Head>
            <title>sobre - notas web</title>
        </Head>
        <div className={styles.sobreContainer}>
            <h1>Recursos adicionados ao <span>nextJS</span></h1>
            <ul>
                <li>typescript</li>
                <li>firebase</li>
                <li>nextAuth</li>
                <li>sass</li>
            </ul>
            <h2>Contatos</h2>
            <div className={styles.links}>
                <Link href="https://github.com/GBfds/notas_web" target="_blank">
                    <IoLogoGithub size={25} color="#ffb800"/>
                    <span>Repositorio desse projeto</span>
                </Link>

                <Link href="https://github.com/GBfds" target="_blank">
                    <IoLogoGithub size={25} color="#ffb800"/>
                    <span>Meu Github</span>
                </Link>

                <Link href="https://www.linkedin.com/in/gabriel-fernandes-245743220/" target="_blank">
                    <IoLogoLinkedin size={25} color="#0e76a8"/>
                    <span>Meu linkedin</span>
                </Link>
            </div>
        </div>
        </>
    )
}