import React from 'react';
import reactIcon from '../assets/SVG/react.svg';
import afterIcon from '../assets/SVG/after.svg';
import bootstrapIcon from '../assets/SVG/bootstrap.svg';
import cssIcon from '../assets/SVG/css.svg';
import expressIcon from '../assets/SVG/express.svg';
import githubIcon from '../assets/SVG/github.svg';
import htmlIcon from '../assets/SVG/html.svg';
import ilustraitorIcon from '../assets/SVG/ilustraitor.svg';
import jsIcon from '../assets/SVG/js.svg';
import mongoIcon from '../assets/SVG/mongo.svg';
import nodeIcon from '../assets/SVG/node.svg';
import photoshopIcon from '../assets/SVG/photoshop.svg';
import premiereIcon from '../assets/SVG/premiere.svg';
import pythonIcon from '../assets/SVG/python.svg';
import sassIcon from '../assets/SVG/sass.svg'; 
import xdIcon from '../assets/SVG/xd.svg';

const Habilidaddes = ()=>(
    <div className="habilidades">
        <h2>Habilidades</h2>  
        <div className="habilidades-content">  
            <div className="habilidad">
                <img src={htmlIcon} alt="react"/>
                <p>HTML5</p>
            </div>
            <div className="habilidad">
                <img src={cssIcon} alt="react"/>
                <p>CSS3</p>
            </div>
            <div className="habilidad">
                <img src={jsIcon} alt="react"/>
                <p>Java Script</p>
            </div>
            <div className="habilidad">
                <img src={reactIcon} alt="react"/>
                <p>React</p>
            </div>
            <div className="habilidad">
                <img src={sassIcon} alt="react"/>
                <p>Sass</p>
            </div>
            <div className="habilidad">
                <img src={bootstrapIcon} alt="react"/>
                <p>Bootstrap</p>
            </div>
            <div className="habilidad">
                <img src={nodeIcon} alt="react"/>
                <p>Node Js</p>
            </div>
            <div className="habilidad">
                <img src={expressIcon} alt="react"/>
                <p>Express</p>
            </div>
            <div className="habilidad">
                <img src={mongoIcon} alt="react"/>
                <p>Mongo DB</p>
            </div>
            <div className="habilidad">
                <img src={pythonIcon} alt="react"/>
                <p>Python</p>
            </div>
            <div className="habilidad">
                <img src={githubIcon} alt="react"/>
                <p>Git Hub</p>
            </div>
            <div className="habilidad">
                <img src={ilustraitorIcon} alt="react"/>
                <p>Adobe Ilustraitro</p>
            </div>
            <div className="habilidad">
                <img src={photoshopIcon} alt="react"/>
                <p>Adobe Photoshop</p>
            </div>
            <div className="habilidad">
                <img src={afterIcon} alt="react"/>
                <p>Affter Effects</p>
            </div>
            <div className="habilidad">
                <img src={premiereIcon} alt="react"/>
                <p>Adobe Premiere</p>
            </div>
            <div className="habilidad">
                <img src={xdIcon} alt="react"/>
                <p>Adobe Xd</p>
            </div>
        </div>
    </div>
);

export default Habilidaddes;