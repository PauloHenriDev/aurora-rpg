import { useState } from 'react';
import './assets/Components/Header/Header.scss';

function Header(){

    const [open, setOpen] = useState(""); //primeiro negocio é o valor, e o set é para mudar o valor, e o useState é o valor que começa, nesse caso vazio
    const [abrir, setAbrir] = useState("");
    const navBar = document.querySelector(".navBar");
    const expandir = () => {
        if(open === "") {
            setOpen("expandir")
            setAbrir("abrir")

            setTimeout(() => {
                setOpen("")
                navBar.style.height = "42px"
            },300)
            
        } if(navBar.style.height === "42px") {
            setOpen("fechado")
            setAbrir("")
            
            setTimeout(() => {
                setOpen("")
                navBar.style.height = "14px"
            },300)
        }
    };

    const search = (e) => {
        e.stopPropagation()
    }

    return(
        <header className={"navBar " + open} onClick={expandir}>
            <input className={"src_bar " + abrir} type="text" placeholder="escreva aqui" onClick={search} />
        </header>
    );
}    

export default Header