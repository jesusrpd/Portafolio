import React from 'react';
import perfilIMG from '../assets/img/perfil.png';

const Presentacion = ()=>(
    <div className="presentacion">
        <div className="presentacion-nombre">
            <h1>Jesús Rodrigo<br/>Pérez Delgado</h1>
            <a href="https://doc-10-4s-docs.googleusercontent.com/docs/securesc/kvt4jookj2oahditnhlmgdhob1gjthdu/nkv3ff0fgqnmijr2rlraaeaqj4hvn094/1618618725000/06323748094289428561/06323748094289428561/1Olu_Ze6o_OL1uJP5yDq3g0kydCT9Dx-h?e=download&authuser=0" download className="btn-red">Descargar CV</a>
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