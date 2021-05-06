import React from 'react';

import "../styles/header.css";

const links = [
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Works",
        link: "#works"
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
            <div className="logo">&#60;A.S/&#62;</div>
            <nav className="items">
                {links.map(({ name, link }) => (
                    <p>
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