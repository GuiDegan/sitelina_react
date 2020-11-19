import React from "react"
import Medium from "../assets/medium-brands.svg"
import Linkedin from "../assets/linkedin-brands.svg"
import Instagram from "../assets/instagram-square-brands.svg"


function Footer() {
    return <footer>
        <div>
            <a href="https://medium.com/@linainfratech">
                <img className="footer-icons" src={Medium} alt="ícone de redirecionamento para o Medium da Lina." />
            </a>
            <a href="https://www.linkedin.com/company/lina-pay/">
                <img className="footer-icons" src={Linkedin} alt="ícone de redirecionamento para o Linkedin da Lina." />
            </a>
            <a href="https://www.instagram.com/lina.infratech/">
                <img className="footer-icons" src={Instagram} alt="ícone de redirecionamento para o Instagram da Lina." />
            </a>
            <a href="/politica" className="linkpolitica">Política de Privacidade</a>
        </div>
    </footer>
}

export default Footer;