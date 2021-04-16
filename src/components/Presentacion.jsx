import React from 'react';
import perfilIMG from '../assets/img/perfil.png';

const Presentacion = ()=>(
    <div className="presentacion">
        <div className="presentacion-nombre">
            <h1>Jesús Rodrigo<br/>Pérez Delgado</h1>
            <a href="../cv.pdf" download="cv.pdf" className="btn-red">Descargar CV</a>
        </div>
        <div className="presentacion-img">
        <img src={perfilIMG} alt="imágen de perfil" width="300px"/>
            <p>Desarrollador y diseñador web fullStack
                ,18 años.<br/>
                México, CDMX.
            </p>
        </div>
    </div>
);

export default Presentacion;