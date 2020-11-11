import React from "react"
import Medium from "../assets/medium-brands.svg"
import Linkedin from "../assets/linkedin-brands.svg"
import Instagram from "../assets/instagram-square-brands.svg"

function Footer() {
    return <footer>
        <div>
            <a href="https://medium.com/@linainfratech">
                <img className="footer-icons" src={Medium} />
            </a>
            <a href="https://www.linkedin.com/company/lina-pay/">
                <img className="footer-icons" src={Linkedin} />
            </a>
            <a href="https://www.instagram.com/lina.infratech/">
                <img className="footer-icons" src={Instagram} />
            </a>
            <a href="/politica" className="linkpolitica">Política de Privacidade</a>
        </div>
    </footer>
}

export default Footer;