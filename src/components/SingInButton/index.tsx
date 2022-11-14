import React from "react";
import {useSession, signIn, signOut} from "next-auth/react";

import styles from "./styles.module.scss";
import {FaGoogle} from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";


export function SingInButton(){

    const {data: session} = useSession();
    

    return session ? (
        <button
        type="button"
        className={styles.singInButton}
        onClick={() => signOut()}
        >
            <FaGoogle size={13} color="red"/>
            Bem vindo!
            <FiXCircle size={20}/>
        </button>
    ) : (
        <button
        type="button"
        className={styles.singOutButton}
        onClick={()=> signIn()}
        >
            <FaGoogle size={13}/>
            Entrar com google
        </button>
    )
}