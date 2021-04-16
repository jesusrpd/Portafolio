import React from 'react';
import video from '../assets/video/Secuencia.mp4';
import SeccionDiseño from '../components/SeccionDiseño';
import SeccionWeb from '../components/SeccionWeb';

const Portafolio = ()=>(

    <div className="portafolio">
        <video className="portafolio-video" src={video} autoPlay loop></video>
        <div className="portafolio-content">
            <h2>Portafolio</h2>
            <SeccionWeb/>
            <SeccionDiseño/>
        </div>
    </div>
);

export default Portafolio;