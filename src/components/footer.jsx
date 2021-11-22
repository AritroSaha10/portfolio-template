import React from 'react';

// Icons
import { InlineIcon } from '@iconify/react';
import instagramIcon from '@iconify-icons/mdi/instagram';
import githubIcon from '@iconify-icons/mdi/github';
import emailIcon from '@iconify-icons/mdi/email';
import stackoverflowIcon from '@iconify-icons/cib/stackoverflow';

import "../styles/footer.css";

const links = [
    {
        name: "Instagram",
        image: instagramIcon,
        link: "https://www.instagram.com/instagram/" // TODO: Replace with your own Instagram profile, or remove this link
    },
    {
        name: "GitHub",
        image: githubIcon,
        link: "https://github.com/github"// TODO: Replace with your own GitHub profile, or remove this link
    },
    {
        name: "StackOverflow",
        image: stackoverflowIcon,
        link: "https://stackoverflow.com/users/..." // TODO: Replace with your own StackOverflow profile, or remove this link
    },
    {
        name: "Email",
        image: emailIcon,
        link: "mailto:example@mail.com" // TODO: Replace with your own email, or remove this link
    }
];

function Footer() {
    return (
        <footer>
            <nav className="items">
                {links.map(({ name, image, link }) => (
                    <p key={name}>
                        <a href={link} title={name}>
                            {image &&
                                <InlineIcon icon={image} style={{ "fontSize": "20px" }} />
                            }

                            {
                                (name && !image) &&
                                name
                            }
                        </a>
                    </p>
                ))}
            </nav>
        </footer>
    );
}

export default Footer;