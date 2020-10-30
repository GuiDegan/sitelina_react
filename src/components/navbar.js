import React, { useState } from 'react'
import Logo from '../assets/LINA_OFICIAL-01.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar class="navbar navbar-expand-lg navbar-light bg-light" color="light" light expand="md">
                <img className="logo_lina" src={Logo} alt="Logo Lina" />
                <NavbarToggler className="navbar-toggler" onClick={toggle} />
                <Collapse className="collapse navbar-collapse justify-content-end" isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="nav-item">
                            <NavLink className="nav-link" href="/components/">Sobre</NavLink>
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
                            <NavLink href="https://github.com/reactstrap/reactstrap">Desenvolvedor</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;