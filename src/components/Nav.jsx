import React from 'react';
import inicialesIMG from '../assets/SVG/iniciales.svg';

const Nav = ()=>(
    <nav className="nav">
        <img src={inicialesIMG} width="50px" alt="Iniciales de mi nombre"/>
        <ul>
            <li>
                <a className="nav-link" href="#">Sobre mí</a>
            </li>
            <li>
                <a className="nav-link" href="#">Portafolio</a>
            </li>
            <li>
                <a className="nav-link" href="#">Habilidades</a>
            </li>
        </ul>
    </nav>
);

export default Nav;