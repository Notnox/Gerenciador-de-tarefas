import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{ 
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined }
    > {
    render() {
        const { texto, type = "button" } = this.props;
        return (
            <button className={style.botao} type={type}>
                {texto}
            </button>
        )
    }
}

export default Botao;