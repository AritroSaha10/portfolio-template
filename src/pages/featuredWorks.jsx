import React from 'react'

// CSS
import "../styles/featuredWorks.css";

// Images
import coolWebsite1 from "../images/projectThumbnails/cool-website.png";
import coolWebsite2 from "../images/projectThumbnails/cool-website-2.png";
import coolestWebsite from "../images/projectThumbnails/coolest-website.png";

// Icons
import { InlineIcon } from '@iconify/react';
import githubIcon from '@iconify-icons/mdi/github';
import baselineWeb from '@iconify-icons/ic/baseline-web';

const projects = [
    {
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices nunc nec neque tristique, at finibus velit viverra. Ut malesuada metus vitae leo porttitor pellentesque. Phasellus in massa vel urna bibendum lobortis et nec nisi. Aenean vulputate mattis quam quis egestas. Vivamus ornare facilisis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue erat quis eros posuere, quis sodales sem congue.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/github/docs",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
            {
                siteName: "Website",
                url: "https://github.com",
                icon: <InlineIcon className="icon" icon={baselineWeb} />,
                color: "#673ab7"
            },
        ],
        image: coolWebsite1,
        year: "2020/2021",
        tagline: "Cool Project"
    },
    {
        name: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices nunc nec neque tristique, at finibus velit viverra. Ut malesuada metus vitae leo porttitor pellentesque. Phasellus in massa vel urna bibendum lobortis et nec nisi. Aenean vulputate mattis quam quis egestas. Vivamus ornare facilisis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue erat quis eros posuere, quis sodales sem congue.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            }
        ],
        image: coolWebsite2,
        year: "2020",
        tagline: "Cooler Project"
    },
    {
        name: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices nunc nec neque tristique, at finibus velit viverra. Ut malesuada metus vitae leo porttitor pellentesque. Phasellus in massa vel urna bibendum lobortis et nec nisi. Aenean vulputate mattis quam quis egestas. Vivamus ornare facilisis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue erat quis eros posuere, quis sodales sem congue.",
        projectRedirects: [
            {
                siteName: "GitHub",
                url: "https://github.com/",
                icon: <InlineIcon className="icon" icon={githubIcon} />,
                color: "#1976d2"
            },
        ],
        image: coolestWebsite,
        year: "2019/2020",
        tagline: "Coolest Project"
    }
]

const bgColors = [
    "var(--bg-accent-color)",
    "var(--bg-color)",
]

function FeaturedWorks() {
    return (
        <section className="featuredWorks">
            <div className="projectSlides">
                {projects.map(({ name, description, projectRedirects, image, tagline }, i) => (
                    // Alternate slide direction based on order
                    <div className={`slide ${i % 2 ? "left" : "right"}`} key={i} style={{ backgroundColor: bgColors[i % bgColors.length] }}>
                        <div className="preview">
                            <img src={image} alt={`${name} Preview`} />
                        </div>

                        <div className="content">
                            <h1>{name}</h1>
                            <h2>{tagline}</h2>
                            <p>{description}</p>

                            <div className="redirects">
                                {projectRedirects.map(({ siteName, url, icon, color }) => (
                                    <a className="projectLink" target="_blank" rel="noreferrer" href={url} key={name + siteName} style={{ backgroundColor: color }}>
                                        {icon}
                                        {siteName}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturedWorks;