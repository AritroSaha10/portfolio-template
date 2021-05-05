import React from 'react';
import { InlineIcon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import baselineWeb from '@iconify-icons/ic/baseline-web';

const cards = [
    {
        name: "My Puja",
        description: "A full stack web app with organized directory of events / pujas and livestreams directed toward Hindu temple-goers, specifically patrons of the Toronto Kalibari temple.        ",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/MyPuja-Website",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://my-puja-production.web.app",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "white"
            },
        ],
        image: "",
        year: "2020"
    },
    {
        name: "My Puja",
        description: "A full stack web app with organized directory of events / pujas and livestreams directed toward Hindu temple-goers, specifically patrons of the Toronto Kalibari temple.        ",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/MyPuja-Website",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://my-puja-production.web.app",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "white"
            },
        ],
        image: "",
        year: "2020"
    },
    {
        name: "My Puja",
        description: "A full stack web app with organized directory of events / pujas and livestreams directed toward Hindu temple-goers, specifically patrons of the Toronto Kalibari temple.        ",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/MyPuja-Website",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://my-puja-production.web.app",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "white"
            },
        ],
        image: "",
        year: "2020"
    },
    {
        name: "My Puja",
        description: "A full stack web app with organized directory of events / pujas and livestreams directed toward Hindu temple-goers, specifically patrons of the Toronto Kalibari temple.        ",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/AritroSaha10/MyPuja-Website",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://my-puja-production.web.app",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "white"
            },
        ],
        image: "",
        year: "2020"
    },
]


function About() {
    return (
        <section className="works">
            <div className="title">
                <h2>Works</h2>
            </div>

            <div className="cards">
                {cards.map(({ name, description, projectRedirects, image, year }) => (
                    <div className="card">
                        {image && <img src={image} alt="Project preview" />}
                        <div className="nameAndYear">
                            <h3>{name}</h3>

                            {year && <p className="year">{year}</p>}
                        </div>

                        <p>{description}</p>

                        <div className="redirects">
                            {projectRedirects.map(({ siteName, url, icon }) => (
                                <a className="projectLink" href={url}>
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