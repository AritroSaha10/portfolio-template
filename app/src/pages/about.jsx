import React from 'react';
import profilePicture from "../images/pfp.png";

function Home() {
    return (
        <section className="home">
            <div className="content">
                <h1>Hi, I'm Aritro Saha. </h1>
                <p>
                    I'm a high school student and a self-taught
                    software developer in Toronto, Ontario. I've been
                    programming for 5 years, and always enjoy taking up any
                    type of project, from embedded development to website design.
                </p>

                <p>I'm experienced in:</p>
                <ul>
                    <li>Python</li>
                    <li>React</li>
                    <li>HTML / CSS / JS</li>
                    <li>C++</li>
                    <li>and more...</li>
                </ul>

                <p>I don't do freelance right now, but am planning to do so in the future.</p>
            </div>

            <div className="picture">
                <img src={profilePicture} alt="Portrait" title="Portrait"/>
            </div>
        </section>
    );
}

export default Home;