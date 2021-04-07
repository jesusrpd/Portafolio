import React from 'react';
import video from '../assets/video/Secuencia.mp4';
import jaredIMG from '../assets/img/jaredportada.png';
import portadaRedox from '../assets/img/portaredox.png';

const Portafolio = ()=>(
    <div className="portafolio">
        <video className="portafolio-video" src={video} autoPlay loop></video>
        <div className="portafolio-content">
            <h2>Portafolio</h2>
            <div className="portafolio-section">
                <h3>Desarrollo web</h3>
                <div className="portafolio-trabajos-content">
                    <div className="trabajo">
                        <img className="trabajo-img" src={jaredIMG} alt="" width="500px"/>
                        <button className="trabajo-btn btn-red">Visitar</button>
                    </div>
                    <div className="trabajo">
                        <img className="trabajo-img" src={jaredIMG} alt="" width="500px"/>
                        <button className="trabajo-btn btn-red">Visitar</button>
                    </div>
                </div>
            </div>
            <div className="portafolio-section">
                <h3>Diseño</h3>
                <div className="portafolio-trabajos-content">
                    <div className="trabajo">
                        <img className="trabajo-img" src={portadaRedox} alt="" width="500px"/>
                        <button className="trabajo-btn btn-red">Visitar</button>
                    </div>
                    <div className="trabajo">
                        <img className="trabajo-img" src={jaredIMG} alt="" width="500px"/>
                        <button className="trabajo-btn btn-red">Visitar</button>
                    </div>
                    <div className="trabajo">
                        <img className="trabajo-img" src={jaredIMG} alt="" width="500px"/>
                        <button className="trabajo-btn btn-red">Visitar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Portafolio;