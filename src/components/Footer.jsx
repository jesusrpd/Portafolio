import React from 'react';
import {ReactComponent as FacebookIcon} from '../assets/SVG/facebook.svg';
import {ReactComponent as InstagramIcon} from '../assets/SVG/instagram.svg';
import {ReactComponent as GithubIcon} from '../assets/SVG/github.svg';
import {ReactComponent as GmailIcon} from '../assets/SVG/gmail.svg';
import {ReactComponent as WhatsappIcon} from '../assets/SVG/whatsApp.svg';
import {ReactComponent as LinkedinIcon} from '../assets/SVG/linkedin.svg';

const Footer = ()=>(
    <footer className="footer">
        <div className="footer-info">
            <p>Todos los derechos reservados por el autor.</p>
            <p>jesusrodrigo881@gmail.com</p>
            <p>México, CDMX.</p>
        </div>
        <div className="footer-contacto">
            <a href="https://www.facebook.com/profile.php?id=100008217585249" rel="noreferrer" target="_blank">
                <FacebookIcon className="icon-footer"/>
            </a>
            <a href="https://www.instagram.com/redox_design" rel="noreferrer" target="_blank">
                <InstagramIcon className="icon-footer"/>
            </a>
            <a href="https://github.com/jesusrpd" rel="noreferrer" target="_blank">
                <GithubIcon className="icon-footer"/>
            </a>
            <a href="mailto:jesusrodrigo881@gmail.com" rel="noreferrer" target="_blank">
                <GmailIcon className="icon-footer"/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5537046181" rel="noreferrer" target="_blank">
                <WhatsappIcon className="icon-footer"/>
            </a>
            <a href="https://www.linkedin.com/in/jesus-rodrigo-perez-delgado-44855b177/" rel="noreferrer" target="_blank">
                <LinkedinIcon className="icon-footer"/>
            </a>
        </div>
    </footer>
);

export default Footer;