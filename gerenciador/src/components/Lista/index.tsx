import React from "react";

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((t, index) => (
                    <li key={index}>
                        <h3>{t.tarefa}</h3>
                        <span>{t.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )    
} 

export default Lista;