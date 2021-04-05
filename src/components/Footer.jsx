import React from 'react';
import {ReactComponent as FacebookIcon} from '../assets/SVG/facebook.svg';
import {ReactComponent as InstagramIcon} from '../assets/SVG/instagram.svg';
import {ReactComponent as GithubIcon} from '../assets/SVG/github.svg';
import {ReactComponent as GmailIcon} from '../assets/SVG/gmail.svg';
import {ReactComponent as WhatsappIcon} from '../assets/SVG/whatsApp.svg';


const Footer = ()=>(
    <footer className="footer">
        <p>Todos los derechos reservados por el autor</p>
        <div className="footer-contacto">
            <FacebookIcon width="40px" style={{margin:'10px', cursor: 'pointer'}}/>
            <InstagramIcon width="40px" style={{margin:'10px', cursor: 'pointer'}}/>
            <GithubIcon width="40px" style={{margin:'10px', cursor: 'pointer'}}/>
            <GmailIcon width="40px" style={{margin:'10px', cursor: 'pointer'}}/>
            <WhatsappIcon width="40px" style={{margin:'10px', cursor: 'pointer'}}/>
        </div>
    </footer>
);

export default Footer;