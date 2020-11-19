import React, { useState } from 'react'
import Logo from '../assets/LINA_OFICIAL-01.png'
import BtnPrimary from './btnprimary'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light" color="light" light expand="md">
                <a href="/"><img className="logo_lina" src={Logo} alt="Logo Lina" /></a>
                <NavbarToggler className="navbar-toggler" onClick={toggle} />
                <Collapse className="collapse navbar-collapse justify-content-end" isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/">Sobre</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/products">Produtos</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="">Contato</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="">Blog</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <NavLink href="https://linapay.readme.io/">Desenvolvedor</NavLink>
                        </NavItem>
                        <NavItem className="nav-item">
                            <BtnPrimary />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;