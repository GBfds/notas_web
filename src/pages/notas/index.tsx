import styles from "./styles.module.scss";

import { getSession, useSession } from "next-auth/react";
import firebase from "../../services/fireBaseConection";
import { GetServerSideProps } from "next";
import {format} from "date-fns";

import {useState, FormEvent} from "react"

import Head from "next/head";

import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";

type Data ={
    id: string;
    tarefa: string;
    user: string;
    userEmail: string;
    created: Date | string;
    createdFormated: string;
}

interface DataProps{
    data: string
}

export default function Notas({data}: DataProps){
    const {data: session} = useSession();

    const [novaTarefa, setNovaTarefa] = useState("");
    const [edit, setEdit] = useState<Data | null>(null);
    const [tarefas, setTarefas] = useState<Data[]>(JSON.parse(data));

    async function deleteNota(id){
       firebase.firestore().collection("notasWeb")
       .doc(id)
       .delete()
       .then(()=>{
        let tarefaDelete = tarefas.filter((item)=> {
            return(item.id !== id)
        })

        setTarefas(tarefaDelete)
       })
       .catch(()=>{
        alert("erro ao deletar")
       })
    }

    async function createNota(e: FormEvent){
        e.preventDefault();
        if (novaTarefa ===""){
            alert("Preencha o campo de tarefa")
            return;
        }

        if(edit){
            firebase.firestore().collection("notasWeb")
            .doc(edit.id)
            .update({
                tarefa: novaTarefa
            })
            .then(()=>{
                let contentTarefas = tarefas
                let index = tarefas.findIndex(item=> item.id === edit.id)
                contentTarefas[index].tarefa = novaTarefa

                setTarefas(contentTarefas);
                setNovaTarefa("");
                setEdit(null);
            })

            return;
        }

        await firebase.firestore().collection("notasWeb")
        .add({
            tarefa: novaTarefa,
            user: session.user.name,
            userEmail: session.user.email,
            created: new Date()
        })
        .then((doc)=>{

            let tasks = {
                id: doc.id,
                tarefa: novaTarefa,
                user: session.user.name,
                userEmail: session.user.email,
                created: new Date(),
                createdFormated: format(new Date(), "dd MMMM yyyy")
            }

            setTarefas([...tarefas, tasks]);
            setNovaTarefa("");
        })
        .catch(()=>{
            alert("erro")
        })
    }

    function editNota(trf : Data){
        setNovaTarefa(trf.tarefa)
        setEdit(trf)
    }
    function cancelEdit(){
        setNovaTarefa("")
        setEdit(null)
    }


    return(
        <>
        <Head>
            <title>Suas notas - Notas web</title>
        </Head>
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
                        {edit ? (
                            <AiFillEdit size={30}/>
                        )
                        : (
                            <AiOutlinePlus size={30}/>
                        )}
                    </button>
                </form>


            </div>

            <div className={styles.contentTarefas}>
                {tarefas.map(trf => (
                <article key={trf.id}>
                    <div className={styles.tarefa}>
                        <h2>{trf.tarefa}</h2>
                        <time>{trf.createdFormated}</time>
                    </div>

                    <div className={styles.actions}>
                        <button onClick={() => editNota(trf)}>
                            <FiEdit size={20} color="#ffb800"/>
                            <span>Editar</span>
                        </button>

                        <button onClick={() => deleteNota(trf.id)}>
                            <FiTrash2 size={20} color="red"/>
                            <span>Deletar</span>
                        </button>
                    </div>
                </article>
                ))}
            </div>
        </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) =>{
    const session = await getSession({req});

    if (!session){
        return{
            redirect:{
                destination:"/logar",
                permanent: false
            }
        }
    }

    const tasks = await firebase.firestore().collection("notasWeb")
    .where("userEmail", "==", session.user.email)
    .orderBy("created", "asc")
    .get()

    const data = JSON.stringify(tasks.docs.map(u => {
        return{
            id: u.id,
            createdFormated: format(u.data().created.toDate(), "dd MMMM yyyy"),
            ...u.data(),
        }
    }))

    //console.log(JSON.parse(data));
    

    return{
        props:{
            data
        }
    }
}