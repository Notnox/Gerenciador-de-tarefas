import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss'

function Lista({ tarefas }: { tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((t, index) => (
                    <Item 
                        key={index}
                        {...t}
                    />
                ))}
            </ul>
        </aside>
    )    
} 

export default Lista;