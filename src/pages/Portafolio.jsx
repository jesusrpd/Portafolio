import React from 'react';
import video from '../assets/video/Secuencia.mp4';
import jaredIMG from '../assets/img/jaredportada.png';
import portadaRedox from '../assets/img/portaredox.png';
import cottonPortada from '../assets/img/cottonportada.png';
import montañaPortada from '../assets/img/montañaportada.png';
import webShopPortada from '../assets/img/webportada.png';

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
                        <a rel="noreferrer" target="_blank" href="https://www.jareds-landscape-maintenance.com" className="trabajo-btn btn-red">Visitar</a>
                    </div>
                    <div className="trabajo">
                        <img className="trabajo-img" src={webShopPortada} alt="" width="500px"/>
                        <a rel="noreferrer" target="_blank" href="https://shopwebapi.herokuapp.com" className="trabajo-btn btn-red">Visitar</a>
                    </div>
                </div>
            </div>
            <div className="portafolio-section">
                <h3>Diseño</h3>
                <div className="portafolio-trabajos-content">
                    <div className="trabajo">
                        <img className="trabajo-img" src={portadaRedox} alt="" width="500px"/>
                        <a rel="noreferrer" target="_blank" href="https://www.behance.net/gallery/116996695/Redox-Design" className="trabajo-btn btn-red">Visitar</a>
                    </div>
                    <div className="trabajo">
                        <img className="trabajo-img" src={cottonPortada} alt="" width="500px"/>
                        <a rel="noreferrer" href="https://www.behance.net/gallery/109563173/COTTON" target="_blank"  className="trabajo-btn btn-red">Visitar</a>
                    </div>
                    <div className="trabajo">
                        <img className="trabajo-img" src={montañaPortada} alt="" width="500px"/>
                        <a rel="noreferrer" href="https://www.behance.net/gallery/116997413/DIA-NOCHE" target="_blank" className="trabajo-btn btn-red">Visitar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Portafolio;