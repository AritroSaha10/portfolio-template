import React from 'react';
import { useState } from "react";

import "../styles/contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("bruhuh");
        
        window.location.href = `mailto:example@email.com?subject=Message%20from%20${name}&cc=${email}&body=${message}`;
    };

    return (
        <section className="contact" id="contact">
            <div className="title">
                <div>
                    <h2>Contact Me</h2>
                    <p>Want to get into contact? Enter your details in this form and I'll get to you as soon as possible.</p>
                </div>
            </div>

            <div className="content">
                <form onSubmit={handleFormSubmit} action="#">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" placeholder="John Smith" value={name} onChange={(event) => setName(event.target.value)} required />

                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" placeholder="someone@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
}

export default Contact;