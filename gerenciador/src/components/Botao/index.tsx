import React from "react";
import style from './Botao.module.scss'

interface Props {
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined ,
    onClick?: () => void
}

function Botao({onClick, type, texto}: Props) {
    return (
        <button 
            className={style.botao} 
            type={type}
            onClick={onClick}
        >
            {texto}
        </button>
    )
}

export default Botao;