import React, { useState } from 'react';
import inicialesIMG from '../assets/SVG/iniciales.svg';
import {Link} from 'react-router-dom';

const Nav = ()=>{

    const [tab, setTab] = useState(0);

    const handleTab = i =>{
        setTab(i);
    };

    return(
        <nav className="nav">
            <img src={inicialesIMG} width="50px" alt="Iniciales de mi nombre"/>
            <ul>
                <li>
                    <Link to="/sobremi" onClick={()=> handleTab(0)} className={tab === 0 ? "nav-link tab": "nav-link"} href="#">Sobre mí</Link>
                </li>
                <li>
                    <Link to="/portafolio" onClick={()=> handleTab(1)} className={tab === 1 ? "nav-link tab": "nav-link"} href="#">Portafolio</Link>
                </li>
                <li>
                    <Link to="/habilidades" onClick={()=> handleTab(2)} className={tab === 2 ? "nav-link tab": "nav-link"} href="#">Habilidades</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;