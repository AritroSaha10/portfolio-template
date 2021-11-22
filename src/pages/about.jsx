import React from 'react';
import profilePicture from "../images/person.jfif";

import "../styles/about.css";

function Home() {
    return (
        <section className="home" id="about">
            <div className="content">
                <div className="title">
                    <h1>Hi, I'm John Smith. </h1>
                    <h2>
                        I'm a student at John Fraser Secondary School, and love programming.
                    </h2>
                </div>

                <p style={{fontSize: "15px"}}>
                    I'm a beginner in web development, and I'm currently learning React.js.
                </p>

                <br />

                <a className="call-to-action" href="#contact">Get in Touch <span className="arrow">➜</span></a>
            </div>

            <div className="picture">
                <img src={profilePicture} alt="Portrait" title="Portrait" />
            </div>
        </section>
    );
}

export default Home;