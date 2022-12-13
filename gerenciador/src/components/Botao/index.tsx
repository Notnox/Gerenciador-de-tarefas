import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{ 
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined ,
    onClick?: () => void
    }> {
    render() {
        const { texto, type = "button", onClick } = this.props;
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
}

export default Botao;