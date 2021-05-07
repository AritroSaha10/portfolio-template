import React from 'react';
import profilePicture from "../images/pfp.png";

import "../styles/animations.css";
import "../styles/about.css";

function Home() {
    return (
        <section className="home" id="about">
            <div className="content">
                <div className="title">
                    <h1 className="animate fadeInLeft one">Hi, I'm Aritro Saha. </h1>
                    <h2 className="animate fadeInLeft two">
                        I'm a high school student and a self-taught
                        software developer in Toronto, Ontario.
                    </h2>
                </div>

                <p className="animate fadeInLeft two">
                    I've been programming for 5 years, and always
                    enjoy taking up any type of project, from embedded
                    development to website design.
                </p>

                <p className="animate fadeInLeft two">I'm experienced in:</p>
                <ul className="animate fadeInLeft two">
                    <li>React</li>
                    <li>HTML / CSS / JS</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Native Android Development</li>
                    <li>and more...</li>
                </ul>

                <p className="animate fadeInLeft three">I don't do freelance right now, but am planning to do so in the future.</p>

                <br />

                <a className="call-to-action animate fadeInLeft three" href="#contact">Get in Touch <span className="arrow">➜</span></a>
            </div>

            <div className="picture animate fadeInRight one">
                <img src={profilePicture} alt="Portrait" title="Portrait" />
            </div>
        </section>
    );
}

export default Home;