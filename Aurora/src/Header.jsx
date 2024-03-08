import { useState } from 'react';
import './testefolhadeestilo.scss'

function Header(){

    const [open, setOpen] = useState(""); //primeiro negocio é o valor, e o set é para mudar o valor, e o useState é o valor que começa, nesse caso vazio
    const [abrir, setAbrir] = useState("");
    const expandir = () => {
        if(open === "expandir") {
            setOpen("fechado")
            setAbrir("")
            
        } else {
            setOpen("expandir")
            setAbrir("abrir")
        }
    }

    const search = (e) => {
        e.stopPropagation()
    }



    // const fechar = () => {
    //     if(open === expandir) {
    //         setFechar("")
    //     } else {
    //         setFechar("fechar")
    //     }
    // }
 //"src_bar"
 //{"src_bar " + fechar}
    return(
        <header className={"navBar " + open} onClick={expandir}>
            <input className={"src_bar " + abrir} type="text" placeholder="escreva aqui" onClick={search} />
        </header>
    );
}    

export default Header