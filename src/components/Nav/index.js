import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navbar() {
    
    return (
        <header>
            <h1>
                <a href="https://github.com/Rdeaki/backWards-beaVer">Ricky Deakins</a>
            </h1>
            <nav>
                <ul>
                    <Nav.Link
                        as={Link}
                        to="/about"
                    >
                        <span className='navbar'>About me</span>
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/portfolio"
                    >
                        <span className='navbar'>Portfolio</span>
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/contact"
                    >
                        <span className='navbar'>Contact</span>
                    </Nav.Link>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;