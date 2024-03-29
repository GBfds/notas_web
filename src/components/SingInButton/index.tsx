import { signIn, signOut, useSession} from "next-auth/client";
//import React from "react";


import styles from "./styles.module.scss";
import {FaGoogle} from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";



export function SingInButton(){
    const [session] = useSession();
    const userName = session?.user.name.split(" ", 1)
    

    return !session ? (
        <button
        type="button"
        className={styles.singOutButton}
        onClick={()=> signIn("google")}
        >
            <FaGoogle size={13}/>
            Entrar com google
        </button>

    ) : (
        <button
        type="button"
        className={styles.singInButton}
        onClick={() => signOut()}
        >
            <FaGoogle size={13} color="red"/>
            <p>Bem vindo {userName}</p>
            <FiXCircle size={20}/>
        </button>
    )
}
