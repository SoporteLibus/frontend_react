import { FcSearch } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useRef } from 'react';

export default function Nav(){
    const burgerRef = useRef();
    const navRef = useRef();
    const setBurger = () => {
        burgerRef.current.classList.toggle("active");
        navRef.current.classList.toggle("nav-active");
    }
    const navlinks = document.querySelectorAll('.navlinks li');

    navlinks.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation='';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });

    return (
        <div>
        <nav>
        <div className="logo">
            <Link to="/"><img src="/images/logo2.png" alt="Logo Argul" /></Link>
            <h4>Argul y Cia</h4>
        </div>
        <ul className="navlinks" ref={navRef} >
            <li>
                <Link to="/info">Info</Link>
            </li>
            <li>
                <Link to="/inyectoras">Inyectoras</Link>
            </li>
            <li>
                <ul className="navsearch">
                    <div className="div-center">
                        <input type="text" className="search-input" placeholder="Ingresar" />
                        <button type="button" className="nav-btn"><FcSearch /></button>
                    </div>
                </ul>
                <Link to="/search"><FcSearch /></Link>
            </li>
        </ul>
        <button ref={burgerRef} className="burger" onClick={setBurger} >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
    </nav>
    </div>
    )
}