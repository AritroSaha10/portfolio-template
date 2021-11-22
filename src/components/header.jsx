import React from 'react';

import "../styles/header.css";

const links = [
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Projects",
        link: "#projects"
    },
    /*
    {
        name: "Blog",
        link: "#"
    },
    */
    {
        name: "Contact",
        link: "#contact"
    }
];

function Header() {
    return (
        <header>
            <div className="logo">J.S.</div>
            <nav className="items">
                {links.map(({ name, link }) => (
                    <p key={name}>
                        <a href={link}>
                            {name}
                        </a>
                    </p>
                ))}
            </nav>
        </header>
    );
}

export default Header;