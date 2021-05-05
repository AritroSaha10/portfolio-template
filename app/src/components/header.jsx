import React from 'react';

const links = [
    {
        name: "About",
        link: "#"
    },
    {
        name: "Works",
        link: "#"
    },
    {
        name: "Contact",
        link: "#"
    }
];

function Header() {
    return (
        <header>
            <div className="logo">Aritro Saha</div>
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