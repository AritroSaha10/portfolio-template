import React from 'react';

// Icons
import { InlineIcon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import baselineWeb from '@iconify-icons/ic/baseline-web';
import bxlPlayStore from '@iconify-icons/bx/bxl-play-store';

// CSS
import "../styles/works.css";

const cards = [
    {
        name: "Card 1 Projects",
        description: "My project as a card!",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://example.com",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "#673ab7"
            },
        ],
        image: null,
        year: "2020/2021"
    },
    {
        name: "Card 2",
        description: "Another project as a card",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            }
        ],
        image: null,
        year: "2020"
    },
    {
        name: "Card 3",
        description: "More projects as cards!",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Google Play",
                url: "https://play.google.com/store",
                icon: <InlineIcon className="icon" icon={bxlPlayStore} />,
                color: "#00796b"
            }
        ],
        image: null,
        year: "2019/2020"
    },
    {
        name: "Another Card!",
        description: "Here is another card!",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://example.com",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "#673ab7"
            },
        ],
        image: null,
        year: "2020"
    },
    {
        name: "More Cards?",
        description: "Yes another card.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: null,
        year: "2020/2021"
    },
    {
        name: "Last Card",
        description: "Finally, the last card!",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: null,
        year: "2021"
    },
]

function About() {
    return (
        <section className="works">
            <div className="title">
                <h1>Other Projects</h1>
            </div>

            <div className="cards">
                {cards.map(({ name, description, projectRedirects, image, year }) => (
                    <div className="card" key={name}>
                        {image && <img className="thumbnail" src={image} alt="Project preview" />}
                        <div className="content">
                            <h3>{name}</h3>

                            {year && <p className="year">{year}</p>}

                            <p>{description}</p>
                        </div>

                        <div className="redirects">
                            {projectRedirects.map(({ siteName, url, icon, color }) => (
                                <a className="projectLink" target="_blank" rel="noreferrer" href={url} key={name + siteName} style={{ backgroundColor: color }}>
                                    {icon}
                                    {siteName}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About;