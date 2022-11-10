import { FaSearch } from 'react-icons/fa';

export default function Nav(){
    return (
        <div>
        <nav>
        <div className="logo">
            <a href="/"><img src="/images/logo2.png" alt="Logo" /></a>
            <h4>Argul y Cia</h4>
        </div>
        <ul className="navlinks">
            <li>
                <a href="/info">Info</a>
            </li>
            <li>
                <a href="/inyectoras">Inyectoras</a>
            </li>
            <li>
                <ul className="navsearch">
                    <div className="div-center">
                        <input type="text" className="search-input" placeholder="Ingresar" />
                        <button type="button" className="nav-btn"><FaSearch /></button>
                    </div>
                </ul>
                <button type="button" className="menu-btn"></button>
            </li>
        </ul>
        <button type="button" className="burger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
    </nav>
    </div>
    )
}