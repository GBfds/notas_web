import styles from "./styles.module.scss";

import { StaticPage } from "../../components/StaticPage";
import { useSession } from "next-auth/react";

import {useState} from "react"

import Head from "next/head";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Notas(){
    const {data: session} = useSession();

    const [novaTarefa, setNovaTarefa] = useState("");
    const [edit, setEdit] = useState(false)

    function deleteNota(){
        alert("teste dlt")

    }

    function createNota(e){
        e.preventDefault();
        alert("teste crt")
    }

    function editNota(){
        setEdit(true)
    }
    function cancelEdit(){
        setEdit(false)
    }

    if(!session){
        return(
            <div className={styles.containerAalertLogin}>
                <h1>Você precisa estar logado para ver suas anotaçôes</h1>
            </div>
        )
    }

    return(
        <>
        <Head>
            <title>Suas notas - Notas web</title>
        </Head>
        <StaticPage/>
        <main className={styles.container}>
            <div className={styles.contentForm}>
                {edit ? (<label  className={styles.edit}>Você está editando uma anotação:</label>)
                : (<label>Digite uma nova anotação:</label>)}
                {edit && (<button className={styles.cancelEdit} onClick={cancelEdit}>cancelar</button>)}                
                <form onSubmit={createNota}>
                    <input 
                    type="text"
                    placeholder="digite sua tarefa"
                    value={novaTarefa}
                    onChange={(e)=> setNovaTarefa(e.target.value)}

                    />

                    <button type="submit">
                        <AiOutlinePlus size={30}/>
                    </button>
                </form>


            </div>

            <div className={styles.contentTarefas}>
                <article>
                    <div className={styles.tarefa}>
                        <h2>Implementar conexão com usuarios</h2>
                    </div>

                    <div className={styles.actions}>
                        <button onClick={editNota}>
                            <FiEdit size={20} color="#ffb800"/>
                            <span>Editar</span>
                        </button>

                        <button onClick={deleteNota}>
                            <FiTrash2 size={20} color="red"/>
                            <span>Deletar</span>
                        </button>
                    </div>
                </article>

                <article>
                    <div className={styles.tarefa}>
                        <h2>Implimentar banco de dados</h2>
                    </div>

                    <div className={styles.actions}>
                        <button>
                            <FiEdit size={20} color="#ffb800"/>
                            <span>Editar</span>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="red"/>
                            <span>Deletar</span>
                        </button>
                    </div>
                </article>
            </div>
        </main>
        </>
    )
}