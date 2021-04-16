import React from 'react';

const Card = ({urlImg, nombre, link})=>(
    <div className="trabajo">
        <img className="trabajo-img" src={urlImg} alt={nombre} width="500px"/>
        <a rel="noreferrer" target="_blank" href={link} className="trabajo-btn btn-red">Visitar</a>
    </div>
);

export default Card;