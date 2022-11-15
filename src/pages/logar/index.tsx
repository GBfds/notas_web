import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

import styles from "./styles.module.scss";

export default function Logar(){
    return(
        <>
        <Head>
            <title>Login - notas web</title>
        </Head>
        <div className={styles.container}>
            <h1>você precisa se conectar a uma conta para ver suas tarefas</h1>
        </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) =>{
    const session = await getSession({req});

    if (session){
        return{
            redirect:{
                destination:"/notas",
                permanent: false
            }
        }
    }
    return{
        props:{
            
        }
    }
}