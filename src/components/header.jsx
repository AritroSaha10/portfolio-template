import React from 'react';

import "../styles/header.css";

const links = [
    /* TODO: Integrate this
    {
        name: "About",
        link: "#"
    },
    {
        name: "Works",
        link: "#"
    },
    {
        name: "Blog",
        link: "#"
    },
    {
        name: "Contact",
        link: "#"
    }
    */
];

function Header() {
    return (
        <header>
            <div className="logo">A.S</div>
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