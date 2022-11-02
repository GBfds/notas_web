import styles from "./styles.module.scss";
import { StaticPage } from "../../components/StaticPage";

import {useState} from "react"
import Head from "next/head";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function notas(){
    const [novaTarefa, setNovaTarefa] = useState("");

    return(
        <>
        <Head>
            <title>Suas notas - Notas web</title>
        </Head>
        <StaticPage/>
        <main className={styles.container}>
            <div className={styles.contentForm}>
                <label>Digite sua nova tarefa:</label>
                <form>
                    <input 
                    type="text"
                    placeholder="digite sua tarefa"
                    value={novaTarefa}
                    onChange={(e)=> setNovaTarefa(e.target.value)}

                    />

                    <button>
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